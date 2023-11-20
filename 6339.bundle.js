"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[6339],{1788:(n,o,e)=>{e.d(o,{Z:()=>i});var t=e(8081),r=e.n(t),a=e(3645),l=e.n(a)()(r());l.push([n.id,':root,\n:host {\n  --ol-background-color: white;\n  --ol-accent-background-color: #F5F5F5;\n  --ol-subtle-background-color: rgba(128, 128, 128, 0.25);\n  --ol-partial-background-color: rgba(255, 255, 255, 0.75);\n  --ol-foreground-color: #333333;\n  --ol-subtle-foreground-color: #666666;\n  --ol-brand-color: #00AAFF;\n}\n\n.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1.5px solid var(--ol-background-color);\n  background-color: var(--ol-partial-background-color);\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: var(--ol-partial-background-color);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner {\n  border: 1px solid var(--ol-subtle-foreground-color);\n  border-top: none;\n  color: var(--ol-foreground-color);\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n\n.ol-scale-bar-inner {\n  display: flex;\n}\n\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: var(--ol-foreground-color);\n  float: right;\n  z-index: 10;\n}\n\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 10px;\n  z-index: 11;\n  color: var(--ol-foreground-color);\n  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);\n}\n\n.ol-scale-text {\n  position: absolute;\n  font-size: 12px;\n  text-align: center;\n  bottom: 25px;\n  color: var(--ol-foreground-color);\n  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);\n}\n\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  box-sizing: border-box;\n  border: 1px solid var(--ol-foreground-color);\n}\n\n.ol-scale-singlebar-even {\n  background-color: var(--ol-subtle-foreground-color);\n}\n\n.ol-scale-singlebar-odd {\n  background-color: var(--ol-background-color);\n}\n\n.ol-unsupported {\n  display: none;\n}\n\n.ol-viewport,\n.ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.ol-viewport canvas {\n  all: unset;\n  overflow: hidden;\n}\n\n.ol-viewport {\n  touch-action: pan-x pan-y;\n}\n\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n\n.ol-control {\n  position: absolute;\n  background-color: var(--ol-subtle-background-color);\n  border-radius: 4px;\n}\n\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: var(--ol-subtle-foreground-color);\n  font-weight: bold;\n  text-decoration: none;\n  font-size: inherit;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: var(--ol-background-color);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  will-change: transform;\n}\n\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  outline: 1px solid var(--ol-subtle-foreground-color);\n  color: var(--ol-foreground-color);\n}\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n}\n\n.ol-attribution a {\n  color: var(--ol-subtle-foreground-color);\n  text-decoration: none;\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 1px .5em;\n  color: var(--ol-foreground-color);\n  text-shadow: 0 0 2px var(--ol-background-color);\n  font-size: 12px;\n}\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution button {\n  flex-shrink: 0;\n}\n\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n\n.ol-attribution:not(.ol-collapsed) {\n  background: var(--ol-partial-background-color);\n}\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: block;\n}\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid var(--ol-subtle-foreground-color);\n  height: 150px;\n  width: 150px;\n}\n\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: var(--ol-subtle-background-color);\n}\n\n.ol-overviewmap-box {\n  border: 1.5px dotted var(--ol-subtle-foreground-color);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const i=l},2031:(n,o,e)=>{var t=e(3379),r=e.n(t),a=e(7795),l=e.n(a),i=e(569),s=e.n(i),p=e(3565),c=e.n(p),u=e(9216),d=e.n(u),m=e(4589),b=e.n(m),g=e(1788),x={};x.styleTagTransform=b(),x.setAttributes=c(),x.insert=s().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=d(),r()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals},7061:(n,o,e)=>{e.d(o,{Z:()=>y});var t=e(9646),r=e(2083),a=e(7403),l=e(6259),i=e(5063),s=e(3614),p=e(188),c=e(3083),u=e(9619),d=e(7571),m=e(6414),b=e(974);class g extends t.ZP{constructor(n){super(),n=n||{},this.dataProjection=new u.Z({code:"",units:"tile-pixels"}),this.featureClass_=n.featureClass?n.featureClass:d.ZP,this.geometryName_=n.geometryName,this.layerName_=n.layerName?n.layerName:"layer",this.layers_=n.layers?n.layers:null,this.idProperty_=n.idProperty,this.supportedMediaTypes=["application/vnd.mapbox-vector-tile","application/x-protobuf"]}readRawGeometry_(n,o,e,t){n.pos=o.geometry;const r=n.readVarint()+n.pos;let a=1,l=0,i=0,s=0,p=0,c=0;for(;n.pos<r;){if(!l){const o=n.readVarint();a=7&o,l=o>>3}if(l--,1===a||2===a)i+=n.readSVarint(),s+=n.readSVarint(),1===a&&p>c&&(t.push(p),c=p),e.push(i,s),p+=2;else{if(7!==a)throw new Error("Invalid command found in the PBF");p>c&&(e.push(e[c],e[c+1]),p+=2)}}p>c&&(t.push(p),c=p)}createFeature_(n,o,e){const s=o.type;if(0===s)return null;let u;const m=o.properties;let g;this.idProperty_?(g=m[this.idProperty_],delete m[this.idProperty_]):g=o.id,m[this.layerName_]=o.layer.name;const x=[],h=[];this.readRawGeometry_(n,o,x,h);const f=function(n,o){let e;return 1===n?e=1===o?"Point":"MultiPoint":2===n?e=1===o?"LineString":"MultiLineString":3===n&&(e="Polygon"),e}(s,h.length);if(this.featureClass_===d.ZP)u=new this.featureClass_(f,x,h,2,m,g),u.transform(e.dataProjection);else{let n;if("Polygon"==f){const o=(0,b.Q3)(x,h);n=o.length>1?new i.Z(x,"XY",o):new c.ZP(x,"XY",h)}else n="Point"===f?new p.Z(x,"XY"):"LineString"===f?new r.Z(x,"XY"):"MultiPoint"===f?new l.Z(x,"XY"):"MultiLineString"===f?new a.Z(x,"XY",h):null;u=new(0,this.featureClass_),this.geometryName_&&u.setGeometryName(this.geometryName_);const o=(0,t.fI)(n,!1,e);u.setGeometry(o),void 0!==g&&u.setId(g),u.setProperties(m,!0)}return u}getType(){return"arraybuffer"}readFeatures(n,o){const e=this.layers_;o=this.adaptOptions(o);const t=(0,m.U2)(o.dataProjection);t.setWorldExtent(o.extent),o.dataProjection=t;const r=new s(n),a=r.readFields(x,{}),l=[];for(const n in a){if(e&&!e.includes(n))continue;const i=a[n],s=i?[0,0,i.extent,i.extent]:null;t.setExtent(s);for(let n=0,e=i.length;n<e;++n){const e=v(r,i,n),t=this.createFeature_(r,e,o);null!==t&&l.push(t)}}return l}readProjection(n){return this.dataProjection}setLayers(n){this.layers_=n}}function x(n,o,e){if(3===n){const n={keys:[],values:[],features:[]},t=e.readVarint()+e.pos;e.readFields(h,n,t),n.length=n.features.length,n.length&&(o[n.name]=n)}}function h(n,o,e){if(15===n)o.version=e.readVarint();else if(1===n)o.name=e.readString();else if(5===n)o.extent=e.readVarint();else if(2===n)o.features.push(e.pos);else if(3===n)o.keys.push(e.readString());else if(4===n){let t=null;const r=e.readVarint()+e.pos;for(;e.pos<r;)t=1==(n=e.readVarint()>>3)?e.readString():2===n?e.readFloat():3===n?e.readDouble():4===n?e.readVarint64():5===n?e.readVarint():6===n?e.readSVarint():7===n?e.readBoolean():null;o.values.push(t)}}function f(n,o,e){if(1==n)o.id=e.readVarint();else if(2==n){const n=e.readVarint()+e.pos;for(;e.pos<n;){const n=o.layer.keys[e.readVarint()],t=o.layer.values[e.readVarint()];o.properties[n]=t}}else 3==n?o.type=e.readVarint():4==n&&(o.geometry=e.pos)}function v(n,o,e){n.pos=o.features[e];const t=n.readVarint()+n.pos,r={layer:o,type:0,properties:{}};return n.readFields(f,r,t),r}const y=g},9273:(n,o,e)=>{e.d(o,{Z:()=>s});var t=e(4680),r=e(8266);const a={stamen_terrain:{extension:"png",opaque:!0},stamen_terrain_background:{extension:"png",opaque:!0},stamen_terrain_labels:{extension:"png",opaque:!1},stamen_terrain_lines:{extension:"png",opaque:!1},stamen_toner_background:{extension:"png",opaque:!0},stamen_toner:{extension:"png",opaque:!0},stamen_toner_labels:{extension:"png",opaque:!1},stamen_toner_lines:{extension:"png",opaque:!1},stamen_toner_lite:{extension:"png",opaque:!0},stamen_watercolor:{extension:"jpg",opaque:!0},alidade_smooth:{extension:"png",opaque:!0},alidade_smooth_dark:{extension:"png",opaque:!0},outdoors:{extension:"png",opaque:!0},osm_bright:{extension:"png",opaque:!0}},l={stamen_terrain:{minZoom:0,maxZoom:18,retina:!0},stamen_toner:{minZoom:0,maxZoom:20,retina:!0},stamen_watercolor:{minZoom:1,maxZoom:18,retina:!1}};class i extends t.Z{constructor(n){const o=n.layer.indexOf("-"),e=-1==o?n.layer:n.layer.slice(0,o),t=l[e]||{minZoom:0,maxZoom:20,retina:!0},i=a[n.layer],s=n.apiKey?"?api_key="+n.apiKey:"",p=t.retina&&n.retina?"@2x":"",c=void 0!==n.url?n.url:"https://tiles.stadiamaps.com/tiles/"+n.layer+"/{z}/{x}/{y}"+p+"."+i.extension+s,u=['&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>','&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',r.h];n.layer.startsWith("stamen_")&&u.splice(1,0,'&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>'),super({attributions:u,cacheSize:n.cacheSize,crossOrigin:"anonymous",interpolate:n.interpolate,maxZoom:void 0!==n.maxZoom?n.maxZoom:t.maxZoom,minZoom:void 0!==n.minZoom?n.minZoom:t.minZoom,opaque:i.opaque,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileLoadFunction:n.tileLoadFunction,transition:n.transition,url:c,tilePixelRatio:p?2:1,wrapX:n.wrapX,zDirection:n.zDirection})}}const s=i}}]);