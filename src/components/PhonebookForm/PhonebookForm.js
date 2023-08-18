
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import { motion } from "framer-motion";
import styles from './PhonebookForm.module.scss';
import { ThemeContext } from '../BodyTheme/BodyTheme.js';
import classNames from "classnames";

import ErrorNotification from "components/ErrorNotification";
import SubmitButton from "components/SubmitButton";

import { itemContacts } from "redux/contacts/contacts-selectors";

export default function PhonebookForm({ onSubmit, onHide, modalShow }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(itemContacts);

    const { theme } = useContext(ThemeContext);


    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                console.warn(`Field type - ${name} is not processed`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name,
            number,
        }

        if (contacts.find(contact => contact.name === name || contact.number === number)) {
            const error = 'User with this name or number is already in contacts!';
            ErrorNotification(error);
            return;
        }

        onSubmit(newContact)
        reset();
        if (modalShow) {
            onHide();
        }
    }


    const reset = () => {
        setName('');
        setNumber('');
    }


    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}
                exit={{ opacity: 0, transition: { duration: 1.5 } }}
                className={classNames(styles.PhonebookForm, styles[theme])} >
                <div className={classNames(styles.PhonebookFormOverlay, styles[theme])}></div>

                <h2 className={styles.PhonebookFormTitle}>Phonebook</h2>

                <p className={classNames(styles.PhonebookFormText, styles[theme])}> Stay connected and in control of your contact information with just a few taps. Let's get started with the simple app. Happy organizing!</p>

                <Form onSubmit={handleSubmit}>

                    <Form.Floating className="mb-3" >
                        <Form.Control
                            className={styles.FormInput}
                            id="floatingInputCustom"
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Adam Parrish"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adam Parrish"
                            onChange={handleChange}


                            required
                        />
                        <label
                            htmlFor="floatingInputCustom"
                            className={classNames(styles.PhonebookFormLabel, styles[theme])}
                        >Name</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            className={styles.FormInput}
                            id="floatingNumberCustom"
                            type="tel"
                            name="number"
                            value={number}
                            placeholder="Phone number"
                            pattern="\+?\d+"
                            title="Phone number must be digits and can start with +"
                            onChange={handleChange}

                            required
                        />
                        <label
                            htmlFor="floatingNumberCustom"
                            className={classNames(styles.PhonebookFormLabel, styles[theme])}
                        >Phone number</label>
                    </Form.Floating>

                    <div className="d-grid gap-2">
                        <SubmitButton
                            className={styles.SubmitBtnField}
                            title={'Add conctact'}
                        />
                    </div>

                </Form>
            </motion.div >
        </>

    )

}
PhonebookForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}