import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '../../utils/test.utils.js';
import KitchenPage from './kitchen';

describe('Given the map method', () => {
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
                    {
                        uds: 1,
                        article: {
                            id: 17,
                            item: 'Marinara-test',
                            type: 'refresco',
                            price: 2.5,
                        },
                    },
                    {
                        uds: 1,
                        article: {
                            id: 15,
                            item: 'Cortado',
                            type: 'café',
                            price: 1.2,
                        },
                    },
                ],
            },
        ],
    };
    beforeEach(() => {
        render(
            <MemoryRouter>
                <KitchenPage />
            </MemoryRouter>,
            { preloadedState }
        );
    });

    test('it should render the items', async () => {
        expect(await screen.getByText(/Marinara-test/i)).toBeInTheDocument();
    });
});

describe('Given the kitchenPage page component', () => {
    test('The the kitchenPage title should be rendered', () => {
        render(
            <MemoryRouter>
                <KitchenPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/COMANDAS/)).toBeInTheDocument();
    });
});
