import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className='bg-[rgba(224,219,216,0.5)] h-14 rounded-lg fixed top-0 left-0 right-0 mx-4 z-50 border-b'>
      <ul className='flex justify-center items-center space-x-8 h-full'>
        {/* Home, Shop, About */}
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/'
          style={{
            fontFamily: 'Bebas, sans-serif',
            color: '#292F36',
            fontSize: '25px',
            fontWeight: '600',
          }}>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/products'
          style={{
            fontFamily: 'Bebas, sans-serif',
            color: '#292F36',
            fontSize: '25px',
            fontWeight: '600',
          }}>
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/about'
          style={{
            fontFamily: 'Bebas, sans-serif',
            fontSize: '25px',
            fontWeight: '600',
            color: '#292F36',
          }}>
          About
        </NavLink>

        {/* Conditional rendering based on user authentication */}
        {user ? (
          <NavLink
            className={({ isActive }) => (isActive ? 'selected' : '')}
            to='/'
            onClick={logout}
            style={{
              fontFamily: 'Bebas, sans-serif',
              fontSize: '25px',
              fontWeight: '500',
              color: '#292F36',
            }}>
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/signup'
              style={{
                fontFamily: 'Bebas, sans-serif',
                fontSize: '25px',
                fontWeight: '500',
                color: '#292F36',
              }}>
              Signup
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/login'
              style={{
                fontFamily: 'Bebas, sans-serif',
                fontSize: '25px',
                fontWeight: '500',
                color: '#292F36',
              }}>
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/cart'
              style={{
                fontFamily: 'Bebas, sans-serif',
                fontSize: '25px',
                fontWeight: '500',
                color: '#292F36',
              }}>
              Cart
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
