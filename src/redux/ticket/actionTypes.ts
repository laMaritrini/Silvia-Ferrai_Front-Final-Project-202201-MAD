export interface ActionTypes {
    loadProducts: string;
    createTicket: string;
    deleteTicket: string;
    updateTicket: string;
    removeProductFromTicket: string;
    getTicket: string;
    getAllTickets: string;
}

export const actionTypesTicket: ActionTypes = {
    loadProducts: '@products/load',
    createTicket: '@ticket/create',
    deleteTicket: '@ticket/delete',
    updateTicket: '@ticket/update',
    removeProductFromTicket: '@ticket/remove',
    getTicket: '@ticket/load',
    getAllTickets: '@ticket/loadAll',
};
