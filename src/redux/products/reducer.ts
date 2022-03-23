import { AnyAction } from 'redux';
import { ArticleI } from '../../interfaces/ticket';
import { actionTypesProduct } from './actionTypes';

export function productsReducer(state: ArticleI[] = [], action: AnyAction) {
    switch (action.type) {
        case actionTypesProduct.loadProducts:
            return [...action.payload];

        default:
            return state;
    }
}
