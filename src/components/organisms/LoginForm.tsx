'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import PasswordInput from '../molecules/PasswordInput'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

function LoginForm() {
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
            <Button>Login</Button>
            <Link href="/register" className="text-center text-customBlue">Crea una cuenta</Link>
        </form>
    );
}

export default LoginForm;