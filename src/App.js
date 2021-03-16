import { useEffect } from "react";

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
import { getGazData, convertItemToFeature, LogSelection } from "./helper";
import { getClusterIconCreatorFunction } from "react-cismap/tools/uiHelper";

function App() {
  const [gazData, setGazData] = useState([]);
  useEffect(() => {
    getGazData(setGazData);
    document.title = "Luftmessstationenskarte Wuppertal";
  }, []);
  return (
    <TopicMapContextProvider
      appKey='LuftmessstationenWuppertal.TopicMap'
      featureItemsURL={"https://wupp-topicmaps-data.cismet.de/data/no2.data.json"}
      getFeatureStyler={getGTMFeatureStyler}
      featureTooltipFunction={(feature) => feature?.text}
      convertItemToFeature={convertItemToFeature}
      clusteringOptions={{
        iconCreateFunction: getClusterIconCreatorFunction(30, (props) => props.color),
      }}
    >
      <TopicMapComponent
        locatorControl={true}
        gazData={gazData}
        infoBox={
          <GenericInfoBoxFromFeature
            pixelwidth={350}
            config={{
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
            //link.href = downloadOptions.url;
            link.href = mailToHref;
            //link.download = downloadOptions.file;
            //link.target = "_blank";
            link.click();
          }}
        />
        <FeatureCollection></FeatureCollection>
        <LogSelection />
      </TopicMapComponent>
    </TopicMapContextProvider>
  );
}

export default App;
