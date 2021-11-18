import axios from 'axios';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactError,
    addContactRequest,
    addContactSuccess,
    deleteContactError,
    deleteContactRequest,
    deleteContactSuccess,
} from './contacts-actions';

axios.defaults.baseURL = 'https://6196b1abaf46280017e7e242.mockapi.io';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest())
    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(fetchContactsError(error)))
}

const addContact = ({ name, number }) => dispatch => {
    dispatch(addContactRequest());
    axios
        .post('/contacts', ({ name, number }))
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)))
};


export { addContact, deleteContact, fetchContacts };