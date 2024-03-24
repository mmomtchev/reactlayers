"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[6025],{783:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(1601),o=n.n(a),r=n(6314),s=n.n(r)()(o());s.push([e.id,".ol-layers-control {\n    right: 0.5em;\n    top: 2.5em;\n    background-color: rgba(255,255,255,0.6);\n}\n\n.ol-layers-control:hover {\n    background-color: rgba(255,255,255,0.9);\n}\n\n.ol-layers-control label {\n    margin-left: 0.25em;\n}\n\n.ol-layers-control>div {\n    padding: 0.25em;\n}\n\n.ol-layers-control>span>*:first-child {\n    margin-left: auto;\n}",""]);const l=s},7601:(e,t,n)=>{var a=n(5072),o=n.n(a),r=n(7825),s=n.n(r),l=n(7659),i=n.n(l),p=n(5056),m=n.n(p),c=n(540),u=n.n(c),g=n(1113),d=n.n(g),h=n(783),x={};x.styleTagTransform=d(),x.setAttributes=m(),x.insert=i().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=u(),o()(h.A,x),h.A&&h.A.locals&&h.A.locals},6025:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(6540),o=n(3407),r=n(1365),s=n(7240),l=n(2381);n(5045),n(7601);const i=a.createElement("button",null,"☰");function p(){return a.createElement("div",null,a.createElement("p",null,"Use the layers controls in the upper right corner to switch the active layer"),a.createElement(s.f9,{className:"example-map",initial:{center:(0,o.Rb)([2.364,48.82]),zoom:7}},a.createElement(s.E6.bc,{element:i},a.createElement(s.ej,{properties:{label:"OpenStreetMap"}}),a.createElement(s.HS,{properties:{label:"OpenTopo"},url:"https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png",attributions:"Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)"}),a.createElement(s.HS,{properties:{label:"Transport"},url:"http://tile.thunderforest.com/transport/{z}/{x}/{y}.png"}),a.createElement(l.A,{properties:{label:"Stadia Terrain Background"},layer:"stamen_terrain_background"}),a.createElement(s.QN,{properties:{label:"Mapbox TileJSON"},url:"https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1"}),a.createElement(s.Tw,{properties:{label:"Magellium OSM France Schools WMS"},url:"https://magosm.magellium.com/geoserver/ows",params:{LAYERS:"magosm:france_schools_point",FORMAT:"image/jpeg"}}),a.createElement(s.Ff,{properties:{label:"Switzerland ArcGIS TileWMS"},url:"https://wms.geo.admin.ch/",params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg",serverType:"mapserver"}})),a.createElement(s.j9,{zIndex:5,format:new r.A({featureProjection:"EPSG:3857"}),url:"https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson"},a.createElement(s.cq.RStyle,null,a.createElement(s.cq.RStroke,{color:"#007bff",width:3}),a.createElement(s.cq.RFill,{color:"transparent"})))))}},2381:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(945),o=n(5042),r=n(2662);class s extends r.A{constructor(e,t){var n;super(e,t),this.source=new o.A({layer:this.props.layer,apiKey:this.props.apiKey,retina:null!==(n=this.props.retina)&&void 0!==n&&n}),this.ol=new a.A({source:this.source}),this.eventSources=[this.ol,this.source]}}},5042:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(702),o=n(7896);const r={stamen_terrain:{extension:"png",opaque:!0},stamen_terrain_background:{extension:"png",opaque:!0},stamen_terrain_labels:{extension:"png",opaque:!1},stamen_terrain_lines:{extension:"png",opaque:!1},stamen_toner_background:{extension:"png",opaque:!0},stamen_toner:{extension:"png",opaque:!0},stamen_toner_labels:{extension:"png",opaque:!1},stamen_toner_lines:{extension:"png",opaque:!1},stamen_toner_lite:{extension:"png",opaque:!0},stamen_watercolor:{extension:"jpg",opaque:!0},alidade_smooth:{extension:"png",opaque:!0},alidade_smooth_dark:{extension:"png",opaque:!0},alidade_satellite:{extension:"png",opaque:!0},outdoors:{extension:"png",opaque:!0},osm_bright:{extension:"png",opaque:!0}},s={stamen_terrain:{minZoom:0,maxZoom:18,retina:!0},stamen_toner:{minZoom:0,maxZoom:20,retina:!0},stamen_watercolor:{minZoom:1,maxZoom:18,retina:!1}};class l extends a.A{constructor(e){const t=e.layer.indexOf("-"),n=-1==t?e.layer:e.layer.slice(0,t),a=s[n]||{minZoom:0,maxZoom:20,retina:!0},l=r[e.layer],i=e.apiKey?"?api_key="+e.apiKey:"",p=a.retina&&e.retina?"@2x":"",m=void 0!==e.url?e.url:"https://tiles.stadiamaps.com/tiles/"+e.layer+"/{z}/{x}/{y}"+p+"."+l.extension+i,c=['&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>','&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>',o.o];e.layer.startsWith("stamen_")&&c.splice(1,0,'&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>'),super({attributions:c,cacheSize:e.cacheSize,crossOrigin:"anonymous",interpolate:e.interpolate,maxZoom:void 0!==e.maxZoom?e.maxZoom:a.maxZoom,minZoom:void 0!==e.minZoom?e.minZoom:a.minZoom,opaque:l.opaque,reprojectionErrorThreshold:e.reprojectionErrorThreshold,tileLoadFunction:e.tileLoadFunction,transition:e.transition,url:m,tilePixelRatio:p?2:1,wrapX:e.wrapX,zDirection:e.zDirection})}}const i=l}}]);