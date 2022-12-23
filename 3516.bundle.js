"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[3516],{3516:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var o=t(7294);const r=JSON.parse('{"HO":{"Uxo":{"i8":"5.2.1"},"ol":{"i8":"7.2.2"},"yZi":{"i8":"2.8.0"},"YmS":{"i8":"18.2.0"}}}'),l=r.HO.YmS.i8,s=r.HO.ol.i8,a=r.HO.Uxo.i8,i=r.HO.yZi.i8,p=e=>e.replace(/\//g,".").replace(/rlayers\.style/g,"rlayers.RStyle").replace(/rlayers\.control/g,"rlayers.RControl").replace(/rlayers\.interaction/g,"rlayers.RInteraction").replace(/react/g,"React"),m=o.memo((function(e){const[n,t]=o.useState("loading()");o.useEffect((()=>{e.text.then((e=>{let n;const o=[];let r=/import .*\{([A-Za-z,\s\n]+)\}.* from '(.*)'/g;for(;null!==(n=r.exec(e));){const e=n[1].replace(/\s/g,"").replace(/\n/g,"").split(","),t=p(n[2]);for(const n of e)o.push({from:n,to:`${t}.${n}`})}for(r=/import ([A-Za-z]+) from '(ol.*)'/g;null!==(n=r.exec(e));){const e=p(n[2]);o.push({from:n[1],to:e})}for(r=/import ([A-Za-z]+) from '(.*\.svg)'/g;null!==(n=r.exec(e));){const e=`'https://cdn.jsdelivr.net/npm/rlayers/examples/${n[2]}'`;o.push({from:n[1],to:e})}e=(e=(e=e.replace(/import [^;]+;\n/g,"")).replace(/^\n+/,"")).replace(/export default function (.*)/,"function Comp() {"),e+="\nReactDOM.createRoot(document.getElementById('root')).render(<Comp />);\n",o.length>0&&(e="\n"+e);for(const n of o.reverse())e=`const ${n.from} = ${n.to};\n`+e;t(e)}))}),[e.text]);const r=o.useRef();return n&&n.match(/in CodePen/)?null:o.createElement("form",{className:"position-absolute my-2 mx-4",style:{top:"0px",right:"0px"},ref:r,action:"https://codepen.io/pen/define",method:"POST",target:"_blank"},o.createElement("input",{type:"hidden",name:"data",value:JSON.stringify({title:"rlayers "+e.title,description:"This is an editable example from rlayers - https://mmomtchev.githb.io/rlayers",tags:["openlayers","react","maps","rlayers"],html:'<div id="fullscreen" class="fullscreen">\n  <div id="root" style="margin: 4px;">\n  </div>\n</div>',js:n,js_pre_processor:"typescript",css:".example-map p,\n.jumbotron p {\n    margin: 0;\n    padding: 0;\n}\n\n.example-map {\n    width: 100%;\n    height: 60vh;\n    margin-bottom: 1em;\n}\n\n.no-interaction {\n    user-select: none;\n    pointer-events: none;\n}\n\n.example-overlay {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    user-select: none;\n    pointer-events: none;\n    position: absolute;\n    width: max-content;\n    background-color: white;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n    padding: 15px;\n    border-radius: 10px;\n    border: 1px solid #cccccc;\n}\n\n.example-control {\n    top: 2.5em;\n    right: 0.5em;\n}\n\n.example-list {\n    width: 150px;\n    max-width: 150px;\n    min-width: 150px;\n    font-size: 0.7em;\n    list-style: lower-latin;\n    padding: 0;\n    overflow: hidden;\n}\n\n.example-list ul {\n    padding: 0;\n    overflow: hidden;\n}\n\n.example-list li {\n    font-style: italic;\n    overflow: hidden;\n}\n\n.example-overview .ol-overviewmap-map {\n    border: none !important;\n    width: 300px !important;\n}\n\n.example-overview .ol-overviewmap-box {\n    border: 2px solid blue;\n}\n\n.example-overview,\n.example-overview.ol-uncollapsible {\n    bottom: auto !important;\n    left: auto !important;\n    right: 0 !important;\n    top: 0 !important;\n}\n\n.example-overview:not(.ol-collapsed) button {\n    bottom: auto !important;\n    left: auto !important;\n    right: 1px !important;\n    top: 1px !important;\n}\n\n.example-fullscreen {\n    top: 5em;\n    right: 0.5em;\n}\n\n.fullscreen:-webkit-full-screen {\n    height: 100%;\n    margin: 0;\n}\n\n.fullscreen:-ms-fullscreen {\n    height: 100%;\n}\n\n.fullscreen:fullscreen {\n    height: 100%;\n}\n\n.fullscreen {\n    margin-bottom: 10px;\n    width: 100%;\n    height: 400px;\n}\n\n.example-spinner {\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    width: 20%;\n    height: 20%;\n    z-index: 1000;\n}\n\n.example-spinner>img {\n    width: 100%;\n}\n",js_external:`https://cdn.jsdelivr.net/npm/bootstrap@${a}/dist/js/bootstrap.min.js;https://cdnjs.cloudflare.com/ajax/libs/react/${l}/umd/react.development.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/${l}/umd/react-dom.development.min.js;https://cdnjs.cloudflare.com/ajax/libs/proj4js/${i}/proj4.js;https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v${s}/build/ol.js;https://cdn.jsdelivr.net/npm/rlayers@1.4.7`,css_external:`https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v${s}/css/ol.css;https://cdn.jsdelivr.net/npm/bootstrap@${a}/dist/css/bootstrap.min.css`})}),o.createElement("button",{className:"btn border mb-2 bg-light",onClick:()=>{r.current.submit()}},o.createElement("span",{className:"me-2 align-middle"},"Edit on"),o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 138 26",height:"24px",fill:"none",stroke:"#000",strokeWidth:"2.3",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"}))))}))}}]);