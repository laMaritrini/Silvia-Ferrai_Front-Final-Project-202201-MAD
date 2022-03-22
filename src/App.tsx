import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
