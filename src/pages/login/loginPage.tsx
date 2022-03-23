import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/login-form';
import './loginPage.scss';

function LoginPage() {
    return (
        <div className="outer-container">
            <div className="container">
                <h2 className="container__login">LOGIN</h2>
                <LoginForm />
                <p className="container__option"> OR</p>
                <Link to="/register">
                    <button className="button-register" type="button">
                        REGISTER
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default LoginPage;
