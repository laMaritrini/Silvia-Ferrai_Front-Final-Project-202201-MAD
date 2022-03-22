import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../components/user-form';

function RegisterPage() {
    return (
        <div className="container">
            <h2 className="register">Register</h2>
            <UserForm />
            <Link to="/login">
                <button type="button">LOGIN</button>
            </Link>
        </div>
    );
}
export default RegisterPage;
