import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../BodyTheme/BodyTheme.js';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingButton({ title, link, size = 'lg' }) {
    const [isLoading, setLoading] = useState(false);
    const { theme } = useContext(ThemeContext);
    const [styleType, setStyleType] = useState('');

    useEffect(() => {
        if (theme === 'light') {
            setStyleType('dark');
        } else {
            setStyleType('light');
        }
    }, [theme]);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 500));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Button
            href={link}
            variant={styleType}
            size={size}
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? <Spinner size="sm" /> : `${title}`}
        </Button>
    );
}

LoadingButton.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    size: PropTypes.string,
}