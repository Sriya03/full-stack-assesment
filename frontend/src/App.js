import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import CompanyDetails from './components/CompanyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/companies/:id" element={<CompanyDetails />} />
        <Route path="/" element={<CompanyList />} />
      </Routes>
    </Router>
  );
}

export default App;
