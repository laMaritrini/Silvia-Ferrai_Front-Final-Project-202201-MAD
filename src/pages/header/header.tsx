import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-container">
            <h1 className="header-title">ECCO tpv</h1>
            {/* {
        let date: Date = new Date();  
console.log("Date = " + date);
        } */}
            <Link to="/login">LOGIN</Link>
        </div>
    );
}
export default Header;
