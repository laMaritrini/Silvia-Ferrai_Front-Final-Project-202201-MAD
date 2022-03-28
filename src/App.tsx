import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './pages/header/header';
import Home from './pages/home/home';
// import KitchenPage from './pages/kitchen/kitchen.tsx.bak';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';
import TicketPage from './pages/ticket/ticketPage';
import CloseTicketPage from './pages/closeTicket/closeTicket';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/ticket/:id" element={<TicketPage />} />
                    <Route path="/closeTicket" element={<CloseTicketPage />} />
                    {/* <Route path="/kitchen" element={<KitchenPage />} /> */}
                </Routes>
            </main>
        </div>
    );
}

export default App;
