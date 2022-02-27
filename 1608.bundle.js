"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[1608],{1788:(n,o,e)=>{e.d(o,{Z:()=>r});var t=e(3645),l=e.n(t)()((function(n){return n[1]}));l.push([n.id,'.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1.5px solid rgb(179,197,219);\n  background-color: rgba(255,255,255,0.4);\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-index: 10;\n}\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.ol-viewport canvas {\n  all: unset;\n}\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  font-size: inherit;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n}\n.ol-attribution a {\n  color: rgba(0,60,136,0.7);\n  text-decoration: none;\n}\n.ol-attribution ul {\n  margin: 0;\n  padding: 1px .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n  font-size: 12px;\n}\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.ol-attribution button {\n  flex-shrink: 0;\n}\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: block;\n}\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 2px;\n  left: 2px;\n  position: absolute;\n}\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const r=l},2031:(n,o,e)=>{var t=e(3379),l=e.n(t),r=e(1788);l()(r.Z,{insert:"head",singleton:!1}),r.Z.locals},1608:(n,o,e)=>{e.r(o),e.d(o,{default:()=>p});var t=e(7294),l=e(6414),r=e(8465),i=(e(2031),e(739));const a=new r.Z({featureProjection:"EPSG:3857"}),s=fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=population-francaise-par-departement-2018&q=&rows=200").then((n=>n.json())),c=(n,o)=>{var e,t;return null!==(t=null===(e=n.records.find((n=>n.fields.code_departement===o)))||void 0===e?void 0:e.fields.population)&&void 0!==t?t:0};function p(){const[n,o]=t.useState({records:[]}),[e,r]=t.useState(null);return t.useEffect((()=>{s.then((n=>o(n)))}),[]),t.createElement("div",{className:"d-flex flex-row"},t.createElement(i.rO,{className:"example-map",initial:(0,t.useMemo)((()=>({center:(0,l.mi)([2,46.5]),zoom:5.75})),[]),noDefaultControls:!0,noDefaultInteractions:!0},t.createElement(i.eK,{layer:"toner"}),t.createElement(i.jh,{zIndex:5,format:a,url:"https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson",onPointerEnter:(0,t.useCallback)((n=>r(n.target)),[]),onPointerLeave:(0,t.useCallback)((n=>e===n.target&&r(null)),[e])},t.createElement(i.P_.P_,{render:(0,t.useCallback)((o=>t.createElement(i.P_.X3,{color:`rgba(0, 0, ${c(n,o.get("code"))/5e3}, 0.75)`})),[n])})),t.createElement(i.jh,{zIndex:10},e?t.createElement("div",null,t.createElement(i.j$,{geometry:e.getGeometry()},t.createElement(i.Cs,{className:"example-overlay",autoPosition:!0},"Population in ",t.createElement("strong",null,e.get("nom"))," in 2018 is"," ",t.createElement("strong",null,c(n,e.get("code")))))):null)))}i.j$.hitTolerance=0}}]);