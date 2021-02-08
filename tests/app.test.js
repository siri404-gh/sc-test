import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'

import App from '../src/app';

describe('App', () => {
    let container;
    const fakeResponse = {
      name: "Joni Baez",
      age: "32",
      address: "123, Charming Avenue"
    };
  
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeResponse),
      })
    );
    
    beforeEach(() => {
        container = document.createElement('section');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('Should render', async () => {
        await act(async () => {
            render(<App />, container);
        });
        expect(container).toMatchSnapshot();
    });

    it('Should set cones', async () => {
        
          await act(async () => {
            render(<App />, container);
          });
        
          expect(container).toMatchSnapshot();
        
          global.fetch.mockClear();
          delete global.fetch;
    });
});