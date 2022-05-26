/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { ItemI, TicketI } from '../../interfaces/ticket';
import { RootState } from '../../redux/store';
import './kitchen.scss';

function KitchenPage() {
    const ticket = useSelector((state: RootState) => state.ticket);

    return (
        <div className="kitchen-container">
            <div className="title">COMANDAS</div>
            <div className="tables-container">
                {ticket.length &&
                    ticket.map((element: TicketI, index: number) => (
                        <div key={element._id} className="tables">
                            <div className="tables__title">
                                MESA: {index + 1}
                            </div>

                            {element.items.map((item: ItemI) => (
                                <div
                                    key={item.article.id}
                                    className="tables__elements"
                                >
                                    <p className="tables__elements  tables__elements--item">
                                        {item.uds}
                                    </p>
                                    <p className="tables__elements tables__elements--item">
                                        {item.article.item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default KitchenPage;
