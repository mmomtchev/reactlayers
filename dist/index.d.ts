import 'ol/ol.css';
export { MapBrowserEvent } from 'ol';
export { ReactLayersBase } from './Event';
export { default as Map, MapProps, MapContext } from './Map';
export { default as Layer, LayerProps, LayerContext } from './layer/Layer';
export { default as LayerTile, LayerTileProps } from './layer/LayerTile';
export { default as LayerVector, LayerVectorProps } from './layer/LayerVector';
export { default as OSM, OSMProps } from './layer/OSM';
export { default as LayerWMTS, LayerWMTSProps } from './layer/LayerWMTS';
import { default as ScaleLine } from './control/ScaleLine';
import { default as Attribution } from './control/Attribution';
import { default as Zoom } from './control/Zoom';
import { default as Rotate } from './control/Rotate';
import { default as Custom } from './control/Custom';
import { default as Layers } from './control/Layers';
export declare const Control: {
    ScaleLine: typeof ScaleLine;
    Attribution: typeof Attribution;
    Zoom: typeof Zoom;
    Rotate: typeof Rotate;
    Layers: typeof Layers;
    Custom: typeof Custom;
};
export { default as Feature } from './Feature';
export { default as Overlay } from './Overlay';
export { default as Popup } from './Popup';
//# sourceMappingURL=index.d.ts.map