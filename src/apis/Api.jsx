import headerToken from "../auth/headerToken";

export const baseUrl = () => {
    return 'http://127.0.0.1:8000';
}

export const authLogin = async (form) => {
    return await headerToken.post(`/api/authenticate`, form);
}
export const authLogout = async () => {
    return await headerToken.post(`/api/logout`);
}
export const authCheck = async (header) => {
    return await headerToken.get(`/api/authCheck`, header);
}

export const getUsers = async () => {
    return await headerToken.get(`/api/users`);
}
export const postUsers = async (form) => {
    return await headerToken.post(`/api/users`, form);
}
export const patchUsers = async (id, form) => {
    return await headerToken.patch(`/api/users/`+id, form);
}
export const changePasswordUsers = async (id, form) => {
    return await headerToken.patch(`/api/users/change-password/`+id, form);
}
export const showUsers = async (id) => {
    return await headerToken.get(`/api/users/${id}`);
}
export const deleteUsers = async (id) => {
    return await headerToken.delete(`/api/users/${id}`);
}
