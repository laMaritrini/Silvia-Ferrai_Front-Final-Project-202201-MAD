import { AnyAction } from 'redux';
import { actionTypesUser } from './actionTypes';

export interface InitialStateI {
    token: string;
    username: string;
    id: string;
    isLogged?: boolean;
}

const initialState = {
    token: '',
    username: '',
    id: '',
    isLogged: false,
};

export function userReducer(
    state: InitialStateI = initialState,
    action: AnyAction
) {
    switch (action.type) {
        case actionTypesUser.register:
            return { ...action.payload };
        case actionTypesUser.login:
            return { ...action.payload, isLogged: true };
        case actionTypesUser.logout:
            return initialState;
        default:
            return state;
    }
}
