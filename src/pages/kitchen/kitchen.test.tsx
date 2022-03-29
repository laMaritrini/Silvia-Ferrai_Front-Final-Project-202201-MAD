import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '../../utils/test.utils.js';
import KitchenPage from './kitchen';

describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {
        render(
            <MemoryRouter>
                <KitchenPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/COMANDAS/)).toBeInTheDocument();
    });
});
