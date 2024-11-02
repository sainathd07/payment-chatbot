import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({addUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const handleChange = (e) => {
    e.preventDefault();
    addUser(email, password);
    setEmail('');
    setPassword('');
    alert('Account created successfully')
}
const handleLoginHere = () => {
    navigate('/');
}

    return(
        <form onSubmit={handleChange}>
            <div>
                <label>Email</label>
                <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit'>Create Account</button>
            <p>Have an Account?</p>
            <button onClick={handleLoginHere}>Login Here</button>
        </form>
    )
}

export default Signup