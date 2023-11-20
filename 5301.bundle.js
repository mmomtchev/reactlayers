(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[5301],{1788:(n,o,e)=>{"use strict";e.d(o,{Z:()=>i});var l=e(8081),t=e.n(l),r=e(3645),a=e.n(r)()(t());a.push([n.id,':root,\n:host {\n  --ol-background-color: white;\n  --ol-accent-background-color: #F5F5F5;\n  --ol-subtle-background-color: rgba(128, 128, 128, 0.25);\n  --ol-partial-background-color: rgba(255, 255, 255, 0.75);\n  --ol-foreground-color: #333333;\n  --ol-subtle-foreground-color: #666666;\n  --ol-brand-color: #00AAFF;\n}\n\n.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1.5px solid var(--ol-background-color);\n  background-color: var(--ol-partial-background-color);\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: var(--ol-partial-background-color);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner {\n  border: 1px solid var(--ol-subtle-foreground-color);\n  border-top: none;\n  color: var(--ol-foreground-color);\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n\n.ol-scale-bar-inner {\n  display: flex;\n}\n\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: var(--ol-foreground-color);\n  float: right;\n  z-index: 10;\n}\n\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 10px;\n  z-index: 11;\n  color: var(--ol-foreground-color);\n  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);\n}\n\n.ol-scale-text {\n  position: absolute;\n  font-size: 12px;\n  text-align: center;\n  bottom: 25px;\n  color: var(--ol-foreground-color);\n  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);\n}\n\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  box-sizing: border-box;\n  border: 1px solid var(--ol-foreground-color);\n}\n\n.ol-scale-singlebar-even {\n  background-color: var(--ol-subtle-foreground-color);\n}\n\n.ol-scale-singlebar-odd {\n  background-color: var(--ol-background-color);\n}\n\n.ol-unsupported {\n  display: none;\n}\n\n.ol-viewport,\n.ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.ol-viewport canvas {\n  all: unset;\n  overflow: hidden;\n}\n\n.ol-viewport {\n  touch-action: pan-x pan-y;\n}\n\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n\n.ol-control {\n  position: absolute;\n  background-color: var(--ol-subtle-background-color);\n  border-radius: 4px;\n}\n\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: var(--ol-subtle-foreground-color);\n  font-weight: bold;\n  text-decoration: none;\n  font-size: inherit;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: var(--ol-background-color);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  will-change: transform;\n}\n\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  outline: 1px solid var(--ol-subtle-foreground-color);\n  color: var(--ol-foreground-color);\n}\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n}\n\n.ol-attribution a {\n  color: var(--ol-subtle-foreground-color);\n  text-decoration: none;\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 1px .5em;\n  color: var(--ol-foreground-color);\n  text-shadow: 0 0 2px var(--ol-background-color);\n  font-size: 12px;\n}\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution button {\n  flex-shrink: 0;\n}\n\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n\n.ol-attribution:not(.ol-collapsed) {\n  background: var(--ol-partial-background-color);\n}\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: block;\n}\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid var(--ol-subtle-foreground-color);\n  height: 150px;\n  width: 150px;\n}\n\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: var(--ol-subtle-background-color);\n}\n\n.ol-overviewmap-box {\n  border: 1.5px dotted var(--ol-subtle-foreground-color);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const i=a},2031:(n,o,e)=>{"use strict";var l=e(3379),t=e.n(l),r=e(7795),a=e.n(r),i=e(569),c=e.n(i),s=e(3565),d=e.n(s),u=e(9216),p=e.n(u),b=e(4589),m=e.n(b),g=e(1788),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),t()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals},9611:n=>{n.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3e %3cpath d='M72.825,97.439L62.234,79.797v-4.25H60.25c-0.597-1.834-3.203-9.893-3.963-13.271h0.782v-4.17h-1.82 c-0.423-4.131-3.366-33.21-3.279-42.153c0.687-1.021,0.964-1.314,0.964-1.314l0.104-0.103l0.038-0.142 c0.365-1.383,0.276-4.369-2.628-5.856L50,2.561l-0.447,5.977c-2.904,1.487-2.993,4.473-2.628,5.856l0.04,0.14l0.098,0.101 c0.002,0.003,0.279,0.296,0.968,1.318c0.087,8.942-2.856,38.022-3.279,42.153h-1.82v4.17h0.783 c-0.761,3.379-3.367,11.438-3.964,13.271h-1.984v4.25l-10.59,17.643h10.707v-0.545c0-6.68,5.437-12.115,12.118-12.115 c6.681,0,12.116,5.436,12.116,12.115v0.545H72.825z M46.891,75.461c0.287-1.947,1.164-7.918,1.477-10.16h3.266 c0.312,2.242,1.189,8.213,1.477,10.16H46.891z'/%3e %3c!-- Created by Randomhero from the Noun Project --%3e %3c/svg%3e"},5301:(n,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>p});var l=e(7294),t=e(6414),r=e(8683),a=e(188),i=(e(2031),e(9611)),c=e.n(i),s=e(4467);const d=(0,t.mi)([2.294,48.858]),u=new a.Z(d);function p(){const[n,o]=l.useState(!1);return l.createElement(l.Fragment,null,l.createElement(s.rO,{className:"example-map",initial:{center:(0,t.mi)([2.364,48.82]),zoom:11}},l.createElement(s.H3,null),l.createElement(s.jh,null,l.createElement(s.P_.RStyle,null,l.createElement(s.P_.RIcon,{src:c()})),l.createElement(s.j$,{geometry:u})),l.createElement(s.jh,{onChange:l.useCallback((n=>{const e=n.target;(null==e?void 0:e.forEachFeatureAtCoordinateDirect)&&o(e.forEachFeatureAtCoordinateDirect(d,(()=>!0)))}),[])},l.createElement(s.P_.RStyle,null,l.createElement(s.P_.RStroke,{color:"#0000ff",width:3}),l.createElement(s.P_.RFill,{color:"rgba(0, 0, 0, 0.75)"})),l.createElement(s.kB.UW,{type:"Polygon",condition:r.vY,freehandCondition:r.aj}),l.createElement(s.kB.UW,{type:"Circle",condition:r.Ko,freehandCondition:r.Fi}),l.createElement(s.kB._j,{condition:r.QC,deleteCondition:l.useCallback((n=>(0,r.QC)(n)&&(0,r.OK)(n)),[])}))),l.createElement("div",null,l.createElement("p",{className:"p-0 m-0"},"Hold ",l.createElement("em",null,"Shift")," and click without dragging for a regular polygon"),l.createElement("p",{className:"p-0 m-0"},"Hold ",l.createElement("em",null,"Shift")," and ",l.createElement("em",null,"Alt")," and drag for a freehand polygon"),l.createElement("p",{className:"p-0 m-0"},"Hold ",l.createElement("em",null,"Alt")," and click without dragging for a circle"),l.createElement("p",{className:"p-0 m-0"},"Hold ",l.createElement("em",null,"Ctrl / ⌘")," and drag to move/add a vertex"),l.createElement("p",{className:"p-0 m-0"},"Hold ",l.createElement("em",null,"Ctrl / ⌘")," and double click to remove a vertex")),l.createElement("div",{className:"mx-0 mt-1 mb-3 p-1 w-100 jumbotron shadow shadow"},l.createElement("p",null,"Currently the Eiffel Tower is",n?"":" not"," covered")))}}}]);