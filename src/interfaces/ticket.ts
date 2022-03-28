export interface ArticleI {
    id: number;
    item: string;
    type: string;
    price: number;
}

export interface ItemI {
    id: string;
    uds: number;
    article: ArticleI;
}

export interface TicketI {
    _id?: string | undefined;
    items: ItemI[];
}
