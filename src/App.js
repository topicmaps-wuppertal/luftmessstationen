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
          title='Cooltip ;-)'
          action={() => {
            window.alert("Rückfragemöglichkeit zu den Messwerten");
          }}
        />
        <FeatureCollection></FeatureCollection>
        <LogSelection />
      </TopicMapComponent>
    </TopicMapContextProvider>
  );
}

export default App;
