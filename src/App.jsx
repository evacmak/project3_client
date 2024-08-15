import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import Anon from './components/Anon';
import ProductBlush from './pages/ProductBlush';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Logo />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='/product/:productId'
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
