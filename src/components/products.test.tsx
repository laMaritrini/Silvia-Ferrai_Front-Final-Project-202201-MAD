import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen, fireEvent } from '../utils/test.utils.js';
import Products from './products';

describe('Given the filter method', () => {
    const preloadedState = {
        product: [
            {
                id: 1,
                item: 'Margherita-test',
                type: 'pizza',
                price: 9.0,
            },
            {
                id: 2,
                item: 'Marinara-test',
                type: 'pizza',
                price: 8.0,
            },
            {
                id: 7,
                item: 'Caprese-test',
                type: 'ensalada',
                price: 7.5,
            },

            {
                id: 9,
                item: 'Burrata-test',
                type: 'ensalada',
                price: 12.0,
            },
            {
                id: 11,
                item: 'Tiramisù-test',
                type: 'postre',
                price: 5.0,
            },
            {
                id: 12,
                item: 'Tarta-test',
                type: 'postre',
                price: 4.5,
            },
            {
                id: 14,
                item: 'Espresso-test',
                type: 'café',
                price: 1.2,
            },
            {
                id: 15,
                item: 'Cortado-test',
                type: 'café',
                price: 1.2,
            },
            {
                id: 17,
                item: 'CocaCola-test',
                type: 'refresco',
                price: 2.5,
            },
            {
                id: 18,
                item: 'CocaZero-test',
                type: 'refresco',
                price: 2.5,
            },
            {
                id: 22,
                item: 'Lambrusco-test',
                type: 'vino',
                price: 17.5,
            },
            {
                id: 23,
                item: 'Albariño-test',
                type: 'vino',
                price: 20.5,
            },
            {
                id: 26,
                item: 'Caña-test',
                type: 'cerveza',
                price: 2.5,
            },
            {
                id: 27,
                item: 'doble-test',
                type: 'cerveza',
                price: 3.5,
            },
        ],
    };
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Products />
            </MemoryRouter>,
            { preloadedState }
        );
    });

    test('should render', async () => {
        const btn = await screen.findByAltText(/vino/i);
        fireEvent.click(btn);

        expect(await screen.findByText(/Lambrusco-test/i)).toBeInTheDocument();

        expect(await screen.findByText(/Albariño-test/i)).toBeInTheDocument();
        fireEvent.keyPress(btn, { key: 'Enter', charCode: 13 });
    });

    describe('When the cafes are clicked', () => {
        test('Then the cafes should be rendered.', async () => {
            const btn = await screen.findByAltText(/café/i);
            fireEvent.click(btn);

            expect(
                await screen.findByText(/Espresso-test/i)
            ).toBeInTheDocument();
            fireEvent.keyPress(btn, { key: 'Enter', charCode: 13 });

            expect(
                await screen.findByText(/Cortado-test/i)
            ).toBeInTheDocument();
        });
    });
    describe('When the pizza are clicked', () => {
        test('Then the pizza should be rendered.', async () => {
            const btn = await screen.findByAltText(/pizza/i);
            fireEvent.click(btn);

            expect(
                await screen.findByText(/margherita-test/i)
            ).toBeInTheDocument();

            fireEvent.keyPress(btn, { key: 'Enter', charCode: 13 });

            expect(
                await screen.findByText(/Marinara-test/i)
            ).toBeInTheDocument();
        });
    });
    describe('When the salad are clicked', () => {
        test('Then the salad should be rendered.', async () => {
            const btn = await screen.findByAltText(/salad/i);
            fireEvent.click(btn);

            expect(
                await screen.findByText(/burrata-test/i)
            ).toBeInTheDocument();

            fireEvent.keyPress(btn, { key: 'Enter', charCode: 13 });

            expect(
                await screen.findByText(/caprese-test/i)
            ).toBeInTheDocument();
        });
    });
    describe('When the postre are clicked', () => {
        test('Then the postre should be rendered.', async () => {
            const btn = await screen.findByAltText(/postre/i);
            fireEvent.click(btn);

            expect(
                await screen.findByText(/Tiramisù-test/i)
            ).toBeInTheDocument();

            fireEvent.keyPress(btn, { key: 'Enter', charCode: 13 });

            expect(await screen.findByText(/Tarta-test/i)).toBeInTheDocument();
        });
    });
    describe('When the refresco are clicked', () => {
        test('Then the refresco should be rendered.', async () => {
            const btn = await screen.findByAltText(/refresco/i);
            fireEvent.click(btn);

            expect(
                await screen.findByText(/cocaCola-test/i)
            ).toBeInTheDocument();

            fireEvent.keyPress(btn, { key: 'Enter', charCode: 13 });

            expect(
                await screen.findByText(/CocaZero-test/i)
            ).toBeInTheDocument();
        });
    });
    describe('When the cerveza are clicked', () => {
        test('Then the cerveza should be rendered.', async () => {
            const btn = await screen.findByAltText(/cerveza/i);
            fireEvent.click(btn);

            expect(await screen.findByText(/caña-test/i)).toBeInTheDocument();

            fireEvent.keyPress(btn, { key: 'Enter', charCode: 13 });

            expect(await screen.findByText(/doble-test/i)).toBeInTheDocument();
        });
    });
});

describe('Given the Products Component', () => {
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
