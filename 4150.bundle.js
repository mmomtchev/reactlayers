(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[4150],{3974:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(7294),o=t(6078),u=t(8882),i=t(1005),l=t(9948),n=(t(2031),t(4472)),c=t(3148);n.Z.defs("EPSG:32636","+proj=utm +zone=36 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"),(0,c.z2)(n.Z);class h extends u.Z{constructor(e,s){super(e,s),this.createSource(),this.ol=new i.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){this.source=new l.Z({sources:this.props.urls.map((e=>({url:e})))}),this.eventSources=[this.ol,this.source]}componentDidMount(){super.componentDidMount(),this.context.map.setView(this.source.getView())}refresh(e){var s;super.refresh(e),(null===(s=null==e?void 0:e.urls)||void 0===s?void 0:s.length)===this.props.urls.length&&this.props.urls.every(((s,t)=>{var r;return s===(null===(r=null==e?void 0:e.urls)||void 0===r?void 0:r[t])}))||(this.createSource(),this.ol.setSource(this.source),this.attachOldEventHandlers(this.source))}}function a(){return r.createElement(o.rO,{width:"100%",height:"60vh",initial:{center:[0,0],zoom:1}},r.createElement(h,{properties:{label:"GeoTIFF"},urls:["https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"]}))}},3752:()=>{},3640:()=>{},2630:()=>{}}]);