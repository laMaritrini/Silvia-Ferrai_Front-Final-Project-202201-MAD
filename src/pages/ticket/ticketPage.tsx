import React from 'react';
import { Link } from 'react-router-dom';

function TicketPage() {
    return (
        <div>
            <p>Mesa</p>
            <Link to="/">
                <div>Sala</div>
            </Link>
        </div>
    );
}

export default TicketPage;
