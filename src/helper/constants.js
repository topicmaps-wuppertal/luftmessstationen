export const host = "https://wupp-topicmaps-data.cismet.de";

export const LOOKUP = {
  abgebaut: {
    color: "#9DBCCC",
    signature: "Luft_Icon_Messstation_abgebaut_farbig.svg",
    header: "Messstation für NO₂ (inaktiv, demontiert)",
    title: "abgebaut",
    filterTitle: "abgebaute",
  },
  inaktiv: {
    color: "#4FAFC5",
    signature: "Luft_Icon_Messstation_deaktiv_farbig.svg",
    header: "Messstation für NO₂ (aktiv, aktuell Messausfall)",
    title: "inaktiv",
    filterTitle: "inaktive",
  },
  unauffaellig: {
    color: "#9ACD32",
    signature: "Luft_Icon_Messstation_unauffaellig_farbig.svg",
    header: "Messstation für NO₂ (aktiv, unauffällig)",
    title: "unauffällig",
    filterTitle: "unauffällige",
  },
  auffaellig: {
    color: "#FFA500",
    signature: "Luft_Icon_Messstation_auffaellig_farbig.svg",
    header: "Messstation für NO₂ (aktiv, auffällig)",
    title: "auffällig",
    filterTitle: "auffällige",
  },
  warnend: {
    color: "#E01414",
    signature: "Luft_Icon_Messstation_warnend_farbig.svg",
    header: "Messstation für NO₂ (aktiv, warnend)",
    title: "warnend",
    filterTitle: "warnende",
  },
  unknown: { color: "#eeeeee", signature: "Platz.svg", header: "Fehler" },
};

export const MONTHS = [
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
