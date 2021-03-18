import React, { useContext } from "react";
import { FeatureCollectionContext } from "react-cismap/contexts/FeatureCollectionContextProvider";
import SecondaryInfoPanelSection from "react-cismap/topicmaps/SecondaryInfoPanelSection";
import SecondaryInfo from "react-cismap/topicmaps/SecondaryInfo";
import {
  getLastYearMeasurements,
  getLastYearMinus1Measurements,
} from "./helper/convertItemToFeature";

const InfoPanel = () => {
  const { selectedFeature, items } = useContext(FeatureCollectionContext);

  const station = selectedFeature?.properties;

  if (station !== undefined) {
    let foto = station?.foto;

    let minHeight4MainSextion = undefined;
    if (foto !== undefined) {
      minHeight4MainSextion = 250;
    }

    // --- value and outage counter and avg of the last 10 years
    let valueCounter = 0;
    let outageCounter = 0;
    const avgs = {};
    for (const year of Object.keys(station.werte)) {
      const yearValues = station.werte[year];
      for (let i = 0; i < Math.min(yearValues.length, 12); ++i) {
        if (yearValues[i] === -9999) {
          outageCounter++;
        } else {
          valueCounter++;
        }
      }
      if (yearValues.length === 13) {
        avgs[year] = yearValues[12];
      }
    }

    let last12;

    if (station?.werte && Object.keys(station?.werte).length > 0) {
      // --- measurements of the last 12 months
      let { values: lastYearValues, year: lastYear } = getLastYearMeasurements(station);
      let lastYearM1Values = getLastYearMinus1Measurements(station);

      //remove average
      if (lastYearValues?.length === 13) {
        lastYearValues = [...lastYearValues]; // spread op bc original is immutable
        lastYearValues.pop();
      }
      if (lastYearM1Values?.length === 13) {
        lastYearM1Values = [...lastYearM1Values]; // spread op bc original is immutable
        lastYearM1Values.pop();
      }

      let twoYearVals = [];
      if (lastYearM1Values) {
        let index = 0;
        for (const value of lastYearM1Values) {
          twoYearVals.push({ year: lastYear - 1, index, value });
          index++;
        }
      }
      if (lastYearValues) {
        let index = 0;
        for (const value of lastYearValues) {
          twoYearVals.push({ year: lastYear, index, value });
          index++;
        }
      }

      last12 = twoYearVals.slice(Math.max(twoYearVals.length - 12, 0));

      // --- avg of the last 10 years means delete the first n values
      //     where n=count of keys in werte-10
      const years = Object.keys(station.werte);
      const firstNElementsToDestroy = years.length - 10;
      let deleteCounter = 0;
      for (const year of years) {
        if (deleteCounter < firstNElementsToDestroy) {
          delete avgs[year];
          deleteCounter++;
        }
      }
    }
    const subSections = [
      <SecondaryInfoPanelSection
        key='last12'
        bsStyle='info'
        header={"NO₂-Messwerte der letzten 12 Monate"}
      >
        <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
          <pre>{JSON.stringify(last12, null, 2)}</pre>
        </div>
      </SecondaryInfoPanelSection>,
      <SecondaryInfoPanelSection
        key='average10'
        bsStyle='warning'
        header={"NO₂-Jahresmittelwerte der letzten zehn Kalenderjahre"}
      >
        <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
          <pre>{JSON.stringify(avgs, null, 2)}</pre>
        </div>
      </SecondaryInfoPanelSection>,
    ];

    return (
      <SecondaryInfo
        titleIconName='info-circle'
        title={"Datenblatt: Messstation für Stickstoffdioxid (NO₂)"}
        mainSection={
          <div style={{ width: "100%", minHeight: minHeight4MainSextion }}>
            {foto !== undefined && (
              <img
                alt='Bild'
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  float: "right",
                  paddingBottom: "5px",
                }}
                src={foto}
                width='250'
              />
            )}
            <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
              <b>Adresse:</b>

              <p>
                {station?.strasse} {station?.hausnummer}{" "}
                {station?.zusatzinfo && <span>({station?.zusatzinfo})</span>}
              </p>

              <b>Stationsaktivität::</b>

              {station?.bis !== undefined && (
                <p>
                  Von {new Date(station?.von).toLocaleDateString()} bis{" "}
                  {new Date(station?.bis).toLocaleDateString()} generierte diese Station insgesamt{" "}
                  {valueCounter} NO₂-Messwerte (Ausfälle nicht berücksichtigt).
                </p>
              )}
              {station?.bis === undefined && (
                <p>
                  Seit {new Date(station?.von).toLocaleDateString()} generierte diese Station{" "}
                  {valueCounter} NO₂-Messwerte (Ausfälle nicht berücksichtigt).
                </p>
              )}
              <b>Messausfälle:</b>
              {outageCounter > 0 && (
                <p>
                  Diese Messstation generierte an {outageCounter}{" "}
                  {outageCounter === 1 ? "Monat" : "Monaten"} einen Messausfall. Damit besitzt sie
                  eine Zuverlässigkeit von{" "}
                  {Math.round(
                    ((valueCounter - outageCounter) / (valueCounter + outageCounter)) * 1000
                  ) / 10}
                  %.
                </p>
              )}
              {outageCounter === 0 && (
                <p>
                  Diese Messstation lieferte in jedem Monat der Stationsaktivität einen
                  NO₂-Messwert. Damit liegt bisher kein Messausfall vor.
                </p>
              )}
            </div>
          </div>
        }
        subSections={subSections}
      />
    );
  } else {
    return null;
  }
};
export default InfoPanel;
