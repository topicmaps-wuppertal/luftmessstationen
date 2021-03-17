import { addSVGToProps } from "react-cismap/tools/svgHelper";
import { md5FetchText, fetchJSON, md5FetchJSON } from "react-cismap/tools/fetching";
import { getGazDataForTopicIds } from "react-cismap/tools/gazetteerHelper";
import { useContext } from "react";
import { FeatureCollectionContext } from "react-cismap/contexts/FeatureCollectionContextProvider";

const host = "https://wupp-topicmaps-data.cismet.de";

export const LOOKUP = {
  abgebaut: {
    color: "#9DBCCC",
    signature: "Luft_Icon_Messstation_abgebaut_farbig.svg",
    header: "Messstation für NO² (inaktiv, demontiert)",
  },
  inaktiv: {
    color: "#4AFAFC5",
    signature: "Luft_Icon_Messstation_deaktiv_farbig.svg",
    header: "Messstation für NO² (aktiv, aktuell Messausfall)",
  },
  unauffaellig: {
    color: "#9ACD32",
    signature: "Luft_Icon_Messstation_unauffaellig_farbig.svg",
    header: "Messstation für NO² (aktiv, unauffällig)",
  },
  auffaellig: {
    color: "#FFA500",
    signature: "Luft_Icon_Messstation_auffaellig_farbig.svg",
    header: "Messstation für NO² (aktiv, auffällig)",
  },
  warnend: {
    color: "#E01414",
    signature: "Luft_Icon_Messstation_warnend_farbig.svg",
    header: "Messstation für NO² (aktiv, warnend)",
  },
  unknown: { color: "#eeeeee", signature: "Platz.svg", header: "Fehler" },
};

const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export const getUWZ = async (setUWZ) => {
  const uwz = await md5FetchJSON("MapData", host + "/data/umweltzonen.json");
  setUWZ(uwz);
};

export const getGazData = async (setGazData) => {
  const prefix = "GazData";
  const sources = {};

  sources.adressen = await md5FetchText(prefix, host + "/data/adressen.json");
  sources.bezirke = await md5FetchText(prefix, host + "/data/bezirke.json");
  sources.quartiere = await md5FetchText(prefix, host + "/data/quartiere.json");
  sources.pois = await md5FetchText(prefix, host + "/data/pois.json");
  sources.kitas = await md5FetchText(prefix, host + "/data/kitas.json");
  sources.no2 = await md5FetchText(prefix, host + "/data/no2.json");

  const gazData = getGazDataForTopicIds(sources, [
    "no2",
    "pois",
    "kitas",
    "bezirke",
    "quartiere",
    "adressen",
  ]);

  setGazData(gazData);
};

const hasValues = (item) => {
  const values = item?.werte;
  return values !== undefined && JSON.stringify(values) !== "{}";
};

const getLastMeasurement = (item) => {
  const lym = getLastYearMeasurements(item);

  if (lym) {
    const { values: lymValues, year } = lym;
    if (lymValues.length === 13) {
      return { value: lymValues[11], monthIndex: 11, year };
    } else {
      return { value: lymValues[lymValues.length - 1], monthIndex: lymValues.length - 1, year };
    }
  }
};
const getLastYear = (item) => {
  if (hasValues(item)) {
    const values = item?.werte;
    const sortedkeys = Object.keys(values).sort();
    return sortedkeys[sortedkeys.length - 1];
  }
};
const getLastYearM1 = (item) => {
  if (hasValues(item)) {
    const values = item?.werte;
    const sortedkeys = Object.keys(values).sort();
    if (sortedkeys.length > 1) {
      return sortedkeys[sortedkeys.length - 2];
    }
  }
};

const getLastYearMeasurements = (item) => {
  const ly = getLastYear(item);
  const values = item?.werte;
  if (ly) {
    return { values: values[ly], year: ly };
  }
};
const getLastYearMinus1Measurements = (item) => {
  const lym1 = getLastYearM1(item);
  const values = item?.werte;
  if (lym1) {
    return values[lym1];
  }
};

