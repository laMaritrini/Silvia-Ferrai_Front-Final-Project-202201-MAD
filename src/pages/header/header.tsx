/* eslint-disable no-undef */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const weekDay = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];

function Header() {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        setCurrentTime(
            `${weekDay[new Date().getDay()]} ${new Date().toLocaleString()}`
        );
        setInterval(() => {
            setCurrentTime(
                `${weekDay[new Date().getDay()]} ${new Date().toLocaleString()}`
            );
        }, 1000);
    }, []);

    return (
        <div className="header-container">
            <h1 className="header-title">ECCO tpv</h1>
            <p className="time-header">{currentTime}</p>
            <Link to="/login" className="link-login">
                LOGIN
            </Link>

            <FontAwesomeIcon className="icon-settings" icon={faGear} />
        </div>
    );
}
export default Header;
