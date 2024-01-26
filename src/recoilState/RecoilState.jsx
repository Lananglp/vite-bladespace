import { atom } from "recoil";

export const getTheme = () => {
    const themeLocalStorage = localStorage.getItem("theme");
    return themeLocalStorage !== null ? JSON.parse(themeLocalStorage) : 'light';
}
export const themeState = atom({
    key: 'themeState',
    default: getTheme(),
})

export const getToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return token !== null ? JSON.parse(localStorage.getItem('token')) : null;
}
export const tokenState = atom({
    key: 'tokenState',
    default: getToken(),
});

export const userState = atom({
    key: 'userState',
    default: {},
});

export const loadingUserState = atom({
    key: 'loadingUserState',
    default: false,
});