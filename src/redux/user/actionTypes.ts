export interface ActionTypes {
    login: string;
    logout: string;
    register: string;
}

export const actionTypesUser: ActionTypes = {
    login: '@user/login',
    logout: '@user/logout',
    register: '@user/register',
};
