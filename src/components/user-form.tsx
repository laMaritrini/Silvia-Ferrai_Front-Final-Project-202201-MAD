import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../services/user-api';
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
        const { data: newUser } = await register(user);
        dispatch(register(newUser));
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
            <input
                type="text"
                name="role"
                placeholder="role"
                value={user.role}
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
