(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[3683],{23683:(r,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>t});const t="import React from 'react';\r\nimport {fromLonLat} from 'ol/proj';\r\nimport {\r\n    altShiftKeysOnly,\r\n    platformModifierKeyOnly,\r\n    shiftKeyOnly,\r\n    altKeyOnly,\r\n    never,\r\n    doubleClick\r\n} from 'ol/events/condition';\r\nimport {Point} from 'ol/geom';\r\nimport GeometryType from 'ol/geom/GeometryType';\r\nimport 'ol/ol.css';\r\n\r\nimport monument from './svg/eiffel.svg';\r\nimport {RMap, ROSM, RInteraction, RLayerVector, RStyle, RFeature} from 'rlayers';\r\n\r\nconst TourEiffel = fromLonLat([2.294, 48.858]);\r\nconst TourEiffelPoint = new Point(TourEiffel);\r\n\r\nexport default function Interactions(): JSX.Element {\r\n    const [selected, setSelected] = React.useState(false);\r\n    return (\r\n        <React.Fragment>\r\n            <RMap className='example-map' center={fromLonLat([2.364, 48.82])} zoom={11}>\r\n                <ROSM />\r\n\r\n                <RLayerVector>\r\n                    <RStyle.RStyle>\r\n                        <RStyle.RIcon src={monument} />\r\n                    </RStyle.RStyle>\r\n                    <RFeature geometry={TourEiffelPoint} />\r\n                </RLayerVector>\r\n\r\n                <RLayerVector\r\n                    onChange={React.useCallback((e) => {\r\n                        // On every chage, check if there is a feature covering the Eiffel Tower\r\n                        if (e.target?.forEachFeatureAtCoordinateDirect)\r\n                            setSelected(\r\n                                e.target.forEachFeatureAtCoordinateDirect(TourEiffel, () => true)\r\n                            );\r\n                    }, [])}\r\n                >\r\n                    {/* This is the style used for the drawn polygons */}\r\n                    <RStyle.RStyle>\r\n                        <RStyle.RStroke color='#0000ff' width={3} />\r\n                        <RStyle.RFill color='rgba(0, 0, 0, 0.75)' />\r\n                    </RStyle.RStyle>\r\n\r\n                    <RInteraction.RDraw\r\n                        type={'Polygon' as GeometryType}\r\n                        condition={shiftKeyOnly}\r\n                        freehandCondition={altShiftKeysOnly}\r\n                    />\r\n\r\n                    <RInteraction.RDraw\r\n                        type={'Circle' as GeometryType}\r\n                        condition={altKeyOnly}\r\n                        freehandCondition={never}\r\n                    />\r\n\r\n                    <RInteraction.RModify\r\n                        condition={platformModifierKeyOnly}\r\n                        deleteCondition={React.useCallback(\r\n                            (e) => platformModifierKeyOnly(e) && doubleClick(e),\r\n                            []\r\n                        )}\r\n                    />\r\n                </RLayerVector>\r\n            </RMap>\r\n            <div>\r\n                <p className='p-0 m-0'>\r\n                    Hold <em>Shift</em> and click without dragging for a regular polygon\r\n                </p>\r\n                <p className='p-0 m-0'>\r\n                    Hold <em>Shift</em> and <em>Alt</em> and drag for a freehand polygon\r\n                </p>\r\n                <p className='p-0 m-0'>\r\n                    Hold <em>Alt</em> and click without dragging for a circle\r\n                </p>\r\n                <p className='p-0 m-0'>\r\n                    Hold <em>Ctrl / &#x2318;</em> and drag to move/add a vertex\r\n                </p>\r\n                <p className='p-0 m-0'>\r\n                    Hold <em>Ctrl / &#x2318;</em> and double click to remove a vertex\r\n                </p>\r\n            </div>\r\n            <div className='mx-0 mt-1 mb-3 p-1 w-100 jumbotron shadow shadow'>\r\n                <p>Currently the Eiffel Tower is{selected ? '' : ' not'} covered</p>\r\n            </div>\r\n        </React.Fragment>\r\n    );\r\n}\r\n"}}]);