(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[2500],{11850:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"244f1a18f6accab3ebe60f77dd2f0c79.geojson"},22500:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(67294),n=a(18672),l=a(76667),c=a(21915),s=(a(12031),a(93025)),o=a(18004),u=a(11850);const m=new l.Z({featureProjection:"EPSG:3857"}),i=e=>"rgba("+[255,153,0,Math.min(.8,.4+Math.log(e/10)/20)].join()+")",g=e=>Math.round(5*(parseFloat(e.get("mag"))-2.5)),d=(e,t)=>{const a=(0,c.lJ)();for(const t of e)(0,c.l7)(a,t.getGeometry().getExtent());return Math.round(.25*((0,c.dz)(a)+(0,c.Cr)(a)))/t};function f(){const[e,t]=r.useState(20),a=r.useRef();return r.createElement(r.Fragment,null,r.createElement(s.rO,{className:"example-map",center:(0,n.mi)([0,0]),zoom:1},r.createElement(s.eK,{layer:"toner"}),r.createElement(s.Eu,{ref:a,distance:e,format:m,url:u.Z},r.createElement(o.P_,{cacheSize:1024,cacheId:(0,r.useCallback)(((e,t)=>e.get("features").length>1?"#"+d(e.get("features"),t):"$"+g(e.get("features")[0])),[]),render:(0,r.useCallback)(((e,t)=>{const a=e.get("features").length;if(a>1){const n=d(e.get("features"),t);return r.createElement(r.Fragment,null,r.createElement(o.Au,{radius:n},r.createElement(o.X3,{color:i(a)})),r.createElement(o.UM,{text:a.toString()},r.createElement(o.X3,{color:"#fff"}),r.createElement(o.c5,{color:"rgba(0, 0, 0, 0.6)",width:3})))}const n=e.get("features")[0];return r.createElement(o.PE,{radius1:g(n),radius2:3,points:5,angle:Math.PI},r.createElement(o.X3,{color:"rgba(255, 153, 0, 0.8)"}),r.createElement(o.c5,{color:"rgba(255, 204, 0, 0.2)",width:1}))}),[])}))),r.createElement("div",{className:"my-3 w-100"},r.createElement("label",{htmlFor:"distance"},"Clustering distance"),r.createElement("div",{className:"w-100"},r.createElement("input",{type:"range",className:"range-slider range-slider--primary w-100",min:"5",max:"50",id:"distance",value:e,onChange:(0,r.useCallback)((e=>t(parseInt(e.currentTarget.value))),[])}))))}}}]);