import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Home() {
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

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>User Management System</h1>
      <Link to="/add" className="App1">Add User</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="App1">
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <Link to={`/display/${user.id}`} className="App1">Display</Link>
            <Link to={`/update/${user.id}`} className="App1">Update</Link>
             {/* <button onClick={() => handleDeleteUser(user.id)}>Display  </button>
             <button onClick={() => handleDeleteUser(user.id)}>Update</button> */}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;