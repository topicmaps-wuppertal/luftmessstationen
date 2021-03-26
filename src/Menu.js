import { useContext } from "react";
import {
  FeatureCollectionContext,
  FeatureCollectionDispatchContext,
} from "react-cismap/contexts/FeatureCollectionContextProvider";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { getSimpleHelpForTM } from "react-cismap/tools/uiHelper";
import { Link } from "react-scroll";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import Section from "react-cismap/topicmaps/menu/Section";
import FilterPanel from "react-cismap/topicmaps/menu/FilterPanel";
import DefaultSettingsPanel from "react-cismap/topicmaps/menu/DefaultSettingsPanel";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import { LOOKUP } from "./helper/constants";
const MyMenu = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);
  const { filterState, filterMode, filteredItems, shownFeatures } = useContext(
    FeatureCollectionContext
  );
  const { setFilterState, setFilterMode } = useContext(FeatureCollectionDispatchContext);

  const { items } = useContext(FeatureCollectionContext);

  const kategorien = [];
  const katValues = [];
  const themen = [];
  const themenValues = [];
  const topicMapTitle = "Luftmessstationskarte Wuppertal";

  const getFilterHeader = () => {
    const count = filteredItems?.length || 0;

    let term;
    if (count === 1) {
      term = "Standort";
    } else {
      term = "Standorte";
    }

    return `Messstationen der Luftqualität (${count} ${term} gefunden, davon ${
      shownFeatures?.length || "0"
    } in der Karte)`;
  };

  const filterConfiguration = {
    mode: "list", // list or tabs
    resetedFilter: {
      stations: ["unauffaellig", "auffaellig", "warnend", "inaktiv", "abgebaut"],
    },
    filterMode: "gibtnureinen",
    filters: [
      {
        title: "aktive Messstationen",
        key: "stations",
        type: "checkBoxes",
        values: [
          {
            keys: ["unauffaellig", "auffaellig", "warnend", "inaktiv"],
            title: "alle aktiven Stationen",
          },
          {
            key: "unauffaellig",
            indent: 30,
            title: "unauffällige Stationen",
            color: LOOKUP.unauffaellig.color,
            icon: "square",
            iconPos: "pre",
          },
          {
            key: "auffaellig",
            indent: 30,
            title: "auffällige Stationen",
            color: LOOKUP.auffaellig.color,
            icon: "square",
            iconPos: "pre",
          },
          {
            key: "warnend",
            indent: 30,
            title: "warnende Stationen",
            color: LOOKUP.warnend.color,
            icon: "square",
            iconPos: "pre",
          },
          {
            key: "inaktiv",
            indent: 30,
            title: "Stationen mit Messausfall",
            color: LOOKUP.inaktiv.color,
            icon: "square",
            iconPos: "pre",
          },
        ],
        setAll: () => {
          setFilterState({ ...filterState, themen });
        },
        setNone: () => {
          setFilterState({ ...filterState, themen: [] });
        },
        colorizer: (item, selected) => (selected ? item.color : "#eeeeee"),
      },
      {
        title: "inaktive Messstationen",
        key: "stations",
        type: "checkBoxes",
        values: [
          {
            key: "abgebaut",
            title: "abmontierte Stationen",
            color: LOOKUP.abgebaut.color,
            icon: "square",
            iconPos: "pre",
          },
        ],
        setAll: () => {
          setFilterState({ ...filterState, kategorien });
        },
        setNone: () => {
          setFilterState({ ...filterState, kategorien: [] });
        },
      },
    ],
  };
  const simpleHelp = {
    content: `Die Stadt Wuppertal führt seit vielen Jahren Messungen und Kartierungen durch,
um Aufschlüsse über die Luftbelastungssituation zu erhalten. Diese Erkenntnisse werden 
für Maßnahmen zur Luftreinhaltung und die Stadtentwicklung genutzt. Einer der derzeit 
am meisten diskutierte Luftschadstoff ist Stickstoffdioxid (NO₂ ). Dieser wird als 
Reizgas mit stechend-stickigem Geruch bereits in geringen Konzentrationen wahrgenommen. 
Die Inhalation ist für den Menschen der einzig relevante Aufnahmeweg. 
   
Die europäische Union hat für ihre Mitgliedsstaaten mit mehreren Luftqualitätsrichtlinien
verbindliche Luftqualitätsziele zur Vermeidung oder Verringerung schädlicher Auswirkungen
auf die menschliche Gesundheit und die Umwelt festgelegt. Danach wird die Luftqualität 
in den Staaten der EU nach einheitlichen Methoden und Kriterien beurteilt. In der 
Bundesrepublik Deutschland wurden diese Richtlinien durch Novellierung des 
Bundes-Immissions­schutzgesetzes (BImSchG) sowie durch die Einführung der 39. Verordnung 
zum BImSchG (39. BImSchV) in deutsches Recht umgesetzt. Für Stickstoffdioxid (NO₂ ) gilt 
seit dem Jahr 2010 ein Jahresmittelwert für NO₂  von 40 µg pro Kubikmeter Luft. Die 
Messungen von Stickstoffdioxid (NO₂ ) werden in Wuppertal mit sogenannten Passivsammlern 
durchgeführt und nahezu monatlich abgelesen. 
  
Die Luftmessstationskarte zeigt die Positionen dieser Passivsammler im Wuppertaler Stadtgebiet,
welche in den vergangenen zehn Jahren Messwerte lieferten. Die farbigen Signaturen in der
Karte beziehen sich dabei auf den zuletzt verfügbaren monatlichen NO₂ -Messwert: unauffällig 
grün (≦ 35 mg/m³), auffällig gelb (> 35 µg/m³) und warnend rot (> 40 µg/m³). Die Signaturen 
für Passivsammler, welche bei der letzten monatlichen Ablesung keinen Messwert geliefert 
haben, sind türkis eingefärbt (temporärer Ausfall). Wenn eine Messstation in den letzten 
zehn Jahren abgebaut wurde und damit keine weiteren NO₂ -Messwerte liefert, liegt eine 
blaugraue Signatur vor. Die Daten zu den Messstationen und Messwerten seit dem Jahr 
2006 sind im Open-Data-Angebot der Stadt Wuppertal als Datensatz Luftmessstationen 
[[Link zum Open-Data-Portal](https://offenedaten-wuppertal.de/)] verfügbar.`,
  };
  return (
    <ModalApplicationMenu
      menuIcon={"bars"}
      menuTitle={"Filter, Einstellungen und Kompaktanleitung"}
      menuIntroduction={
        <span>
          Benutzen Sie die Auswahlmöglichkeiten unter{" "}
          <Link
            className='useAClassNameToRenderProperLink'
            to='filter'
            containerId='myMenu'
            smooth={true}
            delay={100}
            onClick={() => setAppMenuActiveMenuSection("filter")}
          >
            Filter
          </Link>
          , um die in der Karte angezeigten vorbildlichen Luftmessstationen für Stickstoffdioxid
          (NO₂) auf die für Sie relevanten Stationen zu beschränken. Über{" "}
          <Link
            className='useAClassNameToRenderProperLink'
            to='settings'
            containerId='myMenu'
            smooth={true}
            delay={100}
            onClick={() => setAppMenuActiveMenuSection("settings")}
          >
            Einstellungen
          </Link>{" "}
          können Sie die Darstellung der Hintergrundkarte und der Stationen an Ihre Vorlieben
          anpassen. Wählen Sie die{" "}
          <Link
            className='useAClassNameToRenderProperLink'
            to='help'
            containerId='myMenu'
            smooth={true}
            delay={100}
            onClick={() => setAppMenuActiveMenuSection("help")}
          >
            Kompaktanleitung
          </Link>{" "}
          für detailliertere Bedienungsinformationen.
        </span>
      }
      menuSections={[
        <Section
          key='filter'
          sectionKey='filter'
          sectionTitle={getFilterHeader()}
          sectionBsStyle='primary'
          sectionContent={<FilterPanel filterConfiguration={filterConfiguration} />}
        />,
        <DefaultSettingsPanel
          previewMapPosition='lat=51.2607860760692&lng=7.164304562911684&title&zoom=9'
          previewMapClusteringOptions={undefined}
          key='settings'
        />,
        <Section
          key='help'
          sectionKey='help'
          sectionTitle='Kompaktanleitung'
          sectionBsStyle='default'
          sectionContent={
            <ConfigurableDocBlocks configs={getSimpleHelpForTM(topicMapTitle, simpleHelp)} />
          }
        />,
      ]}
    />
  );
};
export default MyMenu;
