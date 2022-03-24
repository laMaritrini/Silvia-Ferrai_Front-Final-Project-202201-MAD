import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TicketI } from '../../interfaces/ticket';
import { createNewTicket } from '../../redux/ticket/actionCreator';
import { RootState } from '../../redux/store';

function Home() {
    const user = useSelector((state: RootState) => state.user);

    const [newTicket, setNewTicket] = useState<TicketI>({
        items: [],
    });

    const dispatch = useDispatch();

    const createTicket = (ticket: TicketI) => {
        dispatch(createNewTicket(ticket, user.token));
    };

    function handleClick() {
        createTicket(newTicket);
        setNewTicket(newTicket);
    }

    return (
        <>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                B1
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                B2
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                B3
            </div>

            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M1
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M2
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M3
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M4
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M5
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M6
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M7
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M8
            </div>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                M9
            </div>
        </>
    );
}

export default Home;
