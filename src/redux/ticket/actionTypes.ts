export interface ActionTypes {
    createTicket: string;
    deleteTicket: string;
    updateTicket: string;
    removeProductFromTicket: string;
    getTicket: string;
    loadAllTickets: string;
}

export const actionTypesTicket: ActionTypes = {
    createTicket: '@ticket/create',
    deleteTicket: '@ticket/delete',
    updateTicket: '@ticket/update',
    removeProductFromTicket: '@ticket/remove',
    getTicket: '@ticket/load',
    loadAllTickets: '@ticket/loadAll',
};
