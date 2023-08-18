import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCallback, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from '../../components/BodyTheme/BodyTheme.js';
import classNames from "classnames";
import styles from './LoginPage.module.scss';
// components
import Container from "components/Container";
import BackgroundOverlay from "components/BackgroundOverlay";
import PageBackground from "components/PageBackground";
import FormSection from "components/FormSection";
import LoginForm from "components/LoginForm";
import CloseBtn from "components/CloseButton";
// operation
import { loginUser } from "redux/auth/auth-operation";
import ToggleThemeButton from "components/ToggleThemeButton";

export default function LoginPage() {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const onLogIn = useCallback((user) => {
        dispatch(loginUser(user))
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
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >

            <PageBackground>
                <BackgroundOverlay>
                    <Container>
                        <FormSection>
                            <motion.div
                                variants={itemVariants} >
                                <div className={classNames(styles.ToggleButtonField, styles[theme])}><ToggleThemeButton /></div>
                                <CloseBtn />
                                <div
                                    className={classNames(styles.LoginFormField)}>
                                    <h2 className={styles.LoginPageTitle}>Account sign in</h2>
                                    <div className={styles.NotAMemberDiv}>
                                        <p className={styles.NotAMemberText}>Not a member?</p>
                                        <Link to="/register">Create a free account</Link>
                                    </div>
                                    <LoginForm onSubmit={onLogIn} />
                                </div>
                            </motion.div>
                        </FormSection>
                    </Container>
                </BackgroundOverlay>
            </PageBackground>

        </motion.div>

    )
}
