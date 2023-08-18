import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

// icons
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
// components
import SubmitButton from '../SubmitButton';
import ShowPasswordButton from 'components/ShowPasswordButton';


export default function RegisterForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [icon, setIcon] = useState(eyeOff);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                console.warn(`Field type - ${name} is not processed`);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name,
            email,
            password,
        }

        onSubmit(user)
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
                    id="floatingNameCustom"
                    type="name"
                    name='name'
                    value={name}
                    placeholder="Adam Parrish"
                    onChange={handleChange}

                    required
                />
                <label htmlFor="floatingNameCustom">Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    name='email'
                    value={email}
                    placeholder="name@example.com"
                    onChange={handleChange}

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
                    onChange={handleChange}

                    required
                />
                <ShowPasswordButton show={showPassword} toggle={togglePasswordVisibility} icon={icon} />

                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <div className="d-grid gap-2">

                <SubmitButton
                    title={'Create account now'}
                />
            </div>
        </Form>
    );
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

