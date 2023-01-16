import React, { useState } from 'react';
import PropTypes from 'prop-types';


function RegisterInput({ register }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        register({
            name,
            email,
            password
        })
    }

    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
            <input type='text' placeholder='Nama' value={name}
                onChange={event => setName(event.target.value)} />
            <input type='email' placeholder='Email' value={email}
                onChange={event => setEmail(event.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />
            <button>Register</button>
        </form>
    );
}


RegisterInput.propTypes = {
    register: PropTypes.func.isRequired
};

export default RegisterInput;