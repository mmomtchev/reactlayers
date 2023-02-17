(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[7635],{1788:(n,o,e)=>{"use strict";e.d(o,{Z:()=>i});var l=e(8081),r=e.n(l),t=e(3645),a=e.n(t)()(r());a.push([n.id,':root,\n:host {\n  --ol-background-color: white;\n  --ol-accent-background-color: #F5F5F5;\n  --ol-subtle-background-color: rgba(128, 128, 128, 0.25);\n  --ol-partial-background-color: rgba(255, 255, 255, 0.75);\n  --ol-foreground-color: #333333;\n  --ol-subtle-foreground-color: #666666;\n  --ol-brand-color: #00AAFF;\n}\n\n.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1.5px solid var(--ol-background-color);\n  background-color: var(--ol-partial-background-color);\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: var(--ol-partial-background-color);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner {\n  border: 1px solid var(--ol-subtle-foreground-color);\n  border-top: none;\n  color: var(--ol-foreground-color);\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n\n.ol-scale-bar-inner {\n  display: flex;\n}\n\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: var(--ol-foreground-color);\n  float: right;\n  z-index: 10;\n}\n\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 10px;\n  z-index: 11;\n  color: var(--ol-foreground-color);\n  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);\n}\n\n.ol-scale-text {\n  position: absolute;\n  font-size: 12px;\n  text-align: center;\n  bottom: 25px;\n  color: var(--ol-foreground-color);\n  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);\n}\n\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  box-sizing: border-box;\n  border: 1px solid var(--ol-foreground-color);\n}\n\n.ol-scale-singlebar-even {\n  background-color: var(--ol-subtle-foreground-color);\n}\n\n.ol-scale-singlebar-odd {\n  background-color: var(--ol-background-color);\n}\n\n.ol-unsupported {\n  display: none;\n}\n\n.ol-viewport,\n.ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.ol-viewport canvas {\n  all: unset;\n}\n\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n\n.ol-control {\n  position: absolute;\n  background-color: var(--ol-subtle-background-color);\n  border-radius: 4px;\n}\n\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: var(--ol-subtle-foreground-color);\n  font-weight: bold;\n  text-decoration: none;\n  font-size: inherit;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: var(--ol-background-color);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  will-change: transform;\n}\n\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  outline: 1px solid var(--ol-subtle-foreground-color);\n  color: var(--ol-foreground-color);\n}\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n}\n\n.ol-attribution a {\n  color: var(--ol-subtle-foreground-color);\n  text-decoration: none;\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 1px .5em;\n  color: var(--ol-foreground-color);\n  text-shadow: 0 0 2px var(--ol-background-color);\n  font-size: 12px;\n}\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution button {\n  flex-shrink: 0;\n}\n\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n\n.ol-attribution:not(.ol-collapsed) {\n  background: var(--ol-partial-background-color);\n}\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: block;\n}\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid var(--ol-subtle-foreground-color);\n  height: 150px;\n  width: 150px;\n}\n\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: var(--ol-subtle-background-color);\n}\n\n.ol-overviewmap-box {\n  border: 1.5px dotted var(--ol-subtle-foreground-color);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const i=a},2031:(n,o,e)=>{"use strict";var l=e(3379),r=e.n(l),t=e(7795),a=e.n(t),i=e(569),c=e.n(i),s=e(3565),p=e.n(s),d=e(9216),u=e.n(d),m=e(4589),b=e.n(m),g=e(1788),x={};x.styleTagTransform=b(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=u(),r()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals},8338:n=>{n.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' version='1.1' height='64' width='64' style='shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;' viewBox='0 0 222.14 392.275' x='0px' y='0px' fill-rule='evenodd' clip-rule='evenodd'%3e %3cdefs%3e %3clinearGradient id='gradient' x2='1' y2='1'%3e %3cstop offset='0%25' stop-color='%23447799' /%3e %3cstop offset='50%25' stop-color='%23224488' /%3e %3cstop offset='100%25' stop-color='%23112266' /%3e %3c/linearGradient%3e %3c/defs%3e %3cg%3e %3cpath fill='url(%23gradient) %23447799' d='M111.07 0c-61.34,0 -111.07,49.73 -111.07,111.07 0,70.61 56.28,148.74 102.39,198.93 4.68,5.08 12.68,5.08 17.36,0 46.11,-50.19 102.39,-128.32 102.39,-198.93 0,-61.34 -49.73,-111.07 -111.07,-111.07zm0 52.68c32.24,0 58.39,26.14 58.39,58.39 0,32.24 -26.15,58.38 -58.39,58.38 -32.24,0 -58.39,-26.14 -58.39,-58.38 0,-32.25 26.15,-58.39 58.39,-58.39z'/%3e %3c/g%3e %3c/svg%3e"},7635:(n,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>u});var l=e(7294),r=e(6414),t=e(188),a=e(3083),i=(e(2031),e(3874)),c=e(7719),s=e(8338),p=e.n(s);const d={origin:[2.364,48.82],ArcDeTriomphe:[2.295,48.8737],PlaceDItalie:[2.355,48.831],Bastille:[2.369,48.853],TourEiffel:[2.294,48.858],Montmartre:[2.342,48.887]};function u(){const n=l.useRef();return l.createElement(l.Fragment,null,l.createElement(i.rO,{className:"example-map",initial:{center:(0,r.mi)(d.origin),zoom:11}},l.createElement(i.H3,null),l.createElement(i.jh,{zIndex:10},l.createElement(i.j$,{geometry:new t.Z((0,r.mi)(d.ArcDeTriomphe))},l.createElement(c.RStyle,null,l.createElement(c.RIcon,{src:p(),anchor:[.5,.8]})),l.createElement(i.Zr,{ref:n,trigger:"click",className:"example-overlay"},l.createElement("div",{className:"card"},l.createElement("p",{className:"card-header"},l.createElement("strong",null,"Arc de Triomphe")),l.createElement("p",{className:"card-body text-center"},"Popup on click")))),l.createElement(i.j$,{geometry:new a.ZP([[(0,r.mi)(d.PlaceDItalie),(0,r.mi)(d.Bastille),(0,r.mi)(d.TourEiffel),(0,r.mi)(d.PlaceDItalie)]]),onClick:(0,l.useCallback)((n=>n.map.getView().fit(n.target.getGeometry().getExtent(),{duration:250})),[])},l.createElement(c.RStyle,null,l.createElement(c.RStroke,{color:"yellow",width:4}),l.createElement(c.RFill,{color:"transparent"})),l.createElement(i.Zr,{trigger:"hover",className:"example-overlay"},l.createElement("p",null,l.createElement("strong",null,"Les catacombes")),l.createElement("p",null,l.createElement("em",null,"Popup on hover, pan on click")))))),l.createElement("div",null,"Control programmatically:"),l.createElement("div",null,l.createElement("button",{className:"btn btn-primary m-1",onClick:()=>n.current.hide()},"Hide Arc de Triomphe"),l.createElement("button",{className:"btn btn-primary m-1",onClick:()=>n.current.show()},"Show Arc de Triomphe")))}}}]);