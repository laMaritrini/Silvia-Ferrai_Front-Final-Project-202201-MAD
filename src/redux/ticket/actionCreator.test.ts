import { actionTypesTicket } from './actionTypes';
import {
    createNewTicket,
    deleteTicket,
    getAllTickets,
    getTicket,
    removeProductIntoTicket,
    updateProductIntoTicket,
} from './actionCreator';

jest.mock('../../services/ticket.api', () => ({
    getAllTickets: () =>
        Promise.resolve({
            data: {
                _id: 'sdsdsdsd',
                test: 'test',
            },
        }),

    getTicket: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
    deleteTicket: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
    updateProductTicket: () =>
        Promise.resolve({
            data: {
                _id: 'sdsdsdsd',
            },
        }),
    deleteProductTicket: () =>
        Promise.resolve({
            data: {
                _id: 'sdsdsdsd',
            },
        }),
}));
const token: string = 'afdfsdfsafdaaga';
const id: string = 'id';
const idItem: number = 2;

describe('Given actions creators ', () => {
    describe('When getAllTickets is called', () => {
        test('Dispatch, getAllTickets is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await getAllTickets()(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesTicket.loadAllTickets,
                payload: {
                    _id: 'sdsdsdsd',
                    test: 'test',
                },
            });
        });
    });

    describe('When getTicket is called', () => {
        test('Dispatch, getTicket is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await getTicket(id, token)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesTicket.getTicket,
                payload: {
                    test: 'test',
                },
            });
        });
    });

    describe('When createNewTicket is called', () => {
        test('Dispatch, createNewTicket is called with successful action', async () => {
            const dispatchMock = jest.fn();
            await createNewTicket({
                _id: '',
                items: [],
            })(dispatchMock);
            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesTicket.createTicket,
                payload: {
                    _id: '',
                    items: [],
                },
            });
        });
    });
    describe('When createNewTicket is called', () => {
        test('Dispatch, createNewTicket is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await deleteTicket(id, token)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesTicket.deleteTicket,
                payload: {
                    test: 'test',
                },
            });
        });
    });
    describe('When updateProductIntoTicket is called', () => {
        test('Dispatch, updateProductIntoTicket is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await updateProductIntoTicket(id, idItem, token)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesTicket.updateTicket,
                payload: {
                    _id: 'sdsdsdsd',
                },
            });
        });
    });
    describe('When removeProductIntoTicket is called', () => {
        test('Dispatch, removeProductIntoTicket is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await removeProductIntoTicket(id, token)(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesTicket.removeProductFromTicket,
                payload: {
                    _id: 'sdsdsdsd',
                },
            });
        });
    });
});
