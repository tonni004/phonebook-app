import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../BodyTheme/BodyTheme.js';
import PropTypes from 'prop-types';

export default function LogoutButton({ onClick }) {
    const { theme } = useContext(ThemeContext);
    const [styleType, setStyleType] = useState('');

    useEffect(() => {
        if (theme === 'light') {
            setStyleType('outline-dark');
        } else {
            setStyleType('outline-light');
        }
    }, [theme]);
    return (
        <>
            <Button
                variant={styleType}
                type="submit"
                size='sm'
                onClick={onClick}
            >Logout</Button>
        </>
    );
}

LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}