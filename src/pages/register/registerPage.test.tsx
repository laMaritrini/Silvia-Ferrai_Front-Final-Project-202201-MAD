import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '../../utils/test.utils.js';
import RegisterPage from './registerPage';

describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {
        render(
            <MemoryRouter>
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/Sala/)).toBeInTheDocument();
    });
});
