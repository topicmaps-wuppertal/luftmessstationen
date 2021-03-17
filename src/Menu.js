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
import { LOOKUP } from "./helper";
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
            title: "nur unaufffällige Stationen",
            color: LOOKUP.unauffaellig.color,
            icon: "square",
          },
          {
            key: "auffaellig",
            indent: 30,
            title: "nur auffällige Stationen",
            color: LOOKUP.auffaellig.color,
            icon: "square",
          },
          {
            key: "warnend",
            indent: 30,
            title: "nur warnende Stationen",
            color: LOOKUP.warnend.color,
            icon: "square",
          },
          {
            key: "inaktiv",
            indent: 30,
            title: "nur Stationen mit Messausfall",
            color: LOOKUP.inaktiv.color,
            icon: "square",
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
            title: "inaktive Stationen",
            color: LOOKUP.inaktiv.color,
            icon: "square",
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
  const simpleHelp = undefined;

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
        <DefaultSettingsPanel key='settings' />,
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
