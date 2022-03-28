import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '../../utils/test.utils.js';
import TicketPage from './ticketPage';

describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {
        render(
            <MemoryRouter>
                <TicketPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/Article/i)).toBeInTheDocument();
        expect(screen.getByText(/PIZZA/)).toBeInTheDocument();
    });
});
