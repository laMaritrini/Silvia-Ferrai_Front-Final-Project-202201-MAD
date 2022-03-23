import { AppDispatch } from '../store';
import { actionTypesProduct } from './actionTypes';
import * as api from '../../services/ticket.api';

export const loadProducts = () => (dispatch: AppDispatch) => {
    api.getProducts().then((resp) => {
        dispatch({
            type: actionTypesProduct.loadProducts,
            payload: resp.data,
        });
    });
};
