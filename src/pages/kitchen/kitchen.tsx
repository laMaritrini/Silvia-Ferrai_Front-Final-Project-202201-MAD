/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './kitchen.scss';

function KitchenPage() {
    const ticket = useSelector((state: RootState) => state.ticket);

    return (
        <div>
            <div className="title">COMANDAS</div>
            <div className="tables-container">
                {ticket.length &&
                    ticket.map((element: any, index: number) => (
                        <div className="tables">
                            <div className="tables__title">
                                {' '}
                                MESA: {index + 1}
                            </div>

                            {element.items.map((item: any) => (
                                <div className="tables__elements">
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
