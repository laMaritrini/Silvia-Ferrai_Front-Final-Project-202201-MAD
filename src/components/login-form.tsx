import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserLoginI } from '../interfaces/userLogin';
import * as actionCreators from '../redux/user/actionCreators';

function LoginForm() {
    const [setLogin, setNewLogin] = useState<UserLoginI>({
        username: '',
        password: '',
    });

    const dispatch = useDispatch();

    const handleChange = (ev: any) => {
        setNewLogin({ ...setLogin, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        dispatch(actionCreators.login(setLogin));
    };

    return (
        <form>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={setLogin.username}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="password"
                value={setLogin.password}
                onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
                Login
            </button>
        </form>
    );
}

export default LoginForm;
