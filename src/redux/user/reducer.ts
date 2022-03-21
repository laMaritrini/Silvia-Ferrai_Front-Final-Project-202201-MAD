import { actionTypesUser } from './actionTypes';
import { AnyAction } from 'redux';

const initialState = {
    token: '',
    userName: '',
    id: '',
    isLogged: false,
};

export function userReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case actionTypesUser.login:
            state = { ...action.payload, isLogged: true };
            return state;
        case actionTypesUser.logout:
            state = initialState;
            return state;
        default:
            return state;
    }
}
