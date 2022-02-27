"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[2500],{1788:(n,e,o)=>{o.d(e,{Z:()=>r});var t=o(3645),l=o.n(t)()((function(n){return n[1]}));l.push([n.id,'.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1.5px solid rgb(179,197,219);\n  background-color: rgba(255,255,255,0.4);\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-index: 10;\n}\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.ol-viewport canvas {\n  all: unset;\n}\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  font-size: inherit;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n}\n.ol-attribution a {\n  color: rgba(0,60,136,0.7);\n  text-decoration: none;\n}\n.ol-attribution ul {\n  margin: 0;\n  padding: 1px .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n  font-size: 12px;\n}\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.ol-attribution button {\n  flex-shrink: 0;\n}\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: block;\n}\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 2px;\n  left: 2px;\n  position: absolute;\n}\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const r=l},1850:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"32ba7744565a0c818ef0e2e35126abbb.geojson"},2031:(n,e,o)=>{var t=o(3379),l=o.n(t),r=o(1788);l()(r.Z,{insert:"head",singleton:!1}),r.Z.locals},2500:(n,e,o)=>{o.r(e),o.d(e,{default:()=>d});var t=o(7294),l=o(6414),r=o(8465),a=o(8641),i=(o(2031),o(739)),s=o(8004),c=o(1850);const b=new r.Z({featureProjection:"EPSG:3857"}),p=n=>"rgba("+[255,153,0,Math.min(.8,.4+Math.log(n/10)/20)].join()+")",m=n=>Math.round(5*(parseFloat(n.get("mag"))-2.5)),u=(n,e)=>{const o=(0,a.lJ)();for(const e of n)(0,a.l7)(o,e.getGeometry().getExtent());return Math.round(.25*((0,a.dz)(o)+(0,a.Cr)(o)))/e};function d(){const[n,e]=t.useState(20),o=t.useRef();return t.createElement(t.Fragment,null,t.createElement(i.rO,{className:"example-map",initial:{center:(0,l.mi)([0,0]),zoom:1}},t.createElement(i.eK,{layer:"toner"}),t.createElement(i.Eu,{ref:o,distance:n,format:b,url:c.Z},t.createElement(s.P_,{cacheSize:1024,cacheId:(0,t.useCallback)(((n,e)=>n.get("features").length>1?"#"+u(n.get("features"),e):"$"+m(n.get("features")[0])),[]),render:(0,t.useCallback)(((n,e)=>{const o=n.get("features").length;if(o>1){const l=u(n.get("features"),e);return t.createElement(t.Fragment,null,t.createElement(s.Au,{radius:l},t.createElement(s.X3,{color:p(o)})),t.createElement(s.UM,{text:o.toString()},t.createElement(s.X3,{color:"#fff"}),t.createElement(s.c5,{color:"rgba(0, 0, 0, 0.6)",width:3})))}const l=n.get("features")[0];return t.createElement(s.PE,{radius1:m(l),radius2:3,points:5,angle:Math.PI},t.createElement(s.X3,{color:"rgba(255, 153, 0, 0.8)"}),t.createElement(s.c5,{color:"rgba(255, 204, 0, 0.2)",width:1}))}),[])}))),t.createElement("div",{className:"my-3 w-100"},t.createElement("label",{htmlFor:"distance"},"Clustering distance"),t.createElement("div",{className:"w-100"},t.createElement("input",{type:"range",className:"range-slider range-slider--primary w-100",min:"5",max:"50",id:"distance",value:n,onChange:(0,t.useCallback)((n=>e(parseInt(n.currentTarget.value))),[])}))))}}}]);