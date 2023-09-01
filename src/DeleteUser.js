import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

function DeleteUser() {
  const { id } = useParams();

  useEffect(() => {
    deleteUser();
  }, [id]);

  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Delete User</h1>
      <p>User with ID {id} has been deleted.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default DeleteUser;