import axios, { AxiosResponse } from 'axios';
import { UserI } from '../interfaces/user';
import { UserLoginI } from '../interfaces/userLogin';

const LOGIN_API = 'http://localhost:4500/login/';

const REGISTER_API = 'http://localhost:4500/register/';

export function login(userLogin: UserLoginI): Promise<AxiosResponse> {
    return axios.post(LOGIN_API, userLogin);
}

export function register(user: UserI): Promise<AxiosResponse> {
    return axios.post(REGISTER_API, user);
}
