/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Products from '../../components/products';
import { RootState } from '../../redux/store';
import { getTicket } from '../../redux/ticket/actionCreator';
import './ticketPage.scss';

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
            <h3 className="ticket-title">Ticket Mesa N.</h3>
            <div className="ticket-subtitle">
                <p>Uds:</p>
                <p>Article:</p>
                <p>Imp.:</p>
                <p>Tot:</p>
            </div>
            <ul>
                {ticketInfo &&
                    ticketInfo.items?.length &&
                    ticketInfo.items.map((el: any) => (
                        <div className="ticket-subtitle__elements">
                            <li>{el.uds}</li>
                            <li>{el.article.item}</li>
                            <li>{el.article.price}</li>
                            <li>{el.article.price * el.uds}</li>
                        </div>
                    ))}
            </ul>
            <div className="tot">
                <div>Tot. art</div>
                <div>Tot. </div>
            </div>
            <Products />
            <Link to="/">
                <div>Sala</div>
            </Link>
            <div>Cerrar Ticket</div>
            <div>Invitacíon</div>
            <div />
        </div>
    );
}

export default TicketPage;
