import { useContext } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import classNames from "classnames";
import styles from './HomePage.module.scss';

// component
import Container from "components/Container";
import Footer from "components/Footer";
import LoadingButton from '../../components/LoadingButton/LoadingButton';
import BurgerMenu from "components/BurgerMenu";


import { getIsAuthenticated, getUserName } from "redux/auth/auth-selectors";
import { ThemeContext } from "components/BodyTheme/BodyTheme";

export default function Home() {
    const isSignedIn = useSelector(getIsAuthenticated);
    const userName = useSelector(getUserName);
    const { theme } = useContext(ThemeContext);

    const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                className={styles.HeroSection} >
                <Container>
                    <BurgerMenu />

                    <div
                        className={styles.HomePageField}>
                        <div>

                            <motion.div
                                variants={itemVariants}
                                className={styles.Information}>
                                <motion.h1
                                    variants={{
                                        hidden: { opacity: 0, y: -35 },
                                        visible
                                    }}
                                    className={styles.Title}>Create a phonebook</motion.h1>
                                <p className={styles.Text}>This is a user-friendly application that simplifies contact management, offering features like contact organization, search functionality, synchronization, backup, sharing, and customization options. Stay connected effortlessly with this powerful tool for managing your contacts.</p>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { duration: 2 } }
                                }}
                                className={styles.TypingField}>
                                {isSignedIn
                                    ? <span
                                        className={classNames(styles.TypingText, styles[theme])}>Hi, {userName}! Are you ready?</span>
                                    : null}
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className={styles.ButtonField}>
                                {isSignedIn
                                    ? <div>
                                        <LoadingButton title={`Let's start !`} link={'/phonebook-app/phonebook'} />
                                    </div>

                                    : <ul className={styles.BtnPanel}>
                                        <li>
                                            <LoadingButton title={'Register'} link={'/phonebook-app/register'} />
                                        </li>
                                        <li>
                                            <LoadingButton title={'Sign in'} link={'/phonebook-app/login'} />
                                        </li>
                                    </ul>}

                            </motion.div>

                        </div>
                    </div>
                </Container >
            </motion.div >
            <Footer />
        </>
    )
}
