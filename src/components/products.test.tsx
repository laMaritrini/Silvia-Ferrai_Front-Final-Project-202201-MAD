import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../utils/test.utils.js';
import Products from './products';

describe('Given the UserForm Component', () => {
    describe('When it is called', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <Products />
                </MemoryRouter>
            );

            expect(screen.getByText(/PIZZA/i));
        });
    });
});
