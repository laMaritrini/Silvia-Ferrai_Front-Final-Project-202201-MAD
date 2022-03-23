import React from 'react';
import { screen, render } from '../../utils/test.utils';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from './loginPage';

describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/LOGIN/i)).toBeInTheDocument();
    });
});
