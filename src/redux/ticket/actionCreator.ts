import { AppDispatch } from '../store';
import { actionTypesTicket } from './actionTypes';
import * as api from '../../services/ticket.api';
import { TicketI } from '../../interfaces/ticket';

export const createNewTicket =
    (ticket: TicketI, token: string) => (dispatch: AppDispatch) => {
        api.createTicket(ticket, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.createTicket,
                payload: resp.data,
            });
        });
    };

export const deleteTicket =
    (id: string, token: string) => (dispatch: AppDispatch) => {
        api.deleteTicket(id, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.deleteTicket,
                payload: resp.data,
            });
        });
    };

export const updateProductIntoTicket =
    (id: string, token: string) => (dispatch: AppDispatch) => {
        api.updateProductTicket(id, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.updateTicket,
                payload: resp.data,
            });
        });
    };

export const removeProductIntoTicket =
    (id: string, token: string) => (dispatch: AppDispatch) => {
        api.deleteProductTicket(id, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.removeProductFromTicket,
                payload: resp.data,
            });
        });
    };

export const getAllTickets = (token: string) => (dispatch: AppDispatch) => {
    api.getAllTickets(token).then((resp) => {
        dispatch({
            type: actionTypesTicket.loadAllTickets,
            payload: resp.data,
        });
    });
};

export const getTicket =
    (id: string, token: string) => (dispatch: AppDispatch) => {
        api.getTicket(id, token).then((resp) => {
            dispatch({
                type: actionTypesTicket.getTicket,
                payload: resp.data,
            });
        });
    };
