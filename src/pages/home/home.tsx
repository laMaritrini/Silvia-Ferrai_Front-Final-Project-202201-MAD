/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TicketI } from '../../interfaces/ticket';
import { createNewTicket } from '../../redux/ticket/actionCreator';
import { RootState } from '../../redux/store';

function Home() {
    const user = useSelector((state: RootState) => state.user);
    // const ticket = useSelector((state: RootState) => state.ticket);

    const [newTicket, setNewTicket] = useState<TicketI>({
        items: [],
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createTicket = (ticket: TicketI) => {
        dispatch(createNewTicket(ticket, user.token));
    };

    function handleClick() {
        createTicket(newTicket);

        setNewTicket(newTicket);

        // console.log(newTicket);
        navigate(`/ticket/${newTicket._id}`);
    }

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyPress={handleClick}
        >
            +MESA
        </div>
    );
}

export default Home;
