import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import Anon from './components/Anon';
import ProductBlush from './pages/ProductBlush';
import CartPage from './components/CartPage';
import CollectionPage from './pages/Products';

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
          path='/product/:productId'
          element={<ProductBlush />}
        />
        <Route
          path='/product'
          element={<CollectionPage />}
        />
        <Route
          path='/purchase'
          element={<CartPage />}
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
