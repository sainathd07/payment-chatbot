import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom';

function Login ({checkUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkUser(email, password)) {
            navigate('/chatbot')
            setError('')
        } else {
            setError('No Account Found')
        }
    }

    const handleCreateAccount = () => {
        navigate('/signup')
    }

    return(
        <form onSubmit={handleSubmit}>
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
            <button type='submit'>Login</button>
            <button onClick={handleCreateAccount}>Create Account</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}

export default Login