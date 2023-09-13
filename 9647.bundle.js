"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[9647],{9647:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});const r="import React, {useCallback} from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport GeoJSON from 'ol/format/GeoJSON';\nimport {Feature} from 'ol';\nimport {Geometry} from 'ol/geom';\nimport 'ol/ol.css';\n\nimport {RMap, RLayerHeatmap} from 'rlayers';\nimport RLayerStadia from 'rlayers/layer/RLayerStadia';\n\n// Earthquakes of magnitude of at least 3.0 in 2020 (courtesy of USGS)\n// (this won't work in CodePen)\nimport earthquakes from '!!file-loader!./data/earthquakes.geojson';\ntype InputFormEventType = React.FormEvent<HTMLInputElement>;\nconst reader = new GeoJSON({featureProjection: 'EPSG:3857'});\n\nexport default function Heatmap(): JSX.Element {\n    const [blur, setBlur] = React.useState(15);\n    const [radius, setRadius] = React.useState(8);\n    return (\n        <React.Fragment>\n            <RMap className='example-map' initial={{center: fromLonLat([0, 0]), zoom: 1}}>\n                <RLayerStadia layer='toner' />\n                <RLayerHeatmap\n                    blur={blur}\n                    radius={radius}\n                    format={reader}\n                    url={earthquakes}\n                    weight={useCallback((f) => parseFloat(f.get('mag')) - 5, [])}\n                />\n            </RMap>\n            <div className='d-flex flex-row w-100'>\n                <div className='w-50 me-2'>\n                    <label htmlFor='blur'>Blur</label>\n                    <div className='w-100'>\n                        <input\n                            type='range'\n                            className='range-slider range-slider--primary w-100'\n                            min='0'\n                            max='50'\n                            id='blur'\n                            value={blur}\n                            onChange={useCallback(\n                                (e: InputFormEventType) => setBlur(parseInt(e.currentTarget.value)),\n                                []\n                            )}\n                        />\n                    </div>\n                </div>\n                <div className='w-50'>\n                    <label htmlFor='radius'>Radius</label>\n                    <div className='w-100'>\n                        <input\n                            type='range'\n                            className='range-slider range-slider--primary w-100'\n                            min='0'\n                            max='20'\n                            id='radius'\n                            value={radius}\n                            onChange={useCallback(\n                                (e: InputFormEventType) =>\n                                    setRadius(parseInt(e.currentTarget.value)),\n                                []\n                            )}\n                        />\n                    </div>\n                </div>\n            </div>\n        </React.Fragment>\n    );\n}\n"}}]);