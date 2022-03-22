import { UserI } from '../../interfaces/user';
import { actionTypesUser } from './actionTypes';
import { AppDispatch } from '../store';
import * as api from '../../services/user-api';
import { UserLoginI } from '../../interfaces/userLogin';

export const login = (userLogin: UserLoginI) => (dispatch: AppDispatch) => {
    api.login(userLogin).then((resp) => {
        dispatch({
            type: actionTypesUser.login,
            payload: resp,
        });
    });
};

export const logout = () => (dispatch: AppDispatch) => {
    dispatch({
        type: actionTypesUser.logout,
    });
};

export const register = (user: UserI) => (dispatch: AppDispatch) => {
    api.register(user).then((resp) => {
        dispatch({
            type: actionTypesUser.register,
            payload: resp,
        });
    });
};
