import { login, logout, register } from './actionCreators';
import { actionTypesUser } from './actionTypes';

jest.mock('../../services/user-api', () => ({
    login: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
    register: () =>
        Promise.resolve({
            data: {
                test: 'test',
            },
        }),
}));

describe('Given actions creators ', () => {
    describe('When login is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await login({
                username: 'Sonia',
                password: '1234',
            })(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesUser.login,
                payload: {
                    test: 'test',
                },
            });
        });
    });
    describe('When register is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await register({
                username: 'Sonia',
                role: 'Sala',
                password: '1234',
            })(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesUser.register,
                payload: {
                    test: 'test',
                },
            });
        });
    });

    describe('When logout is called', () => {
        test('Dispatch is called with successful action', async () => {
            const dispatchMock = jest.fn();

            await logout()(dispatchMock);

            expect(dispatchMock).toHaveBeenCalledWith({
                type: actionTypesUser.logout,
            });
        });
    });
});
