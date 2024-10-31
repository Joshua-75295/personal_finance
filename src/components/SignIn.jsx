import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; 

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (username && password) {
      navigate('/expenses');
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="container"> 
      <h2>Sign In Page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
