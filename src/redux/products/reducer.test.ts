import { ArticleI } from '../../interfaces/ticket';
import { productsReducer } from './reducer';
import { actionTypesProduct } from './actionTypes';

let initialState: ArticleI[] = [];

describe('Given the productsReducer', () => {
    test('userReducer create Ticket', () => {
        const newState = productsReducer(initialState, {
            type: actionTypesProduct.loadProducts,
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
});
