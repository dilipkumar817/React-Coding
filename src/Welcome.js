import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
function Welcome() {
  return (
    <div>
      <h1>Welcome to React CRUD Operations</h1>
      <Link to="/crud">
        <button className="start-button">Start</button>
      </Link>
    </div>
  );
}

export default Welcome;