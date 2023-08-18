import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { ThemeContext } from '../BodyTheme/BodyTheme.js';
import classNames from 'classnames';
import styles from './UserMenu.module.scss';

import AvatarImage from '../../images/5034901-200.png';
import LogoutButton from 'components/LogoutButton';

import { getUserName } from 'redux/auth/auth-selectors';
import { logoutUser } from 'redux/auth/auth-operation';

export default function UserMenu() {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);
    const userName = useSelector(getUserName);
    const getLogout = useCallback((user) => {
        dispatch(logoutUser(user))
    }, [dispatch])

    return (
        <div className={styles.UserMenuField}>
            <img
                src={AvatarImage}
                alt="User avatar"
                width='33'
                height='33'
                className={classNames(styles.UserAvatar, styles[theme])} />
            <Nav.Link
                href='/phonebook'
                className={classNames(styles.UserName, styles[theme])}
            >Hi, {userName}!</Nav.Link >
            <div className={classNames(styles.UserLogoutFieldBurgerMenuName, styles[theme])}><LogoutButton onClick={getLogout} /></div>

        </div>
    )
}

