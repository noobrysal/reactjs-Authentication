import React, { useState } from 'react';
import { FloatingLabel, Button } from 'flowbite-react';

const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const isPasswordStrong = (password) => {
    // Regular expression for password strength
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*.-])[A-Za-z\d#?!@$%^&*.-]{8,}$/;
    const isValid = passwordRegex.test(password);
    console.log('Password: ', password);
    console.log('Valid: ', isValid);
    return passwordRegex.test(password);
}

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (!isEmailValid(newEmail)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    }

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (!isPasswordStrong(newPassword)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        } else {
            setPasswordError('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmailValid(email)) {
            alert('Invalid email format');
            return;
        }
        if (!isPasswordStrong(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
            return;
        }
        // Handle form submission
        alert('Credentials passed the authentication');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <FloatingLabel
                    variant="outlined"
                    label="Email"
                    error={emailError}
                    onChange={handleEmailChange}
                    value={email}
                />
                <FloatingLabel
                    variant="outlined"
                    label="Password"
                    error={passwordError}
                    onChange={handlePasswordChange}
                    value={password}
                    type="password"
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
}

export default AuthForm;
