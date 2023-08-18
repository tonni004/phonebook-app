import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router';
import styles from './CloseButton.module.scss';

export default function CloseBtn() {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/');

    }
    return (
        <>
            <CloseButton
                onClick={goHome}
                aria-label="Go to Home page button"
                className={styles.CloseButton}
            />
        </>

    );
}