const getWeightedAverage = (measurments) => {
  if (measurments && measurments.length === 13) {
    return measurments[12];
  }
};
const getActivityStatus = (item) => {
  if (item?.bis !== undefined) {
    return "abgebaut";
  } else {
    return "aktiv";
  }
  //todo inaktiv
};

// unauffällig 1-35 (einschließlich) µg/m³ Grün
// auffällig 36-40 (einschließlich) µg/m³ Orange
// warnend >40 µg/m³ Rot
const getStatus = (item) => {
  if (getActivityStatus(item) === "aktiv") {
    const lym = getLastMeasurement(item)?.value;
    console.log("lym", lym);

    if (lym > 0 && lym <= 35) {
      return "unauffaellig";
    } else if (lym > 35 && lym <= 40) {
      return "auffaellig";
    } else if (lym > 40) {
      return "warnend";
    } else if (lym === 9999) {
      return "inaktiv";
    } else {
      return "unknown";
    }
  } else {
    return getActivityStatus(item);
  }
};

const getSignature = (item) => {
  const status = getStatus(item);
  return LOOKUP[status].signature;
};

export const LogSelection = () => {
  const { selectedFeature } = useContext(FeatureCollectionContext);
  console.log("selectedFeature.properties", selectedFeature?.properties);

  return <div></div>;
};

const getAdditionalInfo = (item) => {
  const lastYearAverage = getWeightedAverage(getLastYearMeasurements(item)?.values);
  const lastYear = getLastYear(item);
  const lastYearM1Average = getWeightedAverage(getLastYearMinus1Measurements(item));
  const lastYearM1 = getLastYearM1(item);

  let ret = "";
  if (lastYearAverage || lastYearM1Average) {
    ret = "gewichtete Jahresmittelwerte:";
    if (lastYearAverage) {
      ret = ret + "\n" + lastYearAverage + " µg/m³ (" + lastYear + ")";
    }
    if (lastYearM1Average) {
      ret = ret + "\n" + lastYearM1Average + " µg/m³ (" + lastYearM1 + ")";
    }
  }
  console.log("ret", ret);

  return ret;
};

const getTitle = (item) => {
  const lm = getLastMeasurement(item);

  if (item?.bis) {
    const demontage = new Date(item?.bis);
    console.log("demontiert", demontage.getMonth(), demontage.getFullYear());

    return `Diese Messstation ist seit ${
      MONTHS[demontage.getMonth() - 1]
    } ${demontage.getFullYear()} abmontiert.`;
  } else {
    if (lm) {
      if (lm.value !== 9999) {
        return lm.value + " µg/m³ (" + MONTHS[lm.monthIndex] + " " + lm.year + ")";
      } else {
        return (
          "Für " +
          MONTHS[lm.monthIndex] +
          " " +
          lm.year +
          "liefert diese Messstation keinen Messwert"
        );
      }
    } else {
      return "Diese Messstation ist abmontiert";
    }
  }
};

export const convertItemToFeature = async (itemIn) => {
  //   console.log("itemIn", itemIn);

  let item = await addSVGToProps(itemIn, (i) => "luft/" + getSignature(i));
  item.status = getStatus(item);
  const text =
    item?.strasse +
    " " +
    (item?.hausnummer || "") +
    (item?.zusatzinfo !== undefined ? " (" + item?.zusatzinfo + ")" : "");

  const type = "Feature";
  const selected = false;
  const geometry = item?.geojson;
  item.color = LOOKUP[item.status].color;
  const info = {
    header: LOOKUP[item.status].header,
    title: getTitle(item),
    additionalInfo: getAdditionalInfo(item),
    subtitle: (
      <span>
        {item?.strasse} {item?.hausnummer} {item?.zusatzinfo && <span>({item?.zusatzinfo})</span>}
      </span>
    ),
  };
  item.info = info;
  item.foto = "https://www.wuppertal.de/geoportal/luftmessstationen/fotos/NO2_test.jpg";
  return {
    text,
    type,
    selected,
    geometry,
    crs: {
      type: "name",
      properties: {
        name: "urn:ogc:def:crs:EPSG::25832",
      },
    },
    properties: item,
  };
};
