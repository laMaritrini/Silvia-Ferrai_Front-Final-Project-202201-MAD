import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '../../utils/test.utils.js';
import CloseTicketPage from './closeTicket';

describe('Given the login page component', () => {
    test('Then the login title should be rendered', () => {
        render(
            <MemoryRouter>
                <CloseTicketPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/TOT/)).toBeInTheDocument();
    });
});
