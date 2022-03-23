import axios, { AxiosResponse } from 'axios';
import { TicketI } from '../interfaces/ticket';

const TICKET_API = 'http://localhost:3800/ticket/';

export function getProducts(): Promise<AxiosResponse> {
    return axios.get(`${TICKET_API}/products`);
}

export function createTicket(
    ticket: TicketI,
    token: string
): Promise<AxiosResponse> {
    return axios.post(TICKET_API, ticket, {
        headers: { authorization: `Bearer ${token}` },
    });
}

export function deleteTicket(
    id: string,
    token: string
): Promise<AxiosResponse> {
    return axios.delete(TICKET_API + id, {
        headers: { authorization: `Bearer ${token}` },
    });
}

export function updateProductTicket(
    id: string,
    token: string
): Promise<AxiosResponse> {
    return axios.patch(`${TICKET_API}/product/${id}`, {
        headers: { authorization: `Bearer ${token}` },
    });
}

export function deleteProductTicket(
    id: string,
    token: string
): Promise<AxiosResponse> {
    return axios.delete(`${TICKET_API}/product/${id}`, {
        headers: { authorization: `Bearer ${token}` },
    });
}

export function getAllTickets(token: string): Promise<AxiosResponse> {
    return axios.get(TICKET_API, {
        headers: { authorization: `Bearer ${token}` },
    });
}

export function getTicket(id: string, token: string): Promise<AxiosResponse> {
    return axios.get(TICKET_API + id, {
        headers: { authorization: `Bearer ${token}` },
    });
}
