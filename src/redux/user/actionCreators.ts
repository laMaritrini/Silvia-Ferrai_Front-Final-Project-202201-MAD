import { User } from '../../interfaces/user';
import { actionTypesUser } from './actionTypes';

export const login = (user: User) => ({
    type: actionTypesUser.login,
    payload: user,
});

export const logout = () => ({
    type: actionTypesUser.logout,
});
