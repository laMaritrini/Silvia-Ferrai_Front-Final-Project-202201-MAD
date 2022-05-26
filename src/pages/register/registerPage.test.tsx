import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '../../utils/test.utils.js';
import RegisterPage from './registerPage';

describe('Given the user page component', () => {
    test('Then the user title should be rendered', () => {
        render(
            <MemoryRouter>
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/Sala/)).toBeInTheDocument();
    });
});
