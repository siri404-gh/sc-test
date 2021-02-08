import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Risk from '../src/risk-level-selector';

describe('Risk', () => {
    let container;
    const props = {
        minRiskLevel: 3,
        maxRiskLevel: 10,
        onChangeRiskLevel: jest.fn(),
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
            render(<Risk />, container);
        });
        expect(container).toMatchSnapshot();
    });

    it('Should render with props', () => {
        act(() => {
            render(<Risk {...props} />, container);
        });
        expect(container).toMatchSnapshot();
    });

    xit('Should call onChangeRiskLevel when risk is changed', () => {
        act(() => {
            render(<Risk {...props} />, container);
        });
        act(() => {
            const select = Array.from(container.querySelectorAll('select'))[0];
            select.dispatchEvent(new Event('change'), { target: { value: '5' } });
        });
        expect(props.onChangeRiskLevel).toHaveBeenCalledWith(5);
    });
});