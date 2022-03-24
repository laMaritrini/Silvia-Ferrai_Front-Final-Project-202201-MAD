import { actionTypesProduct } from './actionTypes';
import { loadProducts } from './actionCreators';

jest.mock('../../services/ticket.api.ts', () => ({
    getProducts: () =>
        Promise.resolve({
            data: {
                id: 1,
                item: 'marghe',
                type: 'pizza',
                price: 23,
            },
        }),
}));

describe('Given actions creators ', () => {
    describe('When loadProducts is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await loadProducts()(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesProduct.loadProducts,
                payload: {
                    id: 1,
                    item: 'marghe',
                    type: 'pizza',
                    price: 23,
                },
            });
        });
    });
});
