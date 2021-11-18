import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/add', ({name, number}) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    },
}));
const deleteContact = createAction('contact/delete');
const changeFilter = createAction('contact/filter');

export { addContact, deleteContact, changeFilter };