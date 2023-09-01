import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

function AddUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        username,
        password,
      });
      alert('User has been added succesfully');
      console.log('User added:', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <button onClick={handleAddUser}>Add User</button><br></br>
      <Link to="/">Back to Home</Link>
      
    </div>
  );
}

export default AddUser;