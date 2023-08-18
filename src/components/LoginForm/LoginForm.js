import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import SubmitButton from '../SubmitButton';
import ShowPasswordButton from 'components/ShowPasswordButton';
// icons

import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'



export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [icon, setIcon] = useState(eyeOff);

    const handleEmailChange = e => {
        setEmail(e.currentTarget.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.currentTarget.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        const user = {
            email,
            password,
        }
        onSubmit(user);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

        if (showPassword === true) {
            setIcon(eye);
        } else {
            setIcon(eyeOff)
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    name='email'
                    value={email}
                    placeholder="name@example.com"
                    onChange={handleEmailChange}

                    required
                />
                <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingPasswordCustom"
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={password}
                    placeholder="Password"
                    onChange={handlePasswordChange}

                    required
                />
                <ShowPasswordButton show={showPassword} toggle={togglePasswordVisibility} icon={icon} />

                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Stay signed in" />
            </Form.Group>
            <div className="d-grid gap-2">
                <SubmitButton title={'Sign in'} onClick={handleSubmit} />
            </div>
        </Form>
    );
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
