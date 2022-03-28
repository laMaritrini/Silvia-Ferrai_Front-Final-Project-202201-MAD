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
        // <div>
        //     <input type="number" name="tot" value={} onChange={} />

        //     <input type="number" name="cash" value={} onChange={} />
        //     <input type="number" name="card" value={} onChange={} />
        //
        // </div>

        <div className="closeTicket">
            <div className="close-container">
                <div className="closeTicket__form">
                    <div>TOT A PAGAR:</div>
                    <div>Tarjeta:</div>
                    <div>Efectivo:</div>
                    <div>Cambio: </div>
                </div>

                <div className="closeTicket__keyboard">
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        6
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        7
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        8
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        9
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        2
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        3
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        4
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        5
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        0
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        1
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        .
                    </div>
                    <div className="closeTicket__keyboard closeTicket__keyboard--number">
                        C
                    </div>
                </div>
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
