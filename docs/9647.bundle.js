(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[9647],{69647:(r,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});const n="import React, {useCallback} from 'react';\r\nimport {fromLonLat} from 'ol/proj';\r\nimport GeoJSON from 'ol/format/GeoJSON';\r\nimport {Feature} from 'ol';\r\nimport 'ol/ol.css';\r\n\r\nimport {RMap, RLayerStamen, RLayerHeatmap} from 'rlayers';\r\n\r\n// Earthquakes of magnitude of at least 3.0 in 2020 (courtesy of USGS)\r\nimport earthquakes from '!!file-loader!./data/earthquakes.geojson';\r\ntype InputFormEventType = React.FormEvent<HTMLInputElement>;\r\nconst reader = new GeoJSON({featureProjection: 'EPSG:3857'});\r\n\r\nexport default function Heatmap(): JSX.Element {\r\n    const [blur, setBlur] = React.useState(15);\r\n    const [radius, setRadius] = React.useState(8);\r\n    return (\r\n        <React.Fragment>\r\n            <RMap className='example-map' center={fromLonLat([0, 0])} zoom={1}>\r\n                <RLayerStamen layer='toner' />\r\n                <RLayerHeatmap\r\n                    blur={blur}\r\n                    radius={radius}\r\n                    format={reader}\r\n                    url={earthquakes}\r\n                    weight={useCallback((f: Feature) => parseFloat(f.get('mag')) - 5, [])}\r\n                />\r\n            </RMap>\r\n            <div className='d-flex flex-row w-100'>\r\n                <div className='w-50 mr-2'>\r\n                    <label htmlFor='blur'>Blur</label>\r\n                    <div className='w-100'>\r\n                        <input\r\n                            type='range'\r\n                            className='range-slider range-slider--primary w-100'\r\n                            min='0'\r\n                            max='50'\r\n                            id='blur'\r\n                            value={blur}\r\n                            onChange={useCallback(\r\n                                (e: InputFormEventType) => setBlur(parseInt(e.currentTarget.value)),\r\n                                []\r\n                            )}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className='w-50'>\r\n                    <label htmlFor='radius'>Radius</label>\r\n                    <div className='w-100'>\r\n                        <input\r\n                            type='range'\r\n                            className='range-slider range-slider--primary w-100'\r\n                            min='0'\r\n                            max='20'\r\n                            id='radius'\r\n                            value={radius}\r\n                            onChange={useCallback(\r\n                                (e: InputFormEventType) =>\r\n                                    setRadius(parseInt(e.currentTarget.value)),\r\n                                []\r\n                            )}\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </React.Fragment>\r\n    );\r\n}\r\n"}}]);