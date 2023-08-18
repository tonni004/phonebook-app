// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchAllContacts = () => {
    return axios.get('/contacts').then(res => res.data);
}


export const addNewContact = (contact) => {
    return axios.post('/contacts', contact).then(res => res.data);
};

export const deleteContactById = (contact) => {
    return axios.delete(`/contacts/${contact.id}`).then(res => res.data);

};


