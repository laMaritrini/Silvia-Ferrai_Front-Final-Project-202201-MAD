/* eslint-disable default-param-last */
import { AnyAction } from 'redux';
import { actionTypesUser } from './actionTypes';

interface InitialStateI {
    token: string;
    username: string;
    id: string;
}

const initialState = {
    token: '',
    username: '',
    id: '',
};

export function userReducer(
    state: InitialStateI = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case actionTypesUser.register:
            return { ...action.payload };
        case actionTypesUser.login:
            return { ...action.payload };
        case actionTypesUser.logout:
            return initialState;
        default:
            return state;
    }
}
