// import { Component } from "react";
import { useDispatch } from "react-redux";
import { useCallback, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from '../../components/BodyTheme/BodyTheme.js';
import classNames from "classnames";
import styles from './RegisterPage.module.scss';
// components
import Container from "components/Container";
import BackgroundOverlay from "components/BackgroundOverlay";
import PageBackground from "components/PageBackground";
import FormSection from "components/FormSection";
import CloseBtn from "components/CloseButton/CloseButton";
import RegisterForm from '../../components/RegisterForm'
import ToggleThemeButton from "components/ToggleThemeButton";
// operation
import { registerUser } from '../../redux/auth/auth-operation';


export default function RegisterPage() {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const onRegisterNewUser = useCallback((user) => {
        dispatch(registerUser(user));
    }, [dispatch])

    const visible = { opacity: 1, transition: { duration: 0.5 } };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }
            } >
            <PageBackground>
                <BackgroundOverlay>
                    <Container>
                        <FormSection>
                            <div className={classNames(styles.ToggleButtonField, styles[theme])}><ToggleThemeButton /></div>

                            <CloseBtn />

                            <motion.div
                                variants={itemVariants}
                                className={styles.DescriptionPanel}>
                                <h2 className={styles.DescriptionTitlePanel}>Get these great features with your free account</h2>
                                <div className={styles.DescriptionTextPanel}>
                                    <p>Organize your contacts. You can search by name, phone number, email address.</p>
                                    <p>Add custom fields and tags to your contacts. </p>
                                    <p>You can create regular backups of your phonebook data and restore them in case of accidental deletion, device loss, or migration to a new device.</p>
                                    <p>Send a contact's details quickly.</p>
                                    <p>Your privacy is a top priority. The app employs robust security measures to protect your contact data, ensuring that it remains confidential and secure at all times.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className={styles.RegisterForm}>
                                <h2 className={styles.RegisterFormTitle}>Create your free account</h2>
                                <div className={styles.LinkToLoginPanel}>
                                    <p className={styles.LinkToLoginPanelText}>Already a member?</p>
                                    <a href="/login">Sign in</a>
                                </div>

                                <RegisterForm onSubmit={onRegisterNewUser} />
                            </motion.div>

                        </FormSection>
                    </Container>
                </BackgroundOverlay>
            </PageBackground>
        </motion.div>
    )
}


