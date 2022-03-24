import React from 'react';
import { screen, render } from '../../utils/test.utils';
import { MemoryRouter } from 'react-router-dom';
import RegisterPage from './registerPage';

describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {
        render(
            <MemoryRouter>
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/REGISTER/)).toBeInTheDocument();
    });
});
