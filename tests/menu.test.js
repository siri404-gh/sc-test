import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'

import Menu from '../src/menu';

describe('Menu', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('section');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('Should render', () => {
        act(() => {
            render(<BrowserRouter>
                <Menu />
            </BrowserRouter>, container);
        });
        expect(container).toMatchSnapshot();
    });
});