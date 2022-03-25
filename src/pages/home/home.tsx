/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'; // , { useState }
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { TicketI } from '../../interfaces/ticket';
import { createNewTicket } from '../../redux/ticket/actionCreator';
import { RootState } from '../../redux/store';

import * as api from '../../services/ticket.api';
import { getAllTickets } from '../../services/ticket.api';

function Home() {
    const user = useSelector((state: RootState) => state.user);
    const ticket = useSelector((state: RootState) => state.ticket);
    const [newTicket, setNewTicket] = useState<TicketI>({
        items: [],
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createTicket = async () => {
        const { data: createdTicket } = await api.createTicket(
            { items: [] },
            user.token
        );

        dispatch(createNewTicket(createdTicket));

        navigate(`/ticket/${createdTicket._id}`);
    };

    // const loadTickets = () => {
    //     dispatch(getAllTickets);
    // };

    // useEffect(() => {
    //     dispatch(getAllTickets());
    //     setNewTicket(newTicket);
    // }, []);

    return (
        <>
            <div>
                <FontAwesomeIcon
                    role="button"
                    tabIndex={0}
                    onClick={createTicket}
                    onKeyPress={createTicket}
                    icon={faCirclePlus}
                />

                <p> mesa</p>
            </div>
            {/* <ul>
                {newTicket.items.map((item: any) => (
                    <li>{item}</li>
                ))}
            </ul> */}
        </>
    );
}

export default Home;
