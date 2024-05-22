import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {Map} from 'ol';

import {RMap, RContext, RControl, ROSM} from 'rlayers';
import * as common from './common';

const RControlButton = <button>X</button>;

describe('<RControl>', () => {
    it('should render all the RControls', async () => {
        const comp = (collapsed) => (
            <RMap {...common.mapProps} noDefaultControls={true}>
                <RControl.RLayers>
                    <ROSM properties={{label: 'layer1'}} />
                    <ROSM properties={{label: 'layer2'}} />
                </RControl.RLayers>
                <RControl.RScaleLine />
                <RControl.RAttribution collapsed={collapsed} />
                <RControl.RZoom />
                <RControl.RZoomSlider />
                <RControl.RMousePosition />
                <RControl.RZoomToExtent />
                <RControl.RCustom className='example-RControl'>
                    <RContext.Consumer>
                        {({map}) => {
                            expect(map).toBeInstanceOf(Map);
                            return RControlButton;
                        }}
                    </RContext.Consumer>
                </RControl.RCustom>
                <RControl.RRotate />
                <RControl.RFullScreen />
                <RControl.RFullScreen
                    className='example-fullscreen'
                    source='fullscreen'
                    label='&#x6269;'
                    labelActive='&#x564f;'
                />
                <RControl.ROverviewMap
                    collapsed={collapsed}
                    className='ol-overviewmap example-overview'
                >
                    <ROSM />
                </RControl.ROverviewMap>
            </RMap>
        );
        const {container, getByLabelText, rerender, unmount} = render(comp(false));
        expect(container.innerHTML).toMatchSnapshot();

        const button = container.querySelector('span>button');
        if (button === null) throw new Error('no button');
        fireEvent.click(button);
        rerender(comp(true));

        const radio = getByLabelText('layer2') as HTMLInputElement;
        fireEvent.click(radio);
        expect(container.innerHTML).toMatchSnapshot();
        unmount();
    });
    it('should throw an error without a Map', () => {
        // eslint-disable-next-line no-console
        const err = console.error;
        // eslint-disable-next-line no-console
        console.error = () => undefined;
        expect(() => render(<RControl.RZoom />)).toThrow('must be part of');
        // eslint-disable-next-line no-console
        console.error = err;
    });
    it('should render the layers RControl with a custom element', async () => {
        const {container} = render(
            <RMap {...common.mapProps}>
                <RControl.RLayers element={RControlButton}>
                    <ROSM />
                </RControl.RLayers>
            </RMap>
        );
        expect(container.innerHTML).toMatchSnapshot();
    });
});
