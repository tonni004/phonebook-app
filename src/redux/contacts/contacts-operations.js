import { fetchAllContacts, addNewContact, deleteContactById } from '../../api/contacts-api';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from "./contacts-actions";
import ErrorNotification from 'components/ErrorNotification';



export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const contacts = await fetchAllContacts();
        return dispatch(fetchContactsSuccess(contacts))
    } catch (error) {
        const errorMessage = "Something went wrong. Wait a minute or two!";
        ErrorNotification(errorMessage)
        return dispatch(fetchContactsError(error.message))
    }

}

export const addContact = ({ name, number }) => async dispatch => {
    dispatch(addContactRequest());
    const contact = {
        name: name,
        number: number,
    }
    try {
        const newContact = await addNewContact(contact);
        return dispatch(addContactSuccess(newContact))
    } catch (error) {
        const errorMessage = 'The form was not submitted properly. Try again!';
        ErrorNotification(errorMessage)
        return dispatch(addContactError(error.message))
    }


}

export const deleteContact = contact => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        const deleteContact = await deleteContactById(contact);
        return dispatch(deleteContactSuccess(deleteContact));
    } catch (error) {
        const errorMessage = 'Something went wrong. Wait a minute or two and try again!';
        ErrorNotification(errorMessage)
        return dispatch(deleteContactError(error.message))
    }

}

// Another version deleteContacts
// export const deleteContacts = contact => async dispatch => {
//     dispatch(deleteContactRequest());

//     try {
//         await axios
//             .delete(`/contacts/${contact.id}`)
//             .then(() => dispatch(deleteContactSuccess(contact)))
//     } catch (error) {
//         return dispatch(deleteContactError(error))
//     }

// };



