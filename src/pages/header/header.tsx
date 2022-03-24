import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <p>{currentTime}</p>
            <Link to="/login">LOGIN</Link>
        </div>
    );
}
export default Header;
