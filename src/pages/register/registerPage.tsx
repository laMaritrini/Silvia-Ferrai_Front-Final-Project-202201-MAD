import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../components/user-form';
import './registerPage.scss';

function RegisterPage() {
    return (
        <div className="container-reg">
            <h2 className="container-reg__register">REGISTER</h2>
            <UserForm />
            <p className="container-reg__option"> OR</p>
            <Link to="/login">
                <button className="button-login" type="button">
                    LOGIN
                </button>
            </Link>
        </div>
    );
}
export default RegisterPage;
