import React from "react";
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import Form from 'react-bootstrap/Form';

const Filter = ({ value, onChange }) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="formGroupInput">
                <Form.Label className={styles.FilterLabel}>Find contact by name:</Form.Label>
                <Form.Control className={styles.FilterInput} type="text" placeholder="Adam Parrish" value={value}
                    onChange={onChange} />
            </Form.Group>
        </>
    )

}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter;