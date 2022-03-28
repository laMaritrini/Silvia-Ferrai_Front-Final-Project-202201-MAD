import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from '../../components/user-form';
import './registerPage.scss';

function RegisterPage() {
    return (
        <div className="outer-container">
            <div className="container-reg">
                <h2 className="container-reg__register">REGÍSTRATE</h2>
                <UserForm />
                <p className="container-reg__question">¿Ya estás registrado?</p>
                <Link to="/login">
                    <button className="button-login" type="button">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default RegisterPage;
