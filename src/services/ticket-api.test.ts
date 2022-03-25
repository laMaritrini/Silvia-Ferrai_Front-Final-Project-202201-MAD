import axios from 'axios';
import * as api from './ticket.api';
import { TicketI } from '../interfaces/ticket';

jest.mock('axios');

describe('Given the service api', () => {
    let id: string;
    let ticket: TicketI;
    let token: string;
    beforeAll(() => {
        id = '65656556';
        ticket = {
            _id: '',
            items: [],
        };
        token = '';
    });

    test('When getProducts is running, axios.get should be called', () => {
        api.getProducts();
        expect(axios.get).toHaveBeenCalled();
    });

    test('When createTicket is running, axios.post should be called', () => {
        api.createTicket(ticket, token);
        expect(axios.post).toHaveBeenCalled();
    });

    test('When  deleteTicket is running, axios.delete should be called', () => {
        api.deleteTicket(id, token);
        expect(axios.delete).toHaveBeenCalled();
    });

    test('When updateProductTicket is running, axios.patch should be called', () => {
        api.updateProductTicket(id, token);
        expect(axios.patch).toHaveBeenCalled();
    });

    test('When  deleteProductTicket is running, axios.delete should be called', () => {
        api.deleteProductTicket(id, token);
        expect(axios.delete).toHaveBeenCalled();
    });

    test('When getAllTickets is running, axios.get should be called', () => {
        api.getAllTickets();
        expect(axios.get).toHaveBeenCalled();
    });

    test('When getTicket is running, axios.get should be called', () => {
        api.getTicket(id, token);
        expect(axios.get).toHaveBeenCalled();
    });
});
