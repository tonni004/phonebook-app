import { React, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import PropTypes from 'prop-types';
import styles from './ContactsList.module.scss';

import Button from 'react-bootstrap/Button';
import DeleteModal from "components/DeleteModal";
import { ThemeContext } from '../BodyTheme/BodyTheme.js'


export default function ContactsList({ contacts, deleteContact }) {
    const { theme } = useContext(ThemeContext);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [contact, setContact] = useState();

    // delete modal
    const openDeleteModal = (contact) => {
        setContact(contact);
        return setDeleteModalShow(true)
    }

    const closeDeleteModal = () => {
        return setDeleteModalShow(false)
    }

    return (
        <ul className={styles.ContactsList}>
            {
                contacts.length === 0
                    ? <p className={classNames(styles.Notification, styles[theme])}>
                        <span className={classNames(styles.NotificationTitle, styles[theme])}>No contacts</span> Contacts you've added will appear here.</p>

                    : <AnimatePresence initial={false}>
                        {contacts.map((contact) => {
                            return (
                                <motion.li
                                    key={contact.id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
                                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                                    className={classNames(styles.ContactsItem, styles[theme])}
                                >

                                    <div>
                                        <span className={styles.ContactName}>{contact.name}:</span>
                                        <span>{contact.number}</span>
                                    </div>

                                    <Button
                                        className={styles.DeleteButton}
                                        variant="danger"
                                        type="submit"
                                        onClick={() => { openDeleteModal(contact) }}>Delete</Button>

                                </motion.li>
                            )
                        })}

                        <DeleteModal
                            show={deleteModalShow}
                            onHide={closeDeleteModal}
                        >
                            <div className={styles.DeleteModalField}>
                                <motion.h4
                                    variants={{
                                        hidden: { opacity: 0, y: -25 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                                    }}
                                    className={styles.DeleteModalTitle}>Are you sure?</motion.h4>
                                <div >
                                    <Button
                                        variant="danger"
                                        className={styles.DeleteModalButton}
                                        onClick={() => {
                                            deleteContact(contact);
                                            closeDeleteModal();
                                        }}>Delete</Button>

                                    <Button
                                        variant="outline-dark"
                                        onClick={() => { closeDeleteModal() }}>Cancel</Button>
                                </div>
                            </div>
                        </DeleteModal>
                    </AnimatePresence>


            }
        </ul>
    )

}


ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

