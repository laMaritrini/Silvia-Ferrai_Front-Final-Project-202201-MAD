import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../redux/user/actionCreators';
import { UserI } from '../interfaces/user';

function UserForm() {
    const [user, setUser] = useState<UserI>({
        username: '',
        password: '',
        role: '',
    });
    const dispatch = useDispatch();

    const handleChange = (ev: any) => {
        setUser({ ...user, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        dispatch(actionCreators.register(user));
    };

    return (
        <form>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={user.username}
                onChange={handleChange}
            />
            Sala
            <input
                type="radio"
                name="role"
                placeholder="role"
                value="Sala"
                onChange={handleChange}
            />
            Cocina
            <input
                type="radio"
                name="role"
                placeholder="role"
                value="Cocina"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                value={user.password}
                onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
                Register
            </button>
        </form>
    );
}
export default UserForm;
