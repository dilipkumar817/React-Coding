import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

function DisplayUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Display Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username} <br />
            <strong>Password:</strong> {'*'.repeat(user.password.length)} <br />
            <Link to={`/update/${user.id}`}>Update</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUser;