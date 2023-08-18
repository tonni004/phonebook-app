import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classNames from 'classnames';
import styles from './NavBar.module.scss';

import { ThemeContext } from 'components/BodyTheme/BodyTheme.js';
import ToggleThemeButton from 'components/ToggleThemeButton';
import UserMenu from 'components/UserMenu';
// import BurgerMenu from "components/BurgerMenu";


import { getIsAuthenticated } from 'redux/auth/auth-selectors';


export default function Navigation() {
    const isSignedIn = useSelector(getIsAuthenticated);
    const { theme } = useContext(ThemeContext);
    return (
        <>

            <Navbar data-bs-theme="light" className={styles.NavBar}>

                <ul className={styles.NavLink}>
                    <li className={classNames(styles.NavLinkItem, styles[theme])}>
                        <Nav.Link href="/">Home</Nav.Link>
                    </li>

                    {isSignedIn &&
                        <li className={classNames(styles.NavLinkItem, styles[theme])}>
                            <Nav.Link href="/phonebook">Phonebook</Nav.Link>
                        </li>

                    }

                    <li className={classNames(styles.NavLinkItem, styles[theme])}>
                        <Nav.Link href="https://github.com/tonni004/r-hw2-phonebook">GitHub</Nav.Link>
                    </li>
                    <div className={classNames(styles.ToggleButtonField, styles[theme])}>
                        <ToggleThemeButton />

                    </div>

                </ul>

                {isSignedIn && <UserMenu />}

            </Navbar>

        </>
    )
}


