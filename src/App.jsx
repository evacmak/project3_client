import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import Anon from './components/Anon';
import ProductBlush from './pages/ProductBlush';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='/blush'
          element={<ProductBlush />}
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
