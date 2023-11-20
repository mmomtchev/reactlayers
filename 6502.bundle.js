"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[6502],{6502:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a="import React, {useCallback} from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport GeoJSON from 'ol/format/GeoJSON';\nimport {createEmpty, extend, getHeight, getWidth} from 'ol/extent';\nimport 'ol/ol.css';\n\n// This example illustrates the versatility of a dynamic RStyle\n// It also makes use of its caching abilities\nimport {RMap, RLayerCluster} from 'rlayers';\nimport {RStyle, RFill, RStroke, RRegularShape, RCircle, RText} from 'rlayers/style';\nimport RLayerStadia from 'rlayers/layer/RLayerStadia';\n\n// Earthquakes of magnitude of at least 3.0 in 2020 (courtesy of USGS)\n// (this won't work in CodePen)\nimport earthquakes from '!!file-loader!./data/earthquakes.geojson';\ntype InputFormEventType = React.FormEvent<HTMLInputElement>;\nconst reader = new GeoJSON({featureProjection: 'EPSG:3857'});\n\nconst colorBlob = (size) =>\n    'rgba(' + [255, 153, 0, Math.min(0.8, 0.4 + Math.log(size / 10) / 20)].join() + ')';\nconst radiusStar = (feature) => Math.round(5 * (parseFloat(feature.get('mag')) - 2.5));\n\n// This returns the north/south east/west extent of a group of features\n// divided by the resolution\nconst extentFeatures = (features, resolution) => {\n    const extent = createEmpty();\n    for (const f of features) extend(extent, f.getGeometry().getExtent());\n    return Math.round(0.25 * (getWidth(extent) + getHeight(extent))) / resolution;\n};\n\nexport default function Cluster(): JSX.Element {\n    const [distance, setDistance] = React.useState(20);\n    const [selected, setSelected] = React.useState<string>('Click a cluster for details');\n    const earthquakeLayer = React.useRef();\n    return (\n        <React.Fragment>\n            <RMap className='example-map' initial={{center: fromLonLat([0, 0]), zoom: 1}}>\n                <RLayerStadia layer='stamen_toner' />\n                <RLayerCluster\n                    ref={earthquakeLayer}\n                    distance={distance}\n                    format={reader}\n                    url={earthquakes}\n                    onClick={React.useCallback((e) => {\n                        const features = e.target.get('features') ?? [];\n                        setSelected(\n                            `${features.length} earthquakes in this location, ` +\n                                `magnitudes are ${features.map((eq) => eq.get('mag')).join(', ')}`\n                        );\n                    }, [])}\n                >\n                    <RStyle\n                        cacheSize={1024}\n                        cacheId={useCallback(\n                            (feature, resolution) =>\n                                // This is the hashing function, it takes a feature as its input\n                                // and returns a string\n                                // It must be dependant of the same inputs as the rendering function\n                                feature.get('features').length > 1\n                                    ? '#' + extentFeatures(feature.get('features'), resolution)\n                                    : '$' + radiusStar(feature.get('features')[0]),\n                            []\n                        )}\n                        render={useCallback((feature, resolution) => {\n                            // This is the rendering function\n                            // It has access to the cluster which appears as a single feature\n                            // and has a property with an array of all the features that make it\n                            const size = feature.get('features').length;\n                            // This is the size (number of features) of the cluster\n                            if (size > 1) {\n                                // Render a blob with a number\n                                const radius = extentFeatures(feature.get('features'), resolution);\n                                return (\n                                    // A dynamic style should return a fragment instead of a\n                                    // full-blown RStyle - returning a full RStyle here\n                                    // will simply replace the style used by the vector layer\n                                    // with a fixed one\n                                    <React.Fragment>\n                                        <RCircle radius={radius}>\n                                            <RFill color={colorBlob(size)} />\n                                        </RCircle>\n                                        <RText text={size.toString()}>\n                                            <RFill color='#fff' />\n                                            <RStroke color='rgba(0, 0, 0, 0.6)' width={3} />\n                                        </RText>\n                                    </React.Fragment>\n                                );\n                            }\n                            // We have a single feature cluster\n                            const unclusteredFeature = feature.get('features')[0];\n                            // Render a star\n                            return (\n                                <RRegularShape\n                                    radius1={radiusStar(unclusteredFeature)}\n                                    radius2={3}\n                                    points={5}\n                                    angle={Math.PI}\n                                >\n                                    <RFill color='rgba(255, 153, 0, 0.8)' />\n                                    <RStroke color='rgba(255, 204, 0, 0.2)' width={1} />\n                                </RRegularShape>\n                            );\n                        }, [])}\n                    />\n                </RLayerCluster>\n            </RMap>\n            <div className='my-3 w-100'>\n                <label htmlFor='distance'>Clustering distance</label>\n                <div className='w-100'>\n                    <input\n                        type='range'\n                        className='range-slider range-slider--primary w-100'\n                        min='5'\n                        max='50'\n                        id='distance'\n                        value={distance}\n                        onChange={useCallback(\n                            (e: InputFormEventType) => setDistance(parseInt(e.currentTarget.value)),\n                            []\n                        )}\n                    />\n                </div>\n            </div>\n            <div>{selected}</div>\n        </React.Fragment>\n    );\n}\n"}}]);