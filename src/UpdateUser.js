import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

function UpdateUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/users/${id}`, {
        username: newUsername || user.username,
        password: newPassword || user.password,
      });
      alert('user password been Updated')
      console.log('User updated:', response.data);
      fetchUser(); // Refresh user data after update
    } catch (error) {
      console.error('Update Error:', error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      
      <button onClick={handleUpdateUser}>Update User</button>
      <Link to="/">Back to Home</Link>
      
    </div>
  );
}

export default UpdateUser;