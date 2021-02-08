import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import cones from '../cones.json';

jest.mock('chart.js', () => ({
    Chart: jest.fn(),
  }))
  

import Chart from '../src/Chart';

describe('Chart', () => {
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
            render(<Chart />, container);
        });
        expect(container).toMatchSnapshot();
    });

    it('Should render with props', () => {
        act(() => {
            render(<Chart {...props} />, container);
        });
        expect(container).toMatchSnapshot();
    });
});