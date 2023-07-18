import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navigation';
import Books from './components/Books';
import Categories from './components/Classifications';

function RouterNav() {
  return (
    <>
      <BrowserRouter className="app-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterNav;
