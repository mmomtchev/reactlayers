import React from 'react';
import {Feature, Map as Map} from 'ol';
import {VectorImage as LayerVectorImage} from 'ol/layer';
import {Vector as SourceVector} from 'ol/source';
import Geometry from 'ol/geom/Geometry';
import {FeatureLike} from 'ol/Feature';

import {OLFeatureClass, RContextType} from '../context';
import {default as RLayerBaseVector, RLayerBaseVectorProps} from './RLayerBaseVector';
import {default as RStyle} from '../style/RStyle';
import BaseObject from 'ol/Object';
import debug from '../debug';

/**
 * A vector layer
 *
 * Supports loading of features from external sources
 *
 * Requires an `RMap` context
 *
 * Provides a vector layer context for JSX-declared `RFeature`s
 */
export default class RLayerVectorImage<
    F extends OLFeatureClass = OLFeatureClass
> extends RLayerBaseVector<F, RLayerBaseVectorProps<F>> {
    ol: LayerVectorImage<SourceVector<OLFeatureClass>>;
    source: SourceVector<OLFeatureClass>;

    protected createSource(props: Readonly<RLayerBaseVectorProps<F>>): BaseObject[] {
        this.source = new SourceVector({
            features: this.props.features,
            url: this.props.url,
            format: this.props.format,
            loader: this.props.loader,
            wrapX: this.props.wrapX,
            strategy: this.props.strategy
        });
        this.ol = new LayerVectorImage({
            ...props,
            style: RStyle.getStyle(this.props.style),
            source: this.source
        });
        return [this.ol, this.source];
    }

    protected refresh(prevProps?: RLayerBaseVectorProps<F>): void {
        super.refresh(prevProps);
        if (prevProps?.url !== this.props.url) {
            this.source.setUrl(this.props.url);
            this.source.refresh();
        }
    }
}
