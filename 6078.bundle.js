"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[6078],{8898:(e,t,s)=>{s.d(t,{b:()=>n});var r=s(7294),o=s(1543),i=s(9026);class n extends r.PureComponent{olEventName(e){return e.substring(2).toLowerCase()}attachEventHandlers(){var e,t;const s=null!==(e=this.eventSources)&&void 0!==e?e:[this.ol],r=Object.keys(this.props).filter((e=>e.startsWith("on"))),o=r.concat(Object.keys(null!==(t=this.handlers)&&void 0!==t?t:{}).filter((e=>!r.includes(e))));for(const e of o){if(void 0===this.handlers&&(this.handlers={}),void 0!==this.handlers[e]&&void 0===this.props[e]){(0,i.Z)("removing previously installed handler",this,e,this.handlers[e]);for(const t of s)t.un(this.olEventName(e),this.handlers[e]);this.handlers[e]=void 0}if(void 0===this.handlers[e]&&void 0!==this.props[e]){(0,i.Z)("installing handler",this,e,this.props[e]),this.handlers[e]=t=>this.props[e].call(this,t);for(const t of s)t.on(this.olEventName(e),this.handlers[e])}}}attachOldEventHandlers(e){if(!this.handlers)return;const t=Object.keys(this.props).filter((e=>e.startsWith("on")));for(const s of t)this.props[s]&&((0,i.Z)("reinstalling existing handler",this,s,this.props[s]),e.on(this.olEventName(s),this.handlers[s]))}refresh(e){this.attachEventHandlers()}componentDidMount(){(0,i.Z)("didMount",this),this.refresh()}propsDiff(e){if(null===this.props||null===e)return this.props!==e&&((0,i.Z)("null props differ",this.props,e),!0);for(const t of Object.keys(this.props))if(this.props[t]!==e[t])return(0,i.Z)("because of",t,this.props[t],e[t]),!0;return!1}componentDidUpdate(e,t,s){this.props!==e&&((0,i.Z)("willRefresh",this,e,this.props),this.refresh(e))}componentWillUnmount(){var e,t;(0,i.Z)("willUnmount",this,this.handlers);const s=null!==(e=this.eventSources)&&void 0!==e?e:[this.ol];for(const e of Object.keys(null!==(t=this.handlers)&&void 0!==t?t:{}))if((0,i.Z)("cleaning up handler",this,e,this.handlers[e]),this.handlers[e]){for(const t of s)t.un(this.olEventName(e),this.handlers[e]);this.handlers[e]=void 0}}render(){return null}}n.contextType=o.p},676:(e,t,s)=>{s.d(t,{ZP:()=>u});var r=s(7294),o=s(8630),i=s(1090),n=s(8641),l=s(1543),a=s(8898),c=s(9509),h=s(9026);class p extends o.Z{}class u extends a.b{constructor(e,t){var s,r;if(super(e,t),!(null===(s=null==this?void 0:this.context)||void 0===s?void 0:s.vectorlayer))throw new Error("An RFeature must be part of a vector layer");e.feature?this.ol=e.feature:this.ol=new i.Z({...null!==(r=e.properties)&&void 0!==r?r:{},geometry:e.geometry,style:c.ZP.getStyle(e.style)}),u.initEventRelay(this.context.map),this.onchange=()=>this.forceUpdate()}static initEventRelay(e){for(const t of u.pointerEvents)e.on(t,u.eventRelay)}static dispatchEvent(e,t){var s;return!e.feature||(e.feature.dispatchEvent?e.feature.dispatchEvent(t):(t.target||(t.target=e.feature),!(null===(s=e.layer)||void 0===s?void 0:s.get("_on"+t.type))||e.layer.get("_on"+t.type)(t)))}static eventRelay(e){const t=[];if(e.map.forEachFeatureAtPixel(e.pixel,((e,s)=>t.push({feature:e,layer:s})&&!1),{hitTolerance:u.hitTolerance}),e.dragging){u.lastFeaturesDragged.length||(u.lastFeaturesDragged=[...t]);for(const e of u.lastFeaturesDragged)t.find((t=>t.feature===e.feature))||t.push(e)}else{for(const t of u.lastFeaturesDragged)u.dispatchEvent(t,new p("pointerdragend",e.map,e.originalEvent));u.lastFeaturesDragged=[]}if("pointermove"===e.type){for(const s of u.lastFeaturesEntered)t.find((e=>e.feature===s.feature))||(u.dispatchEvent(s,new p("pointerleave",e.map,e.originalEvent)),s.feature=null,s.layer=null);u.lastFeaturesEntered=u.lastFeaturesEntered.filter((e=>e.feature));for(const s of t)u.lastFeaturesEntered.find((e=>e.feature===s.feature))||(u.dispatchEvent(s,new p("pointerenter",e.map,e.originalEvent)),u.lastFeaturesEntered.push(s))}for(const s of t)if(!1===u.dispatchEvent(s,new p(e.type,e.map,e.originalEvent)))return!1;return!0}refresh(e){super.refresh(e),void 0!==this.props.feature&&this.props.feature!==this.ol&&((0,h.Z)("replacing bound feature",this.ol),this.componentWillUnmount(),this.ol=this.props.feature,this.componentDidMount()),this.props.properties!==(null==e?void 0:e.properties)&&this.ol.setProperties(this.props.properties),this.props.geometry!==(null==e?void 0:e.geometry)&&this.ol.setGeometry(this.props.geometry),this.props.style!==(null==e?void 0:e.style)&&this.ol.setStyle(c.ZP.getStyle(this.props.style))}componentDidMount(){(0,h.Z)("didMount",this.ol),super.componentDidMount(),this.ol.on("change",this.onchange),this.context.vectorsource.addFeature(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.ol.un("change",this.onchange),this.context.vectorsource.removeFeature(this.ol)}render(){var e,t;const s=null===(t=null===(e=this.ol)||void 0===e?void 0:e.getGeometry())||void 0===t?void 0:t.getExtent(),o=s&&(0,n.qg)(s);return r.createElement("div",{className:"_rlayers_RFeature"},r.createElement(l.p.Provider,{value:{map:this.context.map,layer:this.context.vectorlayer,source:this.context.vectorsource,feature:this.ol,location:o}},this.props.children))}}u.pointerEvents=["click","pointerdrag","pointermove","singleclick","dblclick"],u.lastFeaturesEntered=[],u.lastFeaturesDragged=[],u.hitTolerance=3},1543:(e,t,s)=>{s.d(t,{p:()=>r});const r=s(7294).createContext({})},6078:(e,t,s)=>{s.d(t,{Fo:()=>r,j$:()=>m.ZP,V5:()=>Ke,kB:()=>o,he:()=>p.Z,Eu:()=>H,$A:()=>z,cA:()=>V,aL:()=>D,eK:()=>W,zV:()=>f,ho:()=>M,qJ:()=>N,lg:()=>J,jh:()=>g,E:()=>K,BV:()=>j,KT:()=>O,rO:()=>h,H3:()=>b,vp:()=>Y,Cs:()=>He,Zr:()=>Ge,P_:()=>U});var r={};s.r(r),s.d(r,{D3:()=>re,$S:()=>ce,zi:()=>ve,zd:()=>he,Km:()=>ue,z4:()=>te,KX:()=>ie,jq:()=>le});var o={};s.r(o),s.d(o,{J4:()=>xe,UW:()=>Se,_j:()=>Ee,sh:()=>Pe});var i=s(8898),n=s(1543),l=s(7294),a=s(4058),c=s(9220);class h extends i.b{constructor(e){super(e),this.updateView=e=>{var t;const s=this.ol.getView();"function"==typeof(null===(t=this.props)||void 0===t?void 0:t.view[1])&&this.props.view[1]({center:s.getCenter(),zoom:s.getZoom(),resolution:s.getResolution()})},this.target=l.createRef(),this.ol=new a.Z({controls:e.noDefaultControls?[]:void 0,interactions:e.noDefaultInteractions?[]:void 0,view:new c.ZP({projection:e.projection,center:e.initial.center,zoom:void 0===e.initial.resolution?e.initial.zoom:void 0,resolution:e.initial.resolution,extent:e.extent,minResolution:e.minResolution,maxResolution:e.maxResolution,constrainResolution:e.constrainResolution,minZoom:e.minZoom,maxZoom:e.maxZoom,enableRotation:e.enableRotation,constrainRotation:e.constrainRotation})}),this.props.view&&this.ol.on("moveend",this.updateView)}componentDidMount(){super.componentDidMount(),this.ol.setTarget(this.target.current)}refresh(e){super.refresh(e);const t=this.ol.getView();for(const s of["minZoom","maxZoom","constrainResolution"]){const r=s.charAt(0).toUpperCase()+s.substring(1);e&&this.props[s]===e[s]||t["set"+r](this.props[s])}this.props.view&&(t.setCenter(this.props.view[0].center),void 0===this.props.view[0].resolution?t.setZoom(this.props.view[0].zoom):t.setResolution(this.props.view[0].resolution)),this.props.properties&&this.ol.setProperties(this.props.properties),this.props.view?this.ol.on("moveend",this.updateView):this.ol.un("moveend",this.updateView)}render(){return l.createElement("div",{className:this.props.className,style:{width:this.props.width,height:this.props.height},ref:this.target},l.createElement(n.p.Provider,{value:{map:this.ol}},this.props.children))}}var p=s(8882),u=s(1666),d=s(4680),v=s(8387);class f extends v.Z{constructor(e,t){super(e,t),this.createSource(),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){this.source=new d.Z({url:this.props.url,interpolate:!this.props.noIterpolation,projection:this.props.projection,tileGrid:this.props.tileGrid,crossOrigin:this.props.crossOrigin}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.tileGrid)===this.props.tileGrid&&(null==e?void 0:e.url)===this.props.url||(this.createSource(),this.ol.setSource(this.source),this.attachOldEventHandlers(this.source))}}var m=s(676),y=s(9509);class x extends p.Z{constructor(e,t){super(e,t),this.newFeature=e=>{e.feature&&this.attachFeatureHandlers([e.feature]),e.features&&this.attachFeatureHandlers(e.features)},this.eventRelay=e=>!this.props["on"+x.relayedEvents[e.type]]||!1!==this.props["on"+x.relayedEvents[e.type]].call(this,e),m.ZP.initEventRelay(this.context.map),this.eventSources=this.createSource(e),this.source.on("featuresloadend",this.newFeature),this.source.on("addfeature",this.newFeature),this.attachEventHandlers()}createSource(e){throw new Error("RLayerBaseVector is an abstract class")}attachFeatureHandlers(e,t){for(const s of Object.values(x.relayedEvents))if(this.props["on"+s]!==(t&&t["on"+s]))for(const t of e)t.on(s.toLowerCase(),this.eventRelay)}componentWillUnmount(){super.componentWillUnmount();for(const e of Object.values(x.relayedEvents))this.source.forEachFeature((t=>(t.un(e.toLowerCase(),this.eventRelay),!1)))}refresh(e){super.refresh(e),this.attachFeatureHandlers(this.source.getFeatures(),e),(null==e?void 0:e.style)!==this.props.style&&this.ol.setStyle(y.ZP.getStyle(this.props.style))}render(){return l.createElement("div",{className:"_rlayers_RLayerVector"},l.createElement(n.p.Provider,{value:{...this.context,layer:this.ol,source:this.source,vectorlayer:this.ol,vectorsource:this.source}},this.props.children))}}x.relayedEvents={click:"Click",pointermove:"PointerMove",pointerenter:"PointerEnter",pointerleave:"PointerLeave"};var w=s(6333),P=s(2556);class g extends x{createSource(e){return this.source=new P.Z({features:this.props.features,url:this.props.url,format:this.props.format,loader:this.props.loader,wrapX:this.props.wrapX,strategy:this.props.strategy}),this.ol=new w.Z({...e,style:y.ZP.getStyle(this.props.style),source:this.source}),[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.url)!==this.props.url&&(this.source.setUrl(this.props.url),this.source.refresh())}}var S=s(8266);class b extends v.Z{constructor(e,t){super(e,t),this.source=new S.Z,this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.ol.setProperties({label:"OpenStreetMap"})}}var E=s(1801),Z=s(811),R=s(9026);class O extends v.Z{constructor(e,t){super(e,t),this.ol=new u.Z({source:this.source}),this.parser=new Z.Z,this.createSource()}createSource(){return(0,R.Z)("createSource",this),fetch(this.props.url).then((e=>e.text())).then((e=>{const t=this.parser.read(e);return this.options=(0,E.B)(t,{layer:this.props.layer}),this.props.attributions&&(this.options.attributions=this.props.attributions),this.options.crossOrigin="",this.props.projection&&(this.options.projection=this.props.projection),this.options.wrapX=!1,this.source=new E.Z(this.options),this.ol.setSource(this.source),this.eventSources=[this.ol,this.source],this.props.onCapabilities&&this.props.onCapabilities.call(this,this.options),this.source})).catch((e=>(console.error("failed loading WMTS",this.props.url,this.props.layer,e),this.source=void 0,null)))}refresh(e){super.refresh(),(null==e?void 0:e.url)!==this.props.url||(null==e?void 0:e.layer)!==this.props.layer?this.createSource().then((()=>{this.ol.setSource(this.source),this.attachOldEventHandlers(this.source)})):this.props.onCapabilities&&this.props.onCapabilities.call(this,this.options)}}var L=s(228),k=s(2225);class j extends v.Z{constructor(e,t){super(e,t),this.createSource(),this.ol=new L.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){const{params:e,url:t}=this.props,s={params:e,url:t};this.source=new k.Z(s),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.createSource(),this.ol.setSource(this.source),this.attachOldEventHandlers(this.source)}}var C=s(9293);class D extends p.Z{constructor(e,t){super(e,t),this.createSource(),this.ol=new L.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){const e={url:this.props.url,projection:this.props.projection,imageExtent:this.props.extent,imageSize:this.props.size};this.source=new C.Z(e),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.props.url&&(null==e?void 0:e.url)!==this.props.url&&(this.createSource(),this.ol.setSource(this.source),this.eventSources=[this.ol,this.source],this.attachOldEventHandlers(this.source))}}var F=s(3149),U=s(7719);class z extends p.Z{constructor(e,t){super(e,t),this.createSource()}createSource(){var e,t,s,r,o,i;const n=null===(t=null===(e=U.RStyle.getStyleStatic(this.props.strokeStyle))||void 0===e?void 0:e.getStroke)||void 0===t?void 0:t.call(e),l=null===(r=null===(s=U.RStyle.getStyleStatic(this.props.lonLabelStyle))||void 0===s?void 0:s.getText)||void 0===r?void 0:r.call(s),a=null===(i=null===(o=U.RStyle.getStyleStatic(this.props.latLabelStyle))||void 0===o?void 0:o.getText)||void 0===i?void 0:i.call(o);this.ol=new F.Z({...this.props,strokeStyle:n,lonLabelStyle:l,latLabelStyle:a}),this.eventSources=[this.ol]}refresh(e){super.refresh(e);const t=this.context.map.removeLayer(this.ol);this.createSource(),this.attachOldEventHandlers(this.ol),t&&this.context.map.addLayer(this.ol)}}var A=s(8569);class M extends v.Z{constructor(e,t){super(e,t),this.source=new A.Z({url:this.props.url}),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.props.url&&(null==e?void 0:e.url)!==this.props.url&&(this.source.setUrl(this.props.url),this.source.refresh())}}var T=s(4409);class N extends v.Z{constructor(e,t){super(e,t),this.createSource(),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){const{params:e,url:t,projection:s}=this.props,r={params:e,url:t,projection:s};this.source=new T.Z(r),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.createSource(),this.ol.setSource(this.source),this.attachOldEventHandlers(this.source)}}var I=s(2347);class W extends v.Z{constructor(e,t){super(e,t),this.source=new I.Z({layer:this.props.layer}),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}}var _=s(4375);class V extends x{createSource(e){return this.source=new P.Z({features:this.props.features,url:this.props.url,format:this.props.format,loader:this.props.loader,wrapX:this.props.wrapX,strategy:this.props.strategy}),this.ol=new _.Z({...e,source:this.source}),[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.blur)!==this.props.blur&&this.ol.setBlur(this.props.blur),(null==e?void 0:e.radius)!==this.props.radius&&this.ol.setRadius(this.props.radius)}}var B=s(9261);class H extends x{createSource(e){return this.cluster=new P.Z({features:this.props.features,url:this.props.url,format:this.props.format,loader:this.props.loader,wrapX:this.props.wrapX,strategy:this.props.strategy}),this.source=new B.Z({source:this.cluster,distance:this.props.distance}),this.ol=new w.Z({...e,source:this.source,style:y.ZP.getStyle(e.style)}),[this.ol,this.source,this.cluster]}refresh(e){super.refresh(e),(null==e?void 0:e.distance)!==this.props.distance&&this.source.setDistance(this.props.distance),(null==e?void 0:e.url)!==this.props.url&&(this.cluster.setUrl(this.props.url),this.cluster.refresh())}render(){return l.createElement("div",{className:"_rlayers_RLayerCluster"},l.createElement(n.p.Provider,{value:{...this.context,layer:this.ol,source:this.cluster,vectorlayer:this.ol,vectorsource:this.cluster}},this.props.children))}}var G=s(156),X=s(7358);class K extends p.Z{constructor(e,t){super(e,t),this.source=new X.Z({url:this.props.url,format:this.props.format,projection:this.props.projection}),this.ol=new G.Z({style:y.ZP.getStyle(this.props.style),source:this.source,renderBuffer:this.props.renderBuffer}),this.eventSources=[this.ol,this.source],m.ZP.initEventRelay(this.context.map)}refresh(e){super.refresh(e);const t=Object.keys(this.props).filter((e=>e.startsWith("on"))).reduce(((e,t)=>({...e,["_"+t.toLowerCase()]:this.props[t]})),{});this.ol.setProperties(t),(null==e?void 0:e.style)!==this.props.style&&this.ol.setStyle(y.ZP.getStyle(this.props.style)),(null==e?void 0:e.url)!==this.props.url&&(this.source.setUrl(this.props.url),this.source.refresh())}render(){return l.createElement("div",{className:"_rlayers_RLayerVectorTile"},l.createElement(n.p.Provider,{value:{...this.context,layer:this.ol,vectortilelayer:this.ol}},this.props.children))}}var $=s(1005);class q extends v.Z{}class J extends q{constructor(e,t){super(e,t),this.createSource(),this.ol=new $.Z({opacity:.9,source:this.source,cacheSize:e.cacheSize}),this.eventSources=[this.ol,this.source]}createSource(){this.source=new d.Z({url:this.props.url,interpolate:!this.props.noIterpolation,projection:this.props.projection,tileGrid:this.props.tileGrid,crossOrigin:"anonymous"}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.tileGrid)===this.props.tileGrid&&(null==e?void 0:e.url)===this.props.url||(this.createSource(),this.ol.setSource(this.source),this.attachOldEventHandlers(this.source))}}class Y extends q{constructor(e,t){super(e,t),this.source=new S.Z,this.ol=new $.Z({source:this.source,cacheSize:e.cacheSize}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.ol.setProperties({label:"OpenStreetMap"})}}var Q=s(7494);class ee extends i.b{constructor(e,t){var s;if(super(e,t),!(null===(s=this.context)||void 0===s?void 0:s.map))throw new Error("A control must be part of a map")}toOLProps(e){var t;return{className:e.className,target:null===(t=e.target)||void 0===t?void 0:t.current}}refresh(e){super.refresh(e),this.ol.setProperties(this.toOLProps(this.props))}componentDidMount(){super.componentDidMount(),this.context.map.addControl(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeControl(this.ol)}}class te extends ee{constructor(e,t){super(e,t),this.ol=new Q.Z(this.toOLProps(e))}toOLProps(e){var t;return{...super.toOLProps(e),minWidth:e.minWidth,bar:e.bar,text:e.text,units:null!==(t=e.units)&&void 0!==t?t:"metric"}}}var se=s(2657);class re extends ee{constructor(e,t){super(e,t),this.ol=new se.Z(this.toOLProps(e))}refresh(e){super.refresh(e),(null==e?void 0:e.collapsed)!==this.props.collapsed&&this.ol.setCollapsed(this.props.collapsed)}toOLProps(e){var t;return{...super.toOLProps(e),collapsible:null===(t=e.collapsible)||void 0===t||t,collapsed:e.collapsed}}}var oe=s(3851);class ie extends ee{constructor(e,t){super(e,t),this.ol=new oe.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),duration:e.duration,zoomInLabel:e.zoomInLabel,zoomOutLabel:e.zoomOutLabel,zoomInTipLabel:e.zoomInTipLabel,zoomOutTipLabel:e.zoomOutTipLabel,delta:e.delta}}}var ne=s(8168);class le extends ee{constructor(e,t){super(e,t),this.ol=new ne.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),duration:e.duration}}}var ae=s(8775);class ce extends ee{constructor(e,t){super(e,t),this.targetRef=l.createRef()}componentDidMount(){this.ol=new ae.Z(this.toOLProps(this.props)),super.componentDidMount()}toOLProps(e){var t;return{...super.toOLProps(e),element:null===(t=this.targetRef)||void 0===t?void 0:t.current}}render(){return l.createElement("div",{className:["ol-control",this.props.className].join(" "),ref:this.targetRef},this.props.children)}}class he extends ee{constructor(e,t){super(e,t),this.onchange=()=>this.forceUpdate(),this.clickCollapse=()=>{this.setState({collapsed:!this.state.collapsed})},this.targetRef=l.createRef(),this.state={collapsed:!0,visible:[!0]}}componentDidMount(){this.ol=new ae.Z(this.toOLProps(this.props)),super.componentDidMount(),this.context.map.on("change",this.onchange),this.forceUpdate()}componentWillUnmount(){super.componentWillUnmount(),this.context.map.un("change",this.onchange)}toOLProps(e){var t;return{...super.toOLProps(e),element:null===(t=this.targetRef)||void 0===t?void 0:t.current}}render(){var e,t;const s=l.Children.map(this.props.children,((e,t)=>{var s;if(l.isValidElement(e))return null!==(s=this.state.visible[t])&&void 0!==s&&s})),r=l.Children.map(this.props.children,(e=>{var t,s;if(l.isValidElement(e))return null!==(s=null===(t=e.props.properties)||void 0===t?void 0:t.label)&&void 0!==s?s:"no label"}));return l.createElement(l.Fragment,null,l.createElement("div",{className:["ol-control",null!==(e=this.props.className)&&void 0!==e?e:"ol-layers-control"].join(" "),ref:this.targetRef},l.createElement("span",{onClick:this.clickCollapse},null!==(t=this.props.element)&&void 0!==t?t:l.createElement("button",null,"=")),this.state.collapsed?null:l.createElement("div",null,r.map(((e,t)=>l.createElement("div",{key:t},l.createElement("input",{type:"radio",id:t.toString(),name:e,value:t.toString(),checked:s[t],onChange:()=>{for(const e in s)s[e]=!1;s[t]=!0,this.setState({visible:[...s],collapsed:!0})}}),l.createElement("label",{htmlFor:t.toString()},e)))))),l.Children.map(this.props.children,((e,t)=>l.isValidElement(e)?l.cloneElement(e,{visible:s[t]}):e)))}}var pe=s(5654);class ue extends ee{constructor(e,t){super(e,t),this.ol=new pe.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),collapsible:e.collapsible,collapsed:e.collapsed,label:e.label,collapseLabel:e.collapseLabel}}refresh(e){super.refresh(e),(null==e?void 0:e.collapsed)!==this.props.collapsed&&this.ol.setCollapsed(this.props.collapsed)}render(){return l.createElement("div",{className:this.props.className,style:{width:this.props.width,height:this.props.height}},l.createElement(n.p.Provider,{value:{map:this.ol.getOverviewMap()}},this.props.children))}}var de=s(97);class ve extends ee{constructor(e,t){super(e,t),this.ol=new de.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),source:e.source,label:e.label,labelActive:e.labelActive,tipLabel:e.tipLabel}}}class fe extends i.b{constructor(e,t){var s,r;if(super(e,t),!(null===(r=null===(s=this.context)||void 0===s?void 0:s.map)||void 0===r?void 0:r.addInteraction))throw new Error("An interaction must be part of a map");this.ol=this.createOL(e)}createOL(e){throw new Error("RBaseInteraction should not be directly instantiated")}refresh(e){for(const t of this.classProps)if(e&&e[t]!==this.props[t]){(0,R.Z)("Replacing interaction",this,e),this.componentWillUnmount(),this.ol=this.createOL(this.props),this.componentDidMount();break}super.refresh(e)}componentDidMount(){super.componentDidMount(),this.context.map.addInteraction(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeInteraction(this.ol)}}fe.classProps=[];class me extends fe{}me.classProps=["handleDownEvent","handleDragEvent","handleMoveEvent","handleUpEvent"];var ye=s(1518);class xe extends me{createOL(e){return this.classProps=xe.classProps,new ye.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}xe.classProps=["className","condition","minArea","boxEndCondition"];var we=s(3232);class Pe extends me{createOL(e){return this.classProps=Pe.classProps,new we.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Pe.classProps=["features","layers","filter","hitTolerance"];var ge=s(8323);class Se extends me{createOL(e){var t;if(!(null===(t=null==this?void 0:this.context)||void 0===t?void 0:t.vectorsource))throw new Error("A Draw interaction must be part of a vector layer");return this.classProps=Se.classProps,new ge.ZP({type:e.type,source:this.context.vectorsource,...Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{})})}}Se.classProps=["condition","finishCondition","freehandCondition","style","stopClick","maxPoints","minPoints","snapTolerance"];var be=s(8373);class Ee extends me{createOL(e){var t;if(!(null===(t=null==this?void 0:this.context)||void 0===t?void 0:t.vectorsource))throw new Error("A Modify interaction must be part of a vector layer");return this.classProps=Ee.classProps,new be.Z({source:this.context.vectorsource,...Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{})})}}Ee.classProps=["condition","deleteCondition","insertVertexCondition","style","pixelTolerance","hitDetection"];var Ze=s(3522);class Re extends fe{createOL(e){return this.classProps=Re.classProps,new Ze.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Re.classProps=["duration","delta"];var Oe=s(3267);class Le extends fe{createOL(e){return this.classProps=Le.classProps,new Oe.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Le.classProps=["condition","kinetic"];var ke=s(2857);class je extends fe{createOL(e){return this.classProps=je.classProps,new ke.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}je.classProps=["condition","duration"];var Ce=s(519);class De extends fe{createOL(e){return this.classProps=De.classProps,new Ce.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}De.classProps=["className","condition","duration","out","minArea"];var Fe=s(686);class Ue extends fe{createOL(e){return this.classProps=Ue.classProps,new Fe.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Ue.classProps=["condition","maxDelta","duration","useAnchor","constrainResolution"];var ze=s(3205);class Ae extends fe{createOL(e){return this.classProps=Ae.classProps,new ze.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Ae.classProps=["threshold","duration"];var Me=s(4474);class Te extends fe{createOL(e){return this.classProps=Te.classProps,new Me.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Te.classProps=["duration"];var Ne=s(8789);class Ie extends fe{createOL(e){return this.classProps=Ie.classProps,new Ne.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Ie.classProps=["condition","duration","pixelDelta"];var We=s(834);class _e extends fe{createOL(e){return this.classProps=_e.classProps,new We.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}_e.classProps=["condition","duration","delta"];var Ve=s(3223);class Be extends i.b{constructor(e,t){var s;if(super(e,t),!(null===(s=this.context)||void 0===s?void 0:s.location))throw new Error("An overlay must be part of a location provider (ie RFeature)");this.ol=new Ve.Z({autoPan:e.autoPan}),this.containerRef=l.createRef()}setPosition(){var e;if(this.ol.setPosition(this.context.location),this.props.autoPosition&&(null===(e=this.containerRef)||void 0===e?void 0:e.current)){this.containerRef.current.style.position="absolute";const e=this.context.map.getPixelFromCoordinate(this.context.location),t=this.context.map.getSize();e[0]>t[0]/2?(this.containerRef.current.style.left=null,this.containerRef.current.style.right="0px"):(this.containerRef.current.style.left="0px",this.containerRef.current.style.right=null),e[1]>t[1]/2?(this.containerRef.current.style.top=null,this.containerRef.current.style.bottom="0px"):(this.containerRef.current.style.top="0px",this.containerRef.current.style.bottom=null)}}refresh(e){super.refresh(e),this.ol.setElement(this.containerRef.current),this.setPosition()}componentDidMount(){super.componentDidMount(),this.context.map.addOverlay(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeOverlay(this.ol)}render(){return this.setPosition(),l.createElement("div",{ref:this.containerRef,className:this.props.className,onClick:this.props.onClick},this.props.children)}}class He extends Be{}class Ge extends Be{constructor(e,t){super(e,t),this.toggle=()=>{this.visible=!this.visible,this.setPosition()},this.show=()=>{var e,t;this.showing||(this.hiding&&window.clearTimeout(this.hiding),this.showing=window.setTimeout((()=>{this.visible=!0,this.setPosition(),this.hiding=this.showing=void 0}),null!==(t=null===(e=this.props.delay)||void 0===e?void 0:e.show)&&void 0!==t?t:250))},this.hide=()=>{var e,t;this.hiding||(this.showing&&window.clearTimeout(this.showing),this.hiding=window.setTimeout((()=>{this.visible=!1,this.setPosition(),this.hiding=this.showing=void 0}),null!==(t=null===(e=this.props.delay)||void 0===e?void 0:e.hide)&&void 0!==t?t:50))},this.visible=!1}componentWillUnmount(){super.componentWillUnmount(),this.unregister()}setPosition(){this.ol.setPosition(this.visible?this.context.location:void 0)}unregister(){this.context.feature.un("click",this.toggle),this.context.feature.un("pointerenter",this.show),this.context.feature.un("pointerleave",this.hide)}refresh(){switch(this.ol.setElement(this.containerRef.current),this.unregister(),this.props.trigger){default:case"click":this.context.feature.on("click",this.toggle);break;case"hover":this.context.feature.on("pointerenter",this.show),this.context.feature.on("pointerleave",this.hide)}this.setPosition()}}var Xe=s(4570);class Ke extends i.b{constructor(e,t){var s,r;if(super(e,t),!(null===(s=null==this?void 0:this.context)||void 0===s?void 0:s.map))throw new Error("A Geolocation must be part of a map");const o=null!==(r=e.projection)&&void 0!==r?r:this.context.map.getView().getProjection();this.ol=new Xe.Z({...e,projection:o})}}},8882:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(7294),o=s(1543),i=s(8898);class n extends i.b{constructor(e,t){var s,r;if(super(e,t),!(null===(r=null===(s=this.context)||void 0===s?void 0:s.map)||void 0===r?void 0:r.addLayer))throw new Error("A layer must be part of a map")}refresh(e){super.refresh(e);for(const t of["visible","opacity","zIndex","minResolution","maxResolution","minZoom","maxZoom"]){const s=t.charAt(0).toUpperCase()+t.substring(1);this.props[t]!==(e&&e[t])&&this.ol["set"+s](this.props[t])}this.source&&this.props.attributions&&this.source.setAttributions(this.props.attributions),this.props.properties&&this.ol.setProperties(this.props.properties)}componentDidMount(){super.componentDidMount(),this.context.map.addLayer(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeLayer(this.ol)}render(){return r.createElement("div",{className:"_rlayers_RLayer"},r.createElement(o.p.Provider,{value:{...this.context,layer:this.ol,source:this.source}},this.props.children))}}},8387:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(8882);class o extends r.Z{}},9509:(e,t,s)=>{s.d(t,{Hp:()=>h,ZP:()=>p,yO:()=>c});var r=s(7294),o=s(3935),i=s(842),n=s(7539),l=s(1543),a=s(8898);const c=()=>r.useRef(),h=()=>r.createRef();class p extends a.b{constructor(e,t){super(e,t),this.style=(e,t)=>{if(this.ol!==this.style)return this.ol;let s;if(this.cache){s=this.props.cacheId(e,t);const r=this.cache.get(s);if(r)return r}const i=new n.ZP({zIndex:this.props.zIndex}),a=r.createElement(l.p.Provider,{value:{...this.context,style:i}},this.props.render(e,t));return o.render(a,document.createElement("div")),this.cache&&this.cache.set(s,i),i},e.render?this.ol=this.style:this.ol=new n.ZP({zIndex:e.zIndex}),e.render&&e.cacheSize&&e.cacheId&&(this.cache=new i.Z({max:e.cacheSize}))}componentDidMount(){super.componentDidMount(),this.refresh()}refresh(e){var t,s,r,o,i,l,a;if(super.refresh(e),!e||(null==e?void 0:e.render)!==this.props.render){if(null===(t=this.context)||void 0===t?void 0:t.styleArray){if(this.ol===this.style)throw new Error("An RStyleArray must contain only static RStyles");this.context.styleArray.includes(this.ol)||this.context.styleArray.push(this.ol)}else(null===(r=null===(s=this.context)||void 0===s?void 0:s.feature)||void 0===r?void 0:r.setStyle)?this.context.feature.setStyle(this.ol):(null===(i=null===(o=this.context)||void 0===o?void 0:o.vectorlayer)||void 0===i?void 0:i.setStyle)?this.context.vectorlayer.setStyle(this.ol):(null===(a=null===(l=this.context)||void 0===l?void 0:l.vectortilelayer)||void 0===a?void 0:a.setStyle)&&this.context.vectortilelayer.setStyle(this.ol);this.cache&&this.cache.clear()}this.ol instanceof n.ZP&&(!e||e.zIndex!==this.props.zIndex)&&this.ol.setZIndex(this.props.zIndex)}render(){return this.props.render?null:r.createElement("div",{className:"_rlayers_RStyle"},r.createElement(l.p.Provider,{value:{...this.context,style:this.ol}},this.props.children))}static getStyle(e){return null==e?e:"function"==typeof e.style?(t,s)=>e.style(t,s):Object.keys(e).includes("current")?(t,s)=>e.current.style(t,s):e}static getStyleStatic(e){if(null==e)return e;let t;if("function"==typeof e.style&&(t=e),!Object.keys(e).includes("current")||(t=e.current,null!=t)){if(t){if(void 0!==t.ol&&"function"!=typeof t.ol)return t.ol;throw new TypeError("RStyle is dynamic and cannot be converted to Style")}if("function"==typeof e)throw new TypeError("StyleLike is dynamic and cannot be converted to Style");return e}}}},7719:(e,t,s)=>{s.r(t),s.d(t,{RBackground:()=>b,RBaseStyle:()=>l,RBaseStyleProps:()=>r.RBaseStyleProps,RCircle:()=>x,RFill:()=>v,RIcon:()=>Z,RRegularShape:()=>P,RStroke:()=>u,RStyle:()=>a.ZP,RStyleArray:()=>h,RStyleLike:()=>a.RStyleLike,RStyleRef:()=>a.RStyleRef,RText:()=>S,createRStyle:()=>a.Hp,useRStyle:()=>a.yO});var r={};s.r(r),s.d(r,{Z:()=>l});var o=s(7294),i=s(1543),n=s(9026);class l extends o.PureComponent{constructor(e,t){if(super(e,t),!this.context)throw new Error("A style property must be part of a style");this.ol=this.create(e)}create(e){throw new Error("RBaseStyle is an abstract class")}refresh(e){if((0,n.Z)("refreshStyle",this),e)for(const t of this.classProps){const s=t.charAt(0).toUpperCase()+t.substring(1);(e&&e[t])!==this.props[t]&&(this.ol["set"+s]?this.ol["set"+s](this.props[t]):console.error(`Underlying OpenLayers object does not support updating of ${t} after object creation. If you are using an anonymous constant array or object, consider assigning its value to a constant and then passing the constant or use React.useMemo() to avoid this warning and improve performance.`))}}set(e){}componentDidMount(){this.set(this.ol)}componentDidUpdate(e,t,s){e!==this.props&&this.refresh(e)}componentWillUnmount(){this.set(null)}render(){return null}}l.contextType=i.p,l.classProps=[];var a=s(9509),c=s(3935);class h extends a.ZP{constructor(e,t){super(e,t),this.style=(e,t)=>{if(this.props.render){const s=this.props.render(e,t);o.Children.map(s.props.children,(e=>{if(o.isValidElement(e)&&e.type!==a.ZP)throw new TypeError("An RStyleArray should contain only RStyle elements")}));const r=[],n=o.createElement(i.p.Provider,{value:{...this.context,styleArray:r}},s.props.children);return c.render(n,document.createElement("div")),r}return this.ol},this.childRefs=[],e.render?this.ol=this.style:this.ol=[]}refresh(e){super.refresh(e)}render(){return o.Children.map(this.props.children,(e=>{if(o.isValidElement(e)&&e.type!==a.ZP)throw new TypeError("An RStyleArray should contain only RStyle elements")})),this.props.render?o.createElement(o.Fragment,null):o.createElement("div",{className:"_rlayers_RStyleArray"},o.createElement(i.p.Provider,{value:{...this.context,styleArray:this.ol}},this.props.children))}}var p=s(8958);class u extends l{create(e){return this.classProps=u.classProps,new p.Z(e)}set(e){if(this.context.style.setStroke)return this.context.style.setStroke(e);throw new Error("Parent element does not support a stroke")}}u.classProps=["color","width","lineCap","lineJoin","lineDash"];var d=s(1345);class v extends l{create(e){return this.classProps=v.classProps,new d.Z(e)}set(e){if(this.context.style.setFill)return this.context.style.setFill(e);throw new Error("Parent element does not support a fill")}}v.classProps=["color"];var f=s(283);class m extends l{create(e){throw new Error("RImage is an abstract class")}set(e){if(!this.context.style.setImage)throw new Error("Parent element does not support an image");this.context.style.setImage(e)}}m.classProps=["opacity","rotateWithView","rotation","scale","displacement"];class y extends m{create(e){throw new Error("RImage is an abstract class")}setStroke(e){this.stroke=e,this.ol=this.create(this.props),super.set(this.ol)}setFill(e){this.fill=e,this.ol=this.create(this.props),super.set(this.ol)}render(){return o.createElement("div",{className:"_rlayers_RStyle"},o.createElement(i.p.Provider,{value:{...this.context,style:this}},this.props.children))}}y.classProps=m.classProps.concat(["radius"]);class x extends y{create(e){return this.classProps=x.classProps,new f.Z({...e,stroke:this.stroke,fill:this.fill})}}x.classProps=y.classProps.concat(["radius"]);var w=s(5393);class P extends y{create(e){return this.classProps=P.classProps,new w.Z({...e,stroke:this.stroke,fill:this.fill})}}P.classProps=y.classProps.concat(["radius1","radius2","points","angle"]);var g=s(1280);class S extends l{create(e){return this.classProps=S.classProps,new g.Z(e)}set(e){if(!this.context.style.setText)throw new Error("Parent element does not support a text");this.context.style.setText(e)}render(){return o.createElement("div",{className:"_rlayers_RStyle_RText"},o.createElement(i.p.Provider,{value:{...this.context,style:this.ol}},this.props.children))}}S.classProps=["text","font","offsetY","offsetX","overflow","scale","rotation","textAlign","padding","placement","textBaseline"];class b extends l{create(e){this.classProps=b.classProps;const t=this.context.style;if(!t.setBackgroundFill||!t.setBackgroundStroke)throw new Error("Parent element does not support a background");return{setFill:t.setBackgroundFill.bind(t),setStroke:t.setBackgroundStroke.bind(t)}}render(){return o.createElement("div",{className:"_rlayers_RStyle_RBackground"},o.createElement(i.p.Provider,{value:{...this.context,style:this.ol}},this.props.children))}}b.classProps=[];var E=s(2846);class Z extends m{create(e){return this.classProps=Z.classProps,new E.Z(e)}}Z.classProps=m.classProps.concat(["anchor","anchorXUnits","anchorYUnits","color","crossOrigin","img","offset","offsetOrigin","size","imgSize","src"])}}]);