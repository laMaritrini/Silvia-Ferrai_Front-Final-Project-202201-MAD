import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from './utils/test.utils.js';
import { store } from './redux/store';
import App from './App';

test('renders learn react link', () => {
    const { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText(/LOGIN/i)).toBeInTheDocument();
});
