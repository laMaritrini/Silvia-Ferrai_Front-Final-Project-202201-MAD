import React from 'react';
import axios from 'axios';
import { login, register } from './user-api';
import { UserLoginI } from '../interfaces/userLogin';
import { UserI } from '../interfaces/user';

jest.mock('axios');

const userMock: UserLoginI = {
    username: 'test-mock',
    password: '123test',
};

const userRegisterMock: UserI = {
    username: 'test-silvia',
    role: 'Sala',
    password: '123',
};

describe('Given the service user', () => {
    test('When login is running, axios.post should be called', () => {
        login(userMock);
        expect(axios.post).toHaveBeenCalled();
    });
    test('When login is running, axios.post should be called', () => {
        register(userRegisterMock);
        expect(axios.post).toHaveBeenCalled();
    });
});
