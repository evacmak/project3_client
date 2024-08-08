import { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import Anon from './components/Anon';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='/signup'
          element={
            <Anon>
              <Signup />
            </Anon>
          }
        />
        <Route
          path='/login'
          element={
            <Anon>
              <Login />
            </Anon>
          }
        />
      </Routes>
    </>
  );
}

export default App;
