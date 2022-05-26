import React, { SyntheticEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTicket } from '../../redux/ticket/actionCreator';
import { RootState } from '../../redux/store';
import './closeTicket.scss';

function CloseTicketPage() {
    const dispatch = useDispatch();
    const { id, commandTotal } = useParams();
    const user = useSelector((state: RootState) => state.user);

    const [cash, setCash] = useState('');
    const [card, setCard] = useState('');

    const deleteOneTicket = () => {
        dispatch(deleteTicket(id, user.token));
    };

    return (
        <div className="closeTicket">
            <div className="close-container">
                <form className="closeTicket__form">
                    <label htmlFor="tot" className="closeTicket__label ">
                        TOT A PAGAR €:
                        <input
                            className="closeTicket__label closeTicket__label--tot input"
                            type="number"
                            value={commandTotal}
                            name="tot"
                            id="tot"
                            readOnly
                        />
                    </label>
                    <label htmlFor="cash" className="closeTicket__label">
                        Efectivo €:
                        <input
                            className="closeTicket__label input"
                            type="number"
                            value={cash}
                            onChange={(e: SyntheticEvent) =>
                                setCash((e.target as HTMLInputElement).value)
                            }
                            name="cash"
                            id="cash"
                        />
                    </label>
                    <label htmlFor="card" className="closeTicket__label">
                        Tarjeta €:
                        <input
                            className="closeTicket__label input"
                            type="number"
                            value={card}
                            onChange={(e: SyntheticEvent) =>
                                setCard((e.target as HTMLInputElement).value)
                            }
                            name="card"
                            id="card"
                        />
                    </label>
                    <label
                        htmlFor="change"
                        className="closeTicket__label input"
                    >
                        Cambio €:
                        <p className="closeTicket__change">
                            {(
                                Number(commandTotal) -
                                Number(cash) -
                                Number(card)
                            ).toFixed(2)}
                        </p>
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
                        disabled={
                            Number(commandTotal) - Number(cash) - Number(card) >
                            0
                        }
                    >
                        CONFIRMAR
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default CloseTicketPage;
