import { TicketI } from '../../interfaces/ticket';
import { actionTypesTicket } from './actionTypes';
import { ticketReducer } from './reducer';

let initialState: TicketI[] = [];

describe('Given the userReducer', () => {
    test('userReducer create Ticket', () => {
        const newState = ticketReducer(initialState, {
            type: actionTypesTicket.createTicket,
            payload: { id: 'qwerty', items: [] },
        });

        expect(newState).toEqual([{ id: 'qwerty', items: [] }]);
    });

    test('userReducer delete Ticket', () => {
        const newState = ticketReducer(initialState, {
            type: actionTypesTicket.deleteTicket,
            payload: { id: 'qwerty', items: [] },
        });

        expect(newState).toEqual([]);
    });

    test('userReducer remove product form Ticket', () => {
        const newState = ticketReducer(initialState, {
            type: actionTypesTicket.removeProductFromTicket,
            payload: { id: 'qwerty', items: [] },
        });

        expect(newState).toEqual([]);
    });
    test('userReducer load Tickets', () => {
        const newState = ticketReducer(initialState, {
            type: actionTypesTicket.loadAllTickets,
            payload: [
                { id: 'qwerty', items: [] },
                { id: 'qwerty', items: [] },
            ],
        });

        expect(newState).toEqual([
            { id: 'qwerty', items: [] },
            { id: 'qwerty', items: [] },
        ]);
    });
    test('userReducer update', () => {
        const newState = ticketReducer(initialState, {
            type: actionTypesTicket.updateTicket,
            payload: [
                {
                    id: 'qwerty',
                    items: [
                        {
                            uds: 1,
                            article: {
                                product: 1,
                            },
                        },
                    ],
                },
            ],
        });

        expect(newState).toEqual([
            {
                id: 'qwerty',
                items: [
                    {
                        uds: 1,
                        article: {
                            product: 1,
                        },
                    },
                ],
            },
        ]);
    });
});
