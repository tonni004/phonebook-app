import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }

}


export const register = (user) => {
    return axios.post('/users/signup', user).then(res => res.data)
}

export const login = (user) => {
    return axios.post('/users/login', user).then(res => res.data)
}

export const logout = () => {
    return axios.post('/users/logout')
}

export const currentUser = () => {
    return axios.get('/users/current').then(res => res.data)
}