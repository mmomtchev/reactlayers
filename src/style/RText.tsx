import React from 'react';
import {Size} from 'ol/size';
import {Text, Style} from 'ol/style';

import {RContext} from '../context';
import {default as RBaseStyle, RBaseStyleProps} from './RBaseStyle';
import debug from '../debug';

/**
 * @propsfor RText
 */
export interface RTextProps extends RBaseStyleProps {
    /** The text that will be displayed */
    text: string;
    /** Font */
    font?: string;
    /** Horizontal offset */
    offsetx?: number;
    /** Vertical offset */
    offsety?: number;
    /** Overflow */
    overflow?: boolean;
    /** Scale */
    scale?: number | Size;
    /** Rotation */
    rotation?: number;
    /** Text alignment 'left' | 'right' | 'center' | 'start' | 'end' */
    textAlign?: string;
    /** Padding in pixels around the text, [ top, right, bottom, left ] */
    padding?: number[];
}

/**
 * Text element of a style
 *
 * Requires an `RStyle` context
 *
 * Provides an `RStyle` context - for `Fill` or `Stroke`
 */
export default class RText extends RBaseStyle<RTextProps> {
    static classProps = ['color', 'width', 'lineCap', 'lineJoin'];
    ol: Text;

    create(props: RTextProps): Text {
        this.classProps = RText.classProps;
        return new Text(props);
    }

    set(ol: Text): void {
        if (!this.context.style.setStroke)
            throw new Error('Parent element does not support a text');
        this.context.style.setText(ol);
    }

    render(): JSX.Element {
        return (
            <div>
                <RContext.Provider value={{...this.context, style: this.ol as unknown as Style}}>
                    {this.props.children}
                </RContext.Provider>
            </div>
        );
    }
}
