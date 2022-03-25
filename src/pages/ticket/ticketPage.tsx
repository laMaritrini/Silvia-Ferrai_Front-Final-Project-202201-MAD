/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { getTicket } from '../../redux/ticket/actionCreator';

function TicketPage() {
    const { id } = useParams();
    const user = useSelector((state: RootState) => state.user);
    const ticketInfo = useSelector((state: RootState) => state.ticket);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicket(id, user.token));
    }, [dispatch]);

    return (
        <div>
            <p>Ticket</p>
            <ul>
                {ticketInfo &&
                    ticketInfo.items?.length &&
                    ticketInfo.items.map((el: any) => (
                        <div>
                            <li>{el.uds}</li>
                            <li>{el.article.item}</li>
                            <li>{el.article.price}</li>
                        </div>
                    ))}
            </ul>
            <Link to="/">
                <div>Sala</div>
            </Link>
        </div>
    );
}

export default TicketPage;
