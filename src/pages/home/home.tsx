/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'; // , { useState }
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {
    createNewTicket,
    getAllTickets,
} from '../../redux/ticket/actionCreator';
import { RootState } from '../../redux/store';

import * as api from '../../services/ticket.api';

function Home() {
    const user = useSelector((state: RootState) => state.user);
    const ticket = useSelector((state: RootState) => state.ticket);

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

    useEffect(() => {
        dispatch(getAllTickets());
    }, [dispatch]);

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
            <ul>
                {ticket.length &&
                    ticket.map((item: any, index: number) => (
                        <>
                            <Link to={`/ticket/${item._id}`}>
                                <li key={item._id}> Mesa {index + 1}</li>
                            </Link>
                            {/* <p>
                            {item.items.map((el: any) => (
                                <div key={el.id}>
                                    <p>{el.id}</p>
                                    <p>{el.type}</p>
                                    <p>{el.item}</p>
                                    <p>{el.price}</p>
                                </div>
                            ))}
                        </p> */}
                        </>
                    ))}
            </ul>
        </>
    );
}

export default Home;
