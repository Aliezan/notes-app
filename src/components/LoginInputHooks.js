import React, { useState } from 'react';
import PropTypes from 'prop-types';

function LoginInputHooks({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        login({
            email,
            password
        });
    }

    return (
        <form onSubmit={onSubmit} className='login-input'>
            <input type='email' placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />
            <button>Masuk</button>
        </form>
    );
}

LoginInputHooks.propTypes = {
    login: PropTypes.func.isRequired
};

export default LoginInputHooks