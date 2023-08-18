// import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback, useState } from 'react';
import { addContact, deleteContact, fetchContacts } from '../../redux/contacts/contacts-operations';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { getFilterContacts, getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import styles from './PhonebookPage.module.scss';
import { motion } from "framer-motion";
// components
import Scroll from "components/Scroll";
import Container from "../../components/Container";
import Section from "../../components/Section";
import BurgerMenu from "components/BurgerMenu";
import PhonebookForm from "../../components/PhonebookForm";
import Filter from "../../components/Filter";
import ContactsList from "../../components/ContactsList";
import FormModal from "components/FormModal";
import ModalButton from "components/ModalButton";
import Footer from "components/Footer";


export default function PhonebookPage() {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const filter = useSelector(getFilterContacts);
    const [modalShow, setModalShow] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const onAddContact = useCallback((contact) => {
        dispatch(addContact(contact));
    }, [dispatch])

    const onFilterContacts = useCallback((e) => {
        dispatch(filterContacts(e.currentTarget.value));
    }, [dispatch])

    const onDeleteContact = useCallback((contact) => {
        dispatch(deleteContact(contact));
    }, [dispatch])

    // modal
    const openModal = () => {
        return setModalShow(true)
    }

    const closeModal = () => {
        return setModalShow(false)
    }

    // window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        dispatch(fetchContacts(
        ));
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // scroll
    useEffect(() => {
        const handleResize = () => {
            const contentHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;
            setIsScrollable(contentHeight > windowHeight);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // animation
    const visible = { opacity: 1, y: 0, transition: { duration: 1.5 } };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}>

                {isScrollable && <Scroll />}

                <Container>
                    <BurgerMenu />
                    <Section>

                        {windowWidth >= 1279
                            ? < PhonebookForm onSubmit={onAddContact} />

                            : <div className={styles.ModalButtonField}>
                                <ModalButton onClick={openModal} />

                                <FormModal
                                    show={modalShow}
                                    onHide={closeModal}>
                                    <PhonebookForm
                                        onSubmit={onAddContact}
                                        modalShow={modalShow}
                                        onHide={closeModal} />
                                </FormModal>


                            </div>
                        }

                        <div className={styles.ContactsField}>
                            <Filter value={filter} onChange={onFilterContacts} />

                            <motion.div
                                variants={itemVariants}
                            >
                                <ContactsList
                                    contacts={contacts}
                                    deleteContact={onDeleteContact}
                                />
                            </motion.div>
                        </div>

                    </Section>


                </Container>

            </motion.div>
            <Footer />
        </>

    )
}

