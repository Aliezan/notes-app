import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/api';
import RegisterInputHooks from '../components/RegisterInputHooks';


function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        };
    };

    return (
        <section className='register-page'>
            <h2>Isi form untuk mendaftar akun</h2>
            <RegisterInputHooks register={onRegisterHandler} />
            <p>Sudah punya akun? <Link to='/'>Masuk</Link></p>
        </section>

    );

};

export default RegisterPage