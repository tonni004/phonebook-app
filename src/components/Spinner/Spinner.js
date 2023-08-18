import { Spinner } from 'react-bootstrap';
import styles from './Spinner.module.scss';

function LoadingSpinner() {
    return (
        <div className={styles.SpinnerField}>
            <Spinner animation="border" role="status" variant="dark">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    );
}

export default LoadingSpinner;