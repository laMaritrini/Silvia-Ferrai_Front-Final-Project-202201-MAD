import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTicket } from '../../redux/ticket/actionCreator';
import { RootState } from '../../redux/store';
import './closeTicket.scss';

function CloseTicketPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state: RootState) => state.user);

    const deleteOneTicket = () => {
        dispatch(deleteTicket(id, user.token));
    };

    return (
        <div className="closeTicket">
            <div className="close-container">
                <form className="closeTicket__form">
                    <label htmlFor="tot" className="closeTicket__label-tot">
                        TOT A PAGAR:
                        <input
                            className="closeTicket__label closeTicket__label--tot"
                            type="number"
                            // value={}
                            name="tot"
                            id="tot"
                        />
                    </label>
                    <label htmlFor="cash" className="closeTicket__label">
                        Efectivo:
                        <input
                            className="closeTicket__label closeTicket__label--input"
                            type="number"
                            name="cash"
                            id="cash"
                        />
                    </label>
                    <label htmlFor="card" className="closeTicket__label">
                        Tarjeta:
                        <input
                            className="closeTicket__label closeTicket__label--input"
                            type="number"
                            name="card"
                            id="card"
                        />
                    </label>
                    <label htmlFor="change" className="closeTicket__label">
                        Cambio:
                        <input
                            className="closeTicket__label closeTicket__label--input"
                            type="text"
                            // value={}
                            name="change"
                            id="change"
                        />
                    </label>
                </form>
            </div>
            <div>
                <Link to="/">
                    <button className="closeTicket__esc" type="button">
                        ESC
                    </button>
                </Link>
                <Link to="/">
                    <button
                        className="closeTicket__confirm"
                        type="button"
                        onClick={deleteOneTicket}
                    >
                        CONFIRMAR
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default CloseTicketPage;
