import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import DisplayUser from './DisplayUser'; // Create this component
import Welcome from './Welcome';
import CrudOperations from './CrudOperations';
import './styles.css';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <nav>
        <Link to="/" className="App">Welcome</Link>
          <Link to="/home" className="App">Home</Link>
           <Link to="/add" className="App"> Add Data </Link>
        <Link to="/update/:id" className="App">Update Data</Link>
          <Link to="/delete/:id" className="App">Delete Data</Link>
          <Link to="/display/:id" className="App">Display Data</Link> 
          <Link to="/crud" className="App">Crud</Link> 
         
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/display/:id" element={<DisplayUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/crud" element={<CrudOperations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
