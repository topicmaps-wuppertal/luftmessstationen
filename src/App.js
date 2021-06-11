import React, { useContext, useEffect } from "react";

import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-cismap/topicMaps.css";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent";
import FeatureCollection from "react-cismap/FeatureCollection";
import GenericInfoBoxFromFeature from "react-cismap/topicmaps/GenericInfoBoxFromFeature";

import getGTMFeatureStyler from "react-cismap/topicmaps/generic/GTMStyler";
import ContactButton from "react-cismap/ContactButton";
import convertItemToFeature, { getStatus } from "./helper/convertItemToFeature";

import { getClusterIconCreatorFunction } from "react-cismap/tools/uiHelper";
import MyMenu from "./Menu";
import LogSelection from "./helper/LogSelectedFeature";
import UWZ from "./Umweltzonenlayer";
import itemFilterFunction from "./helper/filterFunction";
import { LOOKUP } from "./helper/constants";
import { getGazData } from "./helper/getGazData";
import titleFactory from "./helper/titleFactory";
import InfoPanel from "./SecondaryInfo";
import { MappingConstants } from "react-cismap";

function App() {
  const [gazData, setGazData] = useState([]);

  useEffect(() => {
    getGazData(setGazData);
    document.title = "Luftmessstationskarte Wuppertal";
  }, []);

  return (
    <TopicMapContextProvider
      appKey='LuftmessstationenWuppertal.TopicMap'
      featureItemsURL={"https://wupp-topicmaps-data.cismet.de/data/no2.data.json"}
      // featureItemsURL={"/data/no2.data.json"} //for dev purpose only
      referenceSystemDefinition={MappingConstants.proj4crs25832def}
      getFeatureStyler={getGTMFeatureStyler}
      featureTooltipFunction={(feature) => feature?.text}
      convertItemToFeature={convertItemToFeature}
      clusteringOptions={{
        iconCreateFunction: getClusterIconCreatorFunction(30, (props) => props.color),
      }}
      additionalLayerConfiguration={{
        uwz: {
          title: "Umweltzone",
          initialActive: true,
          layer: <UWZ />,
        },
      }}
      filterState={{
        stations: ["unauffaellig", "auffaellig", "warnend", "inaktiv", "abgebaut"],
      }}
      titleFactory={titleFactory}
      itemFilterFunction={itemFilterFunction}
      classKeyFunction={(item) => LOOKUP[getStatus(item)].title}
      getColorFromProperties={(item) => LOOKUP[getStatus(item)].color}
    >
      <TopicMapComponent
        locatorControl={true}
        gazData={gazData}
        modalMenu={<MyMenu />}
        applicationMenuTooltipString={"Filter | Einstellungen | Anleitung"}
        gazetteerSearchPlaceholder='Stadtteil | Adresse | POI'
        infoBox={
          <GenericInfoBoxFromFeature
            pixelwidth={350}
            config={{
              displaySecondaryInfoAction: true,

              city: "Wuppertal",
              navigator: {
                noun: {
                  singular: "Messstation",
                  plural: "Messstationen",
                },
              },
              noCurrentFeatureTitle: "Keine Messtationen gefunden",
              noCurrentFeatureContent: "",
            }}
          />
        }
        secondaryInfo={<InfoPanel />}
      >
        <ContactButton
          title='Rückfrage zu den Messwerten'
          action={() => {
            let link = document.createElement("a");
            link.setAttribute("type", "hidden");
            const br = "\n";

            let mailToHref =
              "mailto:luftreinhaltung@stadt.wuppertal.de?subject=Rückfrage zu Messwerten&body=" +
              encodeURI(`Sehr geehrte Damen und Herren,${br}${br} zu der Luftmessstationskarte `) +
              encodeURI(`auf${br}${br}`) +
              `${window.location.href.replace(/&/g, "%26").replace(/#/g, "%23")}` +
              encodeURI(
                `${br}` +
                  `${br}` +
                  `habe ich folgende Frage:${br}` +
                  `${br}${br}${br}${br}` +
                  `Mit freundlichen Grüßen${br}` +
                  `${br}` +
                  `${br}`
              );
            document.body.appendChild(link);
            link.href = mailToHref;
            link.click();
          }}
        />
        <FeatureCollection></FeatureCollection>
        {/* <LogSelection /> */}
      </TopicMapComponent>
    </TopicMapContextProvider>
  );
}

export default App;
