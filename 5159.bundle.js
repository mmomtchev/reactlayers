"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[5159],{5159:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r="import React from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport {FeatureLike} from 'ol/Feature';\nimport {Style} from 'ol/style';\nimport 'ol/ol.css';\n\nimport {RMap} from 'rlayers';\nimport RLayerVectorMBTiles from 'rlayers/layer/RLayerVectorMBTiles';\n\nimport * as style from './style';\n\n// This is an example for rendering directly from a remote MBTiles source over HTTP\n// It uses the `ol-mbtiles` plugin which you must install separately:\n//\n// npm install ol-mbtiles\n//\n// Be sure to check its documentation for more information:\n// https://github.com/mmomtchev/ol-mbtiles\n\nexport default function MBTiles(): JSX.Element {\n    return (\n        <div>\n            <RMap\n                width={'100%'}\n                height={'60vh'}\n                initial={{center: fromLonLat([2.364, 48.82]), zoom: 9}}\n            >\n                <RLayerVectorMBTiles\n                    url={'https://velivole.b-cdn.net/maptiler-osm-2017-07-03-v3.6.1-europe.mbtiles'}\n                    layers={['transportation', 'water', 'waterway', 'landuse', 'place', 'boundary']}\n                    style={function (feature: FeatureLike): Style {\n                        switch (feature.get('layer')) {\n                            case 'water':\n                            case 'waterway':\n                                return style.waterStyle;\n                            case 'transportation':\n                                return style.roadStyle(feature);\n                            case 'landuse':\n                                return style.buildingStyle;\n                            case 'boundary':\n                                return style.boundaryStyle;\n                            case 'place':\n                                return style.placeStyle(feature);\n                            default:\n                                return null as unknown as Style;\n                        }\n                    }}\n                />\n            </RMap>\n            <p>\n                The data comes from a huge 30GB <code>.mbtiles</code> file and initial loading times\n                may be slow due to the CDN provider not keeping it in its cache\n            </p>\n        </div>\n    );\n}\n"}}]);