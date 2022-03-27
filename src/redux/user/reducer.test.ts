import { userReducer, InitialStateI } from './reducer';
import { actionTypesUser } from './actionTypes';

const initialState: InitialStateI = {
    token: '',
    username: '',
    id: '',
    isLogged: false,
};

describe('Given the userReducer', () => {
    test('userReducer', () => {
        const newState = userReducer(initialState, {
            type: actionTypesUser.register,
            payload: { token: '123', username: '123', id: '123' },
        });

        expect(newState).toEqual({ token: '123', username: '123', id: '123' });
    });

    test('userReducer', () => {
        const newState = userReducer(initialState, {
            type: actionTypesUser.login,
            payload: {
                token: '123',
                username: '123',
                id: '123',
                isLogged: false,
            },
        });

        expect(newState).toEqual({
            token: '123',
            username: '123',
            id: '123',
            isLogged: true,
        });
    });

    test('userReducer', () => {
        const newState = userReducer(initialState, {
            type: actionTypesUser.logout,
        });

        expect(newState).toEqual(initialState);
    });
});
