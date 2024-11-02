import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Chatbot from './Chatbot';

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (email, password) => {
        setUsers([...users, { email, password }]);
    };

    const checkUser = (email, password) => {
        return users.some((user) => user.email === email && user.password === password);
    };

    return (
        <Router>
            <div>
                <h1>Secure Chatbot using AWS and Blockchain</h1>
                <Routes>
                    <Route path="/" element={<Login checkUser={checkUser} />} />
                    <Route path="/signup" element={<Signup addUser={addUser} />} />
                    <Route path='/chatbot' element={<Chatbot />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
