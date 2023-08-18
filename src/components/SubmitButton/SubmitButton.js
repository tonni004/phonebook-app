import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../BodyTheme/BodyTheme.js';
import PropTypes from 'prop-types';

export default function SubmitButton({ onClick, title }) {
    const { theme } = useContext(ThemeContext);
    const [styleType, setStyleType] = useState('');

    useEffect(() => {
        if (theme === 'light') {
            setStyleType('outline-dark');
        } else {
            setStyleType('dark');
        }
    }, [theme]);
    return (
        <>
            <Button
                variant={styleType}
                type="submit"
                onClick={onClick}
            >{title}</Button>
        </>
    );
}

SubmitButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}