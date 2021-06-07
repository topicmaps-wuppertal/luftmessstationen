(this.webpackJsonpluftmessstationen=this.webpackJsonpluftmessstationen||[]).push([[0],{403:function(e,t,n){},404:function(e,t,n){},730:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(20),s=n.n(r),o=(n(403),n(13)),l=(n(404),n(405),n(406),n(407),n(408),n(23)),u=n(395),d=n(171),c=n(397),f=n(393),v=n(394),h=n(19),g=n.n(h),b=n(37),m=n(9),p=n(163),j=n(18),w="https://wupp-topicmaps-data.cismet.de",O={abgebaut:{color:"#9DBCCC",signature:"Luft_Icon_Messstation_abgebaut_farbig.svg",header:"Messstation f\xfcr NO\u2082 (inaktiv, abmontiert)",title:"abmontiert",filterTitle:"abmontierte"},inaktiv:{color:"#4FAFC5",signature:"Luft_Icon_Messstation_deaktiv_farbig.svg",header:"Messstation f\xfcr NO\u2082 (aktiv, aktuell Messausfall)",title:"inaktiv",filterTitle:"Messstationsausf\xe4lle"},unauffaellig:{color:"#9ACD32",signature:"Luft_Icon_Messstation_unauffaellig_farbig.svg",header:"Messstation f\xfcr NO\u2082 (aktiv, unauff\xe4llig)",title:"unauff\xe4llig",filterTitle:"unauff\xe4llige"},auffaellig:{color:"#FFA500",signature:"Luft_Icon_Messstation_auffaellig_farbig.svg",header:"Messstation f\xfcr NO\u2082 (aktiv, auff\xe4llig)",title:"auff\xe4llig",filterTitle:"auff\xe4llige"},warnend:{color:"#E01414",signature:"Luft_Icon_Messstation_warnend_farbig.svg",header:"Messstation f\xfcr NO\u2082 (aktiv, warnend)",title:"warnend",filterTitle:"warnende"},unknown:{color:"#eeeeee",signature:"Platz.svg",header:"Fehler"}},x=[{name:"Januar",shortname:"Jan."},{name:"Februar",shortname:"Feb."},{name:"M\xe4rz",shortname:"M\xe4r."},{name:"April",shortname:"Apr."},{name:"Mai",shortname:"Mai."},{name:"Juni",shortname:"Jun."},{name:"Juli",shortname:"Jul."},{name:"August",shortname:"Aug."},{name:"September",shortname:"Sep."},{name:"Oktober",shortname:"Okt."},{name:"November",shortname:"Nov."},{name:"Dezember",shortname:"Dez."}],k=n(4),S=function(e){var t=null===e||void 0===e?void 0:e.werte;return void 0!==t&&"{}"!==JSON.stringify(t)},y=function(e){var t=M(e);if(t){var n=t.values,i=t.year;return 13===n.length?{value:n[11],monthIndex:11,year:i}:{value:n[n.length-1],monthIndex:n.length-1,year:i}}},M=function(e){var t=function(e){if(S(e)){var t=null===e||void 0===e?void 0:e.werte,n=Object.keys(t).sort();return n[n.length-1]}}(e),n=null===e||void 0===e?void 0:e.werte;if(t)return{values:n[t],year:t}},D=function(e){var t=function(e){if(S(e)){var t=null===e||void 0===e?void 0:e.werte,n=Object.keys(t).sort();if(n.length>1)return n[n.length-2]}}(e),n=null===e||void 0===e?void 0:e.werte;if(t)return n[t]},z=function(e){return void 0!==(null===e||void 0===e?void 0:e.bis)?"abgebaut":"aktiv"},L=function(e){if("aktiv"===z(e)){var t,n=null===(t=y(e))||void 0===t?void 0:t.value;return C(n)}return z(e)},C=function(e){return e>0&&e<=35?"unauffaellig":e>35&&e<=40?"auffaellig":e>40?"warnend":9999===e?"inaktiv":"unknown"},N=function(e){var t=L(e);return O[t].signature},A=function(e){var t=Object.keys(null===e||void 0===e?void 0:e.mittelwerte);t.sort();var n=t.slice(-2),i=(new Date).getFullYear()-2,a=n.filter((function(e){return parseInt(e)>=i})),r="";a.sort((function(e,t){return parseInt(t)-parseInt(e)})),r=0===a.length?"Kein gewichteter Jahresmittelwert aus dem vergangenen Kalenderjahr vorhanden.":1===a.length?"Gewichteter Jahresmittelwert:":"Gewichtete Jahresmittelwerte:";var s,o=Object(m.a)(a);try{for(o.s();!(s=o.n()).done;){var l=s.value;r=r+"\n"+(null===e||void 0===e?void 0:e.mittelwerte[l])+" \xb5g/m\xb3 ("+l+")"}}catch(u){o.e(u)}finally{o.f()}return r},F=function(e){var t=y(e);if(null===e||void 0===e?void 0:e.bis){var n=new Date(null===e||void 0===e?void 0:e.bis);return"Diese Messstation ist seit ".concat(x[n.getMonth()].name," ").concat(n.getFullYear()," abmontiert.")}return t?9999!==t.value?t.value+" \xb5g/m\xb3 ("+x[t.monthIndex].name+" "+t.year+")":"F\xfcr "+x[t.monthIndex].name+" "+t.year+"liefert diese Messstation keinen Messwert":"Diese Messstation ist abmontiert"},I=function(){var e=Object(b.a)(g.a.mark((function e(t){var n,i,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)(t,(function(e){return"luft/"+N(e)}));case 2:return(n=e.sent).status=L(n),i=(null===n||void 0===n?void 0:n.strasse)+" "+((null===n||void 0===n?void 0:n.hausnummer)||"")+(void 0!==(null===n||void 0===n?void 0:n.zusatzinfo)?" ("+(null===n||void 0===n?void 0:n.zusatzinfo)+")":""),"Feature",!1,a=null===n||void 0===n?void 0:n.geojson,n.color=O[n.status].color,r={header:O[n.status].header,title:F(n),additionalInfo:A(n),subtitle:Object(k.jsxs)("span",{children:[null===n||void 0===n?void 0:n.strasse," ",null===n||void 0===n?void 0:n.hausnummer," ",(null===n||void 0===n?void 0:n.zusatzinfo)&&Object(k.jsxs)("span",{children:["(",null===n||void 0===n?void 0:n.zusatzinfo,")"]})]})},n.info=r,(null===n||void 0===n?void 0:n.bild)&&(n.foto="https://www.wuppertal.de/geoportal/luftmessstationen/fotos/"+n.bild),e.abrupt("return",{text:i,type:"Feature",selected:false,geometry:a,crs:{type:"name",properties:{name:"urn:ogc:def:crs:EPSG::25832"}},properties:n});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=n(45),B=n(6),J=n(21),T=n(121),_=n(224),E=n(118),W=n(396),K=n(234),q=n(231),V=function(){var e=Object(i.useContext)(J.b).setAppMenuActiveMenuSection,t=Object(i.useContext)(j.a),n=t.filterState,a=(t.filterMode,t.filteredItems),r=t.shownFeatures,s=Object(i.useContext)(j.b),o=s.setFilterState,l=(s.setFilterMode,Object(i.useContext)(j.a).items,[]),u=[],d={mode:"list",resetedFilter:{stations:["unauffaellig","auffaellig","warnend","inaktiv","abgebaut"]},filterMode:"gibtnureinen",filters:[{title:"aktive Messstationen",key:"stations",type:"checkBoxes",values:[{keys:["unauffaellig","auffaellig","warnend","inaktiv"],title:"alle aktiven Stationen"},{key:"unauffaellig",indent:30,title:"unauff\xe4llige Stationen",color:O.unauffaellig.color,icon:"square",iconPos:"pre"},{key:"auffaellig",indent:30,title:"auff\xe4llige Stationen",color:O.auffaellig.color,icon:"square",iconPos:"pre"},{key:"warnend",indent:30,title:"warnende Stationen",color:O.warnend.color,icon:"square",iconPos:"pre"},{key:"inaktiv",indent:30,title:"Stationen mit Messausfall",color:O.inaktiv.color,icon:"square",iconPos:"pre"}],setAll:function(){o(Object(B.a)(Object(B.a)({},n),{},{themen:u}))},setNone:function(){o(Object(B.a)(Object(B.a)({},n),{},{themen:[]}))},colorizer:function(e,t){return t?e.color:"#eeeeee"}},{title:"inaktive Messstationen",key:"stations",type:"checkBoxes",values:[{key:"abgebaut",title:"abmontierte Stationen",color:O.abgebaut.color,icon:"square",iconPos:"pre"}],setAll:function(){o(Object(B.a)(Object(B.a)({},n),{},{kategorien:l}))},setNone:function(){o(Object(B.a)(Object(B.a)({},n),{},{kategorien:[]}))}}]};return Object(k.jsx)(_.a,{menuIcon:"bars",menuTitle:"Filter, Einstellungen und Kompaktanleitung",menuIntroduction:Object(k.jsxs)("span",{children:["Benutzen Sie die Auswahlm\xf6glichkeiten unter"," ",Object(k.jsx)(T.Link,{className:"useAClassNameToRenderProperLink",to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:function(){return e("filter")},children:"Filter"}),", um die in der Karte angezeigten vorbildlichen Luftmessstationen f\xfcr Stickstoffdioxid (NO\u2082) auf die f\xfcr Sie relevanten Stationen zu beschr\xe4nken. \xdcber"," ",Object(k.jsx)(T.Link,{className:"useAClassNameToRenderProperLink",to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:function(){return e("settings")},children:"Einstellungen"})," ","k\xf6nnen Sie die Darstellung der Hintergrundkarte und der Stationen an Ihre Vorlieben anpassen. W\xe4hlen Sie die"," ",Object(k.jsx)(T.Link,{className:"useAClassNameToRenderProperLink",to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:function(){return e("help")},children:"Kompaktanleitung"})," ","f\xfcr detailliertere Bedienungsinformationen."]}),menuSections:[Object(k.jsx)(E.a,{sectionKey:"filter",sectionTitle:function(){var e,t=(null===a||void 0===a?void 0:a.length)||0;return e=1===t?"Standort":"Standorte","Messstationen der Luftqualit\xe4t (".concat(t," ").concat(e," gefunden, davon ").concat((null===r||void 0===r?void 0:r.length)||"0"," in der Karte)")}(),sectionBsStyle:"primary",sectionContent:Object(k.jsx)(W.a,{filterConfiguration:d})},"filter"),Object(k.jsx)(K.a,{previewMapPosition:"lat=51.2607860760692&lng=7.164304562911684&title&zoom=9",previewMapClusteringOptions:void 0},"settings"),Object(k.jsx)(E.a,{sectionKey:"help",sectionTitle:"Kompaktanleitung",sectionBsStyle:"default",sectionContent:Object(k.jsx)(q.a,{configs:Object(P.d)("Luftmessstationskarte Wuppertal",{content:'Die Stadt Wuppertal f\xfchrt seit vielen Jahren Messungen und Kartierungen durch,\num Aufschl\xfcsse \xfcber die Luftbelastungssituation zu erhalten. Diese Erkenntnisse werden \nf\xfcr Ma\xdfnahmen zur Luftreinhaltung und die Stadtentwicklung genutzt. Einer der derzeit \nam meisten diskutierte Luftschadstoff ist Stickstoffdioxid (NO\u2082 ). Dieser wird als \nReizgas mit stechend-stickigem Geruch bereits in geringen Konzentrationen wahrgenommen. \nDie Inhalation ist f\xfcr den Menschen der einzig relevante Aufnahmeweg. \n   \nDie europ\xe4ische Union hat f\xfcr ihre Mitgliedsstaaten mit mehreren Luftqualit\xe4tsrichtlinien\nverbindliche Luftqualit\xe4tsziele zur Vermeidung oder Verringerung sch\xe4dlicher Auswirkungen\nauf die menschliche Gesundheit und die Umwelt festgelegt. Danach wird die Luftqualit\xe4t\nin den Staaten der EU nach einheitlichen Methoden und Kriterien beurteilt. In der\nBundesrepublik Deutschland wurden diese Richtlinien durch Novellierung des\nBundes-Immissions\xadschutzgesetzes (BImSchG) sowie durch die Einf\xfchrung der 39. Verordnung\nzum BImSchG (39. BImSchV) in deutsches Recht umgesetzt. F\xfcr Stickstoffdioxid (NO\u2082) gilt\nseit dem Jahr 2010 ein Jahresmittelwert f\xfcr NO\u2082 von 40 \xb5g pro Kubikmeter Luft. Die\nMessungen von Stickstoffdioxid (NO\u2082) werden in Wuppertal mit sogenannten Passivsammlern\ndurchgef\xfchrt und nahezu monatlich abgelesen.\n  \nDie Luftmessstationskarte zeigt die Positionen dieser Passivsammler im Wuppertaler Stadtgebiet,\nwelche in den vergangenen zehn Jahren Messwerte lieferten. Die farbigen Signaturen in der\nKarte beziehen sich dabei auf den zuletzt verf\xfcgbaren monatlichen NO\u2082-Messwert: unauff\xe4llig\ngr\xfcn (\u2266 35 mg/m\xb3), auff\xe4llig gelb (> 35 \xb5g/m\xb3) und warnend rot (> 40 \xb5g/m\xb3). Die Signaturen\nf\xfcr Passivsammler, welche bei der letzten monatlichen Ablesung keinen Messwert geliefert\nhaben, sind t\xfcrkis eingef\xe4rbt (tempor\xe4rer Ausfall). Wenn eine Messstation in den letzten\nzehn Jahren abgebaut wurde und damit keine weiteren NO\u2082-Messwerte liefert, liegt eine\nblaugraue Signatur vor. \n\nEin Passivsammler ist ein kleines mit Adsorbermaterial gef\xfclltes R\xf6hrchen, welches ohne Pumpe \n(ohne aktive Probenahme) Schadstoffe aus der Luft \xfcber die nat\xfcrliche Ausbreitung und Verteilung \n(Diffusion) aufnehmen und anreichern kann. Zur Verringerung von wind- und turbulenzbedingten \nEinfl\xfcssen befindet sich an der offenen Seite des Probeentnahmer\xf6hrchens eine Glasfritte. \nZum Schutz vor Witterungseinfl\xfcssen werden die Sammler in einem nach unten ge\xf6ffneten Geh\xe4use \neingeh\xe4ngt und exponiert.\n\n<div style="text-align:center"><img src="/img/passivsammler.jpg" /></div>\n\n_Beispiel f\xfcr einen [Passivsammler](https://www.lanuv.nrw.de/fileadmin/lanuv/luft/gifs/no2_gr.jpg); Bildquelle: Landesamt f\xfcr Natur- Umwelt und Verbraucherschutz NRW ([LANUV](https://www.lanuv.nrw.de/impressum))._\n\n\n\nDie Funktionsweise eines Passivsammlers basiert auf der Anreicherung von Stickstoffdioxid (NO\u2082) an einem geeigneten Adsorbens ohne aktive Probennahme. Das Probeentnahmesystem besteht aus einem Kunststoffr\xf6hrchen, an dessen einem Ende sich ein mit Triethanolamin impr\xe4gniertes Edelstahl-Drahtsieb als Adsorbens befindet. Das in der Au\xdfenluft enthaltene NO\u2082 wird durch Diffusion zu diesem Adsorbens transportiert und dort adsorbiert. Die R\xf6hrchen bzw. die Stickstoffdioxidmenge werden anschlie\xdfend im Labor als Nitrit, z.B. mittels Fotometrie, analysiert. Aus der Analytmenge, dem Expositionszeitraum und der Sammelrate wird die mittlere Konzentration im Expositionszeitraum berechnet. Typische Expositionszeitr\xe4ume liegen im Bereich von zwei bis sechs Wochen.\n\nF\xfcr die in Wuppertal durchgef\xfchrten Messungen wurden Expositions- bzw. Messzeitr\xe4ume von etwa vier Wochen realisiert, um eine Auswertung auf Monatsmittelwertbasis zu erm\xf6glichen. Der vorliegende Messwert beschreibt die mittlere Konzentration im Expositionsraum. Nach etwa vier Wochen erfolgt an den Wuppertaler Messstationen der Probeentnahmewechsel durch ein beauftragtes Unternehmen. Nach dem Wechsel werden die Proben im Labor analysiert. Die Messergebnisse liegen ca. 2-3 Wochen nach dem Wechsel vor; m\xf6gliche Verz\xf6gerungen bei der Datenlieferung treten selten auf. Nach Vorliegen der Daten werden diese seitens der Stadt Wuppertal auf Plausibilit\xe4t gepr\xfcft. Die Daten werden sp\xe4testens eine Woche nach Erhalt in das Fachsystem \xfcbernommen. Es ergibt sich daraus eine maximale Verz\xf6gerung hinsichtlich des Zeitpunkts der Ver\xf6ffentlichung der NO\u2082-Messwerte von ca. vier Wochen.\n\nDie Daten zu den Luftmessstationen (Passivsammler f\xfcr NO\u2082) seit dem Jahr 2006 sind im Open-Data-Angebot der Stadt Wuppertal verf\xfcgbar. Diese werden in vier separaten Datenquellen publiziert:\n- [Stammdaten der Luftmessstationen](https://offenedaten-wuppertal.de/dataset/luftmessstationen-wuppertal-passivsammler)\n- [Messdaten (Monatsmittelwerte) seit dem Jahr 2008](https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-ab-2008)\n- [Jahresmittelwerte seit dem Jahr 2008](https://offenedaten-wuppertal.de/dataset/no2-jahresmittelwerte-wuppertal-passivsammler-ab-2008)\n- [Messdaten der Jahre 2006 und 2007](https://offenedaten-wuppertal.de/dataset/no2-messdaten-wuppertal-passivsammler-2006-und-2007).'})})},"help")]})},R=function(){var e=Object(i.useContext)(j.a).selectedFeature;return console.log("selectedFeature.properties",null===e||void 0===e?void 0:e.properties),Object(k.jsx)("div",{})},U=n(100),G=n(47),Z=function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.b)("MapData",w+"/data/umweltzonen.json");case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(i.useContext)(l.a).location;return Object(i.useEffect)((function(){Z(a)}),[]),Object(k.jsx)(U.a,{featureCollection:n,style:function(e){return{color:"#155317",weight:3,opacity:.5,fillColor:"#155317",fillOpacity:.15}},labeler:function(e){if(((null===r||void 0===r?void 0:r.zoom)||8)>7)return Object(k.jsx)("h3",{style:{color:"#155317",opacity:.7,textShadow:"1px 1px 0px  #000000,-1px 1px 0px  #000000, 1px -1px 0px  #000000, -1px -1px 0px  #000000, 2px 2px 15px #000000"},children:"Umweltzone"})},featureClickHandler:function(){}},"ds")},Y=function(e){var t=e.filterState;return function(e){var n;return null===t||void 0===t||null===(n=t.stations)||void 0===n?void 0:n.includes(L(e))}},Q=n(217),X=function(){var e=Object(b.a)(g.a.mark((function e(t){var n,i,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="GazData",i={},e.next=4,Object(G.c)(n,w+"/data/adressen.json");case 4:return i.adressen=e.sent,e.next=7,Object(G.c)(n,w+"/data/bezirke.json");case 7:return i.bezirke=e.sent,e.next=10,Object(G.c)(n,w+"/data/quartiere.json");case 10:return i.quartiere=e.sent,e.next=13,Object(G.c)(n,w+"/data/pois.json");case 13:return i.pois=e.sent,e.next=16,Object(G.c)(n,w+"/data/kitas.json");case 16:return i.kitas=e.sent,e.next=19,Object(G.c)(n,w+"/data/no2.json");case 19:i.no2=e.sent,a=Object(Q.b)(i,["no2","pois","kitas","bezirke","quartiere","adressen"]),t(a);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=n(120),ee=function(e){var t,n,i=e.featureCollectionContext;console.log("featureCollectionContext?.filterState?",null===i||void 0===i?void 0:i.filterState);var a="?";if((null===i||void 0===i||null===(t=i.filteredItems)||void 0===t?void 0:t.length)===(null===i||void 0===i||null===(n=i.items)||void 0===n?void 0:n.length))a=void 0;else{var r,s=Object($.a)(null===i||void 0===i||null===(r=i.filterState)||void 0===r?void 0:r.stations);if(s.sort(),s.sort((function(e,t){return e<t||"inaktiv"===e?-1:e>t||"inaktiv"===t?1:0})),console.log("yyy stationsArten",s),s.includes("unauffaellig")&&s.includes("auffaellig")&&s.includes("warnend")&&s.includes("inaktiv"))a="nur aktive Messstationen";else if(1!==s.length||s.includes("inaktiv"))if(1===s.length)a="nur ".concat(O[s[0]].filterTitle);else{var o,l=[],u=Object(m.a)(s);try{for(u.s();!(o=u.n()).done;){var d=o.value;l.push(O[d].filterTitle)}}catch(c){u.e(c)}finally{u.f()}a="nur ".concat(l.slice(0,l.length-1).join(", ")," und ").concat(l[l.length-1]," Messstationen")}else a="nur ".concat(O[s[0]].filterTitle," Messstationen")}return a?Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Meine Messstationen der Luftqualit\xe4t:"})," ",a]}):void 0},te=n(280),ne=n(398),ie=n(169),ae=n.n(ie),re=n(124),se=n(46),oe=n.n(se),le=n(10),ue=n(24);re.c.addAdapter(ae.a);var de=function(){var e=Object(i.useContext)(j.a),t=e.selectedFeature,n=(e.items,Object(i.useContext)(ue.a).windowSize),a=null===t||void 0===t?void 0:t.properties;if(void 0!==a){var r=null===a||void 0===a?void 0:a.foto,s=void 0;void 0!==r&&(s=250);for(var o,l=0,u=0,d=JSON.parse(JSON.stringify(null===a||void 0===a?void 0:a.mittelwerte)),c=[],f=[],v=[],h=[],g=0,b=Object.keys(a.werte);g<b.length;g++)for(var p=b[g],w=a.werte[p],S=0;S<Math.min(w.length,12);++S)-9999===w[S]?u++:l++;if((null===a||void 0===a?void 0:a.werte)&&Object.keys(null===a||void 0===a?void 0:a.werte).length>0){var y=M(a),z=y.values,L=y.year,N=D(a),A=[];if(N){var F,I=0,P=Object(m.a)(N);try{for(P.s();!(F=P.n()).done;){var B=F.value;A.push({year:L-1,index:I,value:B}),I++}}catch(he){P.e(he)}finally{P.f()}}if(z){var J,T=0,_=Object(m.a)(z);try{for(_.s();!(J=_.n()).done;){var E=J.value;A.push({year:L,index:T,value:E}),T++}}catch(he){_.e(he)}finally{_.f()}}o=A.slice(Math.max(A.length-12,0));for(var W=Object.keys(a.werte),K=(new Date).getFullYear(),q=0,V=W;q<V.length;q++){var R=V[q];R<K-11&&delete d[R]}var U,G=Object(m.a)(o);try{for(G.s();!(U=G.n()).done;){var Z=U.value,H=Z.year+" "+x[Z.index].shortname;-9999!==Z.value?(c.push([H,Z.value]),f.push(new oe.a(O[C(Z.value)].color).fade(.5))):(c.push([H,null]),f.push(null))}}catch(he){G.e(he)}finally{G.f()}for(var Y=0,Q=Object.keys(d);Y<Q.length;Y++){var X=Q[Y];v.push([X,d[X]]),h.push(new oe.a(O[C(d[X])].color).fade(.5))}for(var $=0,ee=Object.keys(d);$<ee.length;$++){var ie=ee[$];v.push([ie,d[ie]])}}var se=[],de=Object(k.jsxs)("div",{style:{fontSize:"90%",textAlign:"center"},children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[Object(k.jsx)(le.a,{style:{color:O.unauffaellig.color},name:"square"})," unauff\xe4llig"," ","(\u2266 35)"]}),Object(k.jsxs)("span",{style:{whiteSpace:"nowrap",marginLeft:10,marginRight:10},children:[Object(k.jsx)(le.a,{style:{color:O.auffaellig.color},name:"square"})," auff\xe4llig ","(> 35)"]}),(null===n||void 0===n?void 0:n.width)<463&&Object(k.jsx)("br",{}),Object(k.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[Object(k.jsx)(le.a,{style:{color:O.warnend.color},name:"square"})," warnend ","(> 40)"]})]}),Object(k.jsx)("div",{style:{fontSize:"80%"},children:" Messwerte in \xb5g/m\xb3"})]});void 0===(null===a||void 0===a?void 0:a.bis)&&se.push(Object(k.jsx)(te.a,{bsStyle:"info",header:"NO\u2082-Messwerte der letzten 12 Monate",children:Object(k.jsxs)("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:[de,Object(k.jsx)(re.a,{data:[{data:c,library:{backgroundColor:f,borderColor:f,hoverBackgroundColor:f,hoverBorderColor:f,legend:{display:!1,labels:{fontColor:"rgb(255, 99, 132)"}}}}]})]})},"last12")),ae.a.defaults.global.legend.display=!1,Object.keys(v).length>0&&se.push(Object(k.jsx)(te.a,{bsStyle:"warning",header:"NO\u2082-Jahresmittelwerte der letzten zehn Kalenderjahre",children:Object(k.jsxs)("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:[de,Object(k.jsx)(re.a,{data:[{data:v,library:{backgroundColor:h,borderColor:h,hoverBackgroundColor:h,hoverBorderColor:h}}]})]})},"average10"));var ce,fe=Object(k.jsx)("a",{href:"https://offenedaten-wuppertal.de/dataset/luftmessstationen-wuppertal-passivsammler",target:"_opendata",children:"diesem Link"}),ve=new Date("2008-01-01");return ce=new Date(null===a||void 0===a?void 0:a.bis)<ve?Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Stationsaktivit\xe4t:"}),Object(k.jsxs)("p",{children:["Von ",new Date(null===a||void 0===a?void 0:a.von).toLocaleDateString()," bis"," ",new Date(null===a||void 0===a?void 0:a.bis).toLocaleDateString()," generierte diese Station NO\u2082-Messwerte.",Object(k.jsxs)("div",{children:["Die Daten dieser Station sind nur im Open-Data-Portal unter ",fe," verf\xfcgbar."]})]})]}):new Date(null===a||void 0===a?void 0:a.von)<ve&&new Date(null===a||void 0===a?void 0:a.bis)>=ve?Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Stationsaktivit\xe4t:"}),Object(k.jsxs)("p",{children:["Von ",new Date(null===a||void 0===a?void 0:a.von).toLocaleDateString()," bis"," ",new Date(null===a||void 0===a?void 0:a.bis).toLocaleDateString()," generierte diese Station insgesamt"," ",l," NO\u2082-Messwerte (Ausf\xe4lle und Messwerte vor 1.1.2008 nicht ber\xfccksichtigt).",Object(k.jsxs)("div",{children:["Die Daten dieser Station sind im Open-Data-Portal unter ",fe," verf\xfcgbar."]})]})]}):new Date(null===a||void 0===a?void 0:a.von)>=ve&&void 0!==(null===a||void 0===a?void 0:a.bis)?Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Stationsaktivit\xe4t:"}),Object(k.jsxs)("p",{children:["Von ",new Date(null===a||void 0===a?void 0:a.von).toLocaleDateString()," bis"," ",new Date(null===a||void 0===a?void 0:a.bis).toLocaleDateString()," generierte diese Station insgesamt"," ",l," NO\u2082-Messwerte (Ausf\xe4lle nicht ber\xfccksichtigt).",Object(k.jsxs)("div",{children:["Die Daten dieser Station sind im Open-Data-Portal unter ",fe," verf\xfcgbar."]})]}),Object(k.jsx)("b",{children:"Messausf\xe4lle:"}),u>0&&Object(k.jsxs)("p",{children:["Diese Messstation generierte an ",u," ",1===u?"Monat":"Monaten"," einen Messausfall. Damit besitzt sie eine Zuverl\xe4ssigkeit von"," ",Math.round(l/(l+u)*1e3)/10,"%."]}),0===u&&Object(k.jsx)("p",{children:"Diese Messstation lieferte in jedem Monat der Stationsaktivit\xe4t einen NO\u2082-Messwert. Damit liegt bisher kein Messausfall vor."})]}):new Date(null===a||void 0===a?void 0:a.von)<ve&&void 0===(null===a||void 0===a?void 0:a.bis)?Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Stationsaktivit\xe4t:"}),void 0!==(null===a||void 0===a?void 0:a.bis)&&Object(k.jsxs)("p",{children:["Von ",new Date(null===a||void 0===a?void 0:a.von).toLocaleDateString()," bis"," ",new Date(null===a||void 0===a?void 0:a.bis).toLocaleDateString()," generierte diese Station insgesamt"," ",l," NO\u2082-Messwerte (Ausf\xe4lle nicht ber\xfccksichtigt)."]}),void 0===(null===a||void 0===a?void 0:a.bis)&&Object(k.jsxs)("p",{children:["Seit ",new Date(null===a||void 0===a?void 0:a.von).toLocaleDateString()," generierte diese Station"," ",l," NO\u2082-Messwerte (Ausf\xe4lle und Messwerte vor 1.1.2008 nicht ber\xfccksichtigt).",Object(k.jsxs)("div",{children:["Die Daten dieser Station sind im Open-Data-Portal unter ",fe," verf\xfcgbar."]})]})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Stationsaktivit\xe4t:"}),void 0!==(null===a||void 0===a?void 0:a.bis)&&Object(k.jsxs)("p",{children:["Von ",new Date(null===a||void 0===a?void 0:a.von).toLocaleDateString()," bis"," ",new Date(null===a||void 0===a?void 0:a.bis).toLocaleDateString()," generierte diese Station insgesamt"," ",l," NO\u2082-Messwerte (Ausf\xe4lle nicht ber\xfccksichtigt)."]}),void 0===(null===a||void 0===a?void 0:a.bis)&&Object(k.jsxs)("p",{children:["Seit ",new Date(null===a||void 0===a?void 0:a.von).toLocaleDateString()," generierte diese Station"," ",l," NO\u2082-Messwerte (Ausf\xe4lle nicht ber\xfccksichtigt)."]}),Object(k.jsx)("b",{children:"Messausf\xe4lle:"}),u>0&&Object(k.jsxs)("p",{children:["Diese Messstation generierte an ",u," ",1===u?"Monat":"Monaten"," einen Messausfall. Damit besitzt sie eine Zuverl\xe4ssigkeit von"," ",Math.round(l/(l+u)*1e3)/10,"%."]}),0===u&&Object(k.jsx)("p",{children:"Diese Messstation lieferte in jedem Monat der Stationsaktivit\xe4t einen NO\u2082-Messwert. Damit liegt bisher kein Messausfall vor."})]}),Object(k.jsx)(ne.a,{titleIconName:"info-circle",title:"Datenblatt: Messstation f\xfcr Stickstoffdioxid (NO\u2082)",mainSection:Object(k.jsxs)("div",{style:{width:"100%",minHeight:s},children:[void 0!==r&&Object(k.jsx)("div",{style:{textAlign:"center",float:(null===n||void 0===n?void 0:n.width)<500?void 0:"right"},children:Object(k.jsx)("img",{alt:"Bild",style:{paddingLeft:10,paddingRight:10,horizontalAlignment:"center",paddingBottom:"5px"},src:r,width:"250"})}),Object(k.jsx)("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Adresse:"}),Object(k.jsxs)("p",{children:[null===a||void 0===a?void 0:a.strasse," ",null===a||void 0===a?void 0:a.hausnummer," ",(null===a||void 0===a?void 0:a.zusatzinfo)&&Object(k.jsxs)("span",{children:["(",null===a||void 0===a?void 0:a.zusatzinfo,")"]})]}),ce]})})]}),subSections:se})}return null};var ce=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){X(a),document.title="Luftmessstationskarte Wuppertal"}),[]),Object(k.jsx)(l.c,{appKey:"LuftmessstationenWuppertal.TopicMap",featureItemsURL:"https://wupp-topicmaps-data.cismet.de/data/no2.data.json",referenceSystemDefinition:U.b.proj4crs25832def,getFeatureStyler:f.a,featureTooltipFunction:function(e){return null===e||void 0===e?void 0:e.text},convertItemToFeature:I,clusteringOptions:{iconCreateFunction:Object(P.c)(30,(function(e){return e.color}))},additionalLayerConfiguration:{uwz:{title:"Umweltzone",initialActive:!0,layer:Object(k.jsx)(H,{})}},filterState:{stations:["unauffaellig","auffaellig","warnend","inaktiv","abgebaut"]},titleFactory:ee,itemFilterFunction:Y,classKeyFunction:function(e){return O[L(e)].title},getColorFromProperties:function(e){return O[L(e)].color},children:Object(k.jsxs)(u.a,{locatorControl:!0,gazData:n,modalMenu:Object(k.jsx)(V,{}),gazetteerSearchPlaceholder:"Stadtteil | Adresse | POI",infoBox:Object(k.jsx)(c.a,{pixelwidth:350,config:{displaySecondaryInfoAction:!0,city:"Wuppertal",navigator:{noun:{singular:"Messstation",plural:"Messstationen"}},noCurrentFeatureTitle:"Keine Messtationen gefunden",noCurrentFeatureContent:""}}),secondaryInfo:Object(k.jsx)(de,{}),children:[Object(k.jsx)(v.a,{title:"R\xfcckfrage zu den Messwerten",action:function(){var e=document.createElement("a");e.setAttribute("type","hidden");var t="\n",n="mailto:luftreinhaltung@stadt.wuppertal.de?subject=R\xfcckfrage zu Messwerten&body="+encodeURI("Sehr geehrte Damen und Herren,".concat(t).concat(t," zu der Luftmessstationskarte "))+encodeURI("auf".concat(t).concat(t))+"".concat(window.location.href.replace(/&/g,"%26").replace(/#/g,"%23"))+encodeURI("".concat(t)+"".concat(t)+"habe ich folgende Frage:".concat(t)+"".concat(t).concat(t).concat(t).concat(t)+"Mit freundlichen Gr\xfc\xdfen".concat(t)+"".concat(t)+"".concat(t));document.body.appendChild(e),e.href=n,e.click()}}),Object(k.jsx)(d.a,{}),Object(k.jsx)(R,{})]})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,736)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(ce,{})}),document.getElementById("root")),fe()}},[[730,1,2]]]);
//# sourceMappingURL=main.4c0c5486.chunk.js.map