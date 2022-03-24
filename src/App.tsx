import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './pages/header/header';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    {/* <Route path="/" element={<SalaPage />} /> */}
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* <Route path="/ticket" element={<TicketPage />} /> */}
                    {/* <Route path="/closeTicket" element={<CloseTicketPage />} /> */}
                    {/* <Route path="/kitchen" element={<kitchenPage />} /> */}
                </Routes>
            </main>
        </div>
    );
}

export default App;
