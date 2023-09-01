import React from 'react';
import { Link } from 'react-router-dom';

function CrudOperations() {
  return (
    <div>
      <h1>CRUD Operations</h1>
      <div className="crud-buttons">
        <Link to="/add">
          <button className="crud-button">Add User</button>
        </Link>
        <Link to="/update/:id">
          <button className="crud-button">Update User</button>
        </Link>
        <Link to="/delete/:id">
          <button className="crud-button">Delete User</button>
        </Link>
        <Link to="/display/:id">
          <button className="crud-button">Display User</button>
        </Link>
      </div>
    </div>
  );
}

export default CrudOperations;