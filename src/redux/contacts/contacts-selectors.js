// import { createSelector } from 'reselect';

export const allContacts = state => state.contacts;
export const itemContacts = state => state.contacts.items;
export const getFilterContacts = state => state.contacts.filter;

export const getVisibleContacts = state => {
    const contacts = itemContacts(state);
    const filter = getFilterContacts(state);
    const normalizedFilter = filter.toLowerCase();
    const list = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return list;
}

