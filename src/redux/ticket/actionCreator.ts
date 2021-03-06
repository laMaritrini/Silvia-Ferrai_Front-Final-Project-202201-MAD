import { AppDispatch } from '../store';
import { actionTypesTicket } from './actionTypes';
import * as api from '../../services/ticket.api';
import { TicketI } from '../../interfaces/ticket';

export const createNewTicket = (ticket: TicketI) => (dispatch: AppDispatch) => {
    dispatch({
        type: actionTypesTicket.createTicket,
        payload: ticket,
    });
};

export const deleteTicket =
    (id: string | undefined, token: string) => (dispatch: AppDispatch) => {
        api.deleteTicket(id, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.deleteTicket,
                payload: resp.data,
            });
        });
    };

export const updateProductIntoTicket =
    (id: string | undefined, idItem: number, token: string) =>
    (dispatch: AppDispatch) => {
        api.updateProductTicket(id, idItem, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.updateTicket,
                payload: resp.data,
            });
        });
    };

export const removeProductIntoTicket =
    (id: string, idItem: number, token: string) => (dispatch: AppDispatch) => {
        api.deleteProductTicket(id, idItem, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.removeProductFromTicket,
                payload: resp.data,
            });
        });
    };

export const getAllTickets = () => (dispatch: AppDispatch) => {
    api.getAllTickets().then((resp) => {
        dispatch({
            type: actionTypesTicket.loadAllTickets,
            payload: resp.data,
        });
    });
};

export const getTicket =
    (id: string | undefined, token: string) => (dispatch: AppDispatch) => {
        api.getTicket(id, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.getTicket,
                payload: resp.data,
            });
        });
    };
