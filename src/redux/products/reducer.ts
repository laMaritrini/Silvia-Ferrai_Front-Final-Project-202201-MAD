import { AnyAction } from 'redux';
import { ArticleI } from '../../interfaces/ticket';
import { actionTypesProduct } from './actionTypes';

export function productsReducer(state: ArticleI[] = [], action: AnyAction) {
    if (action.type === actionTypesProduct.loadProducts) {
        return [...action.payload];
    } else {
        return state;
    }
}
