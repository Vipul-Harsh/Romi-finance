import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx'; // Import your HomePage component
import Dashboard from './Pages/DashBoard.jsx'; // Import your Dashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route index element={<HomePage />} />
<Route path='/home' element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
