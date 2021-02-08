import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import cones from '../cones.json';

// jest.mock('../src/utils', () => ({
//     drawTable: jest.fn(),
//     calculateTimeSeries: jest.fn(),
// }));

import Table from '../src/Table';

describe('Table', () => {
    let container;
    const props = {
        cones,
        riskLevel: 10,
        initialSum: 1000,
    };

    beforeEach(() => {
        container = document.createElement('section');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('Should render without props', () => {
        act(() => {
            render(<Table />, container);
        });
        expect(container).toMatchSnapshot();
    });

    it('Should render with props', () => {
        act(() => {
            render(<Table {...props} />, container);
        });
        expect(container).toMatchSnapshot();
    });
});