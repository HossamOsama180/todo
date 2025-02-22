import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Complete from './Complete';
import Delete from './Delete';
import Archive from './Archive';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/Complete' element={<Complete />} />
          <Route path='/Delete' element={<Delete />} />
          <Route path='/Archive' element={<Archive />} />
        </Routes>

      </BrowserRouter>




    </>
  );
}

export default App;
