'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import PasswordInput from '../molecules/PasswordInput'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button>Register</Button>
            <Link href="/login" className="text-center text-customBlue">Inicia Sesión</Link>
        </form>
    );
}

export default RegisterForm;