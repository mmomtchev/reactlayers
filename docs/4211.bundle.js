(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[4211],{94211:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});const o="import React, {useCallback} from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport GeoJSON from 'ol/format/GeoJSON';\nimport 'ol/ol.css';\n\nimport {RMap, ROSM, RLayerVector, RStyle, MapBrowserEvent} from 'rlayers';\n\nimport geojsonFeatures from './data/geo.json';\n\nexport default function Features(): JSX.Element {\n    const [flow, setFlow] = React.useState([]);\n    return (\n        <div className='d-flex flex-row'>\n            <RMap className='example-map' center={fromLonLat([2.364, 48.82])} zoom={11}>\n                <ROSM />\n                {/* From a static file included at bundling time */}\n                <RLayerVector\n                    zIndex={10}\n                    features={new GeoJSON({featureProjection: 'EPSG:3857'}).readFeatures(\n                        geojsonFeatures\n                    )}\n                    onClick={useCallback(\n                        (e: MapBrowserEvent) => {\n                            setFlow([...flow, e.target.get('en')].slice(-16));\n                        },\n                        [flow]\n                    )}\n                >\n                    <RStyle.RStyle>\n                        <RStyle.RCircle radius={5}>\n                            <RStyle.RFill color='blue' />\n                        </RStyle.RCircle>\n                    </RStyle.RStyle>\n                </RLayerVector>\n                {/* From an URL */}\n                <RLayerVector\n                    zIndex={5}\n                    format={new GeoJSON({featureProjection: 'EPSG:3857'})}\n                    url='https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson'\n                    onPointerEnter={useCallback(\n                        (e: MapBrowserEvent) => {\n                            setFlow([...flow, 'Entering ' + e.target.get('nom')].slice(-16));\n                        },\n                        [flow]\n                    )}\n                >\n                    <RStyle.RStyle>\n                        <RStyle.RStroke color='#007bff' width={3} />\n                        <RStyle.RFill color='transparent' />\n                    </RStyle.RStyle>\n                </RLayerVector>\n            </RMap>\n            <div className='mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow example-list'>\n                <p>Your actions</p>\n                <ul\n                    dangerouslySetInnerHTML={{\n                        __html: flow.map((p) => `<li className=\"m-0\">${p}</li>`).join('')\n                    }}\n                />\n            </div>\n        </div>\n    );\n}\n"}}]);