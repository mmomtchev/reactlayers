(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[5574],{35574:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});const o="import React from 'react';\nimport {fromLonLat, toLonLat} from 'ol/proj';\nimport {boundingExtent} from 'ol/extent';\nimport {DragBoxEvent} from 'ol/interaction/DragBox';\nimport {Point} from 'ol/geom';\nimport {Feature} from 'ol';\nimport {Coordinate} from 'ol/coordinate';\nimport {shiftKeyOnly} from 'ol/events/condition';\nimport 'ol/ol.css';\n\nimport monument from './svg/monument.svg';\nimport {RMap, ROSM, RInteraction, RLayerVector, RStyle, RFeature} from 'rlayers';\n\nexport const coords: Record<string, Coordinate> = {\n    'Arc de Triomphe': [2.295, 48.8737],\n    \"Place d'Italie\": [2.355, 48.831],\n    Bastille: [2.369, 48.853],\n    'Tour Eiffel': [2.294, 48.858],\n    Montmartre: [2.342, 48.887]\n};\nconst coordsToString = (coords) => `${coords[1].toFixed(3)}:${coords[0].toFixed(3)}`;\n\nexport default function Interactions(): JSX.Element {\n    const [startDragBox, setStartDragBox] = React.useState(null as Coordinate);\n    const [endDragBox, setEndDragBox] = React.useState(null as Coordinate);\n    const [msg, setMsg] = React.useState(\n        '<p>Hold shift to select an area or drag and drop the monuments</p>'\n    );\n    // The features must be part of the state as they will be subject to change\n    const [features] = React.useState(() =>\n        Object.keys(coords).map(\n            (f) =>\n                new Feature({\n                    geometry: new Point(fromLonLat(coords[f])),\n                    name: f\n                })\n        )\n    );\n    const vectorRef = React.useRef() as React.RefObject<RLayerVector>;\n    return (\n        <React.Fragment>\n            <RMap className='example-map' center={fromLonLat([2.364, 48.82])} zoom={11}>\n                <ROSM />\n\n                <RLayerVector ref={vectorRef}>\n                    <RStyle.RStyle>\n                        <RStyle.RIcon src={monument} />\n                    </RStyle.RStyle>\n                    {features.map((f, i) => (\n                        <RFeature key={i} feature={f} />\n                    ))}\n                </RLayerVector>\n\n                <RInteraction.RDragBox\n                    condition={shiftKeyOnly}\n                    onBoxStart={React.useCallback((e: DragBoxEvent) => {\n                        setStartDragBox(e.coordinate);\n                        setEndDragBox(null);\n                    }, [])}\n                    onBoxEnd={React.useCallback(\n                        (e: DragBoxEvent) => {\n                            setEndDragBox(e.coordinate);\n                            const selected = [];\n                            vectorRef.current.source.forEachFeatureInExtent(\n                                boundingExtent([startDragBox, e.coordinate]),\n                                (f) => selected.push(f.get('name')) && false\n                            );\n                            setMsg(\n                                `You selected <strong>${\n                                    selected.join(', ') || 'no monuments'\n                                }</strong>`\n                            );\n                        },\n                        [startDragBox, vectorRef]\n                    )}\n                />\n\n                <RInteraction.RTranslate\n                    onTranslateEnd={React.useCallback((e) => {\n                        const f = e.features.item(0);\n                        const coords = toLonLat((f.getGeometry() as Point).getFirstCoordinate());\n                        setMsg(\n                            `You placed <strong>${f.get('name')}</strong> at ${coordsToString(\n                                coords\n                            )}`\n                        );\n                    }, [])}\n                />\n            </RMap>\n            <div\n                className='mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow shadow'\n                dangerouslySetInnerHTML={{__html: msg}}\n            />\n        </React.Fragment>\n    );\n}\n"}}]);