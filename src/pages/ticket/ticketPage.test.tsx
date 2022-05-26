import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { screen, render } from '../../utils/test.utils.js';
import TicketPage from './ticketPage';

describe('Given the ticket component', () => {
    const preloadedState = {
        ticket: [
            {
                _id: '623c8cbf33a326bd7c4ad369',
                items: [
                    {
                        uds: 2,
                        article: {
                            id: 7,
                            item: 'Caprese',
                            type: 'ensalada',
                            price: 7.5,
                        },
                    },
                ],
            },
        ],
    };
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/ticket/623c8cbf33a326bd7c4ad369']}>
                <Routes
                    location={{ pathname: '/ticket/623c8cbf33a326bd7c4ad369' }}
                >
                    <Route path="ticket/:id" element={<TicketPage />} />
                </Routes>
            </MemoryRouter>,
            { preloadedState }
        );
    });
    test('it should render', async () => {
        expect(screen.getByText(/caprese/i)).toBeInTheDocument();
    });
});

describe('Given the ticketPage page component', () => {
    test('Then the ticketPage title should be rendered', () => {
        render(
            <MemoryRouter>
                <TicketPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/Article/i)).toBeInTheDocument();
        expect(screen.getByText(/PIZZA/)).toBeInTheDocument();
    });
});
