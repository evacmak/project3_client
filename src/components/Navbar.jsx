import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import Logo from './Logo';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className='bg-[rgba(224,219,216,0.5)] h-16 rounded-lg fixed top-5 left-0 right-0 mx-4 z-50 flex items-center justify-between px-4'>
      {/* Left section: Home, Shop, About */}
      <div className='flex space-x-8'>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/'
          style={{
            fontFamily: 'kanit, semibold',
            color: '#FFFFFF',
            fontSize: '25px',
            fontWeight: '500',
            textShadow: '2px 2px 4px gray',
          }}>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/product'
          style={{
            fontFamily: 'kanit, semibold',
            color: '#FFFFFF',
            fontSize: '25px',
            fontWeight: '500',
            textShadow: '2px 2px 4px gray',
          }}>
          Shop
        </NavLink>
      </div>

      {/* Center section: Logo */}
      <div className='flex-grow flex justify-center'>
        <Logo />
      </div>

      {/* Right section: Signup, Login, Cart, Logout */}
      <div className='flex space-x-8'>
        {user ? (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/purchase'
              style={{
                fontFamily: 'kanit, semibold',
                fontSize: '25px',
                fontWeight: '500',
                color: '#FFFFFF',
                textShadow: '2px 2px 4px gray',
              }}>
              Cart
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/'
              onClick={logout}
              style={{
                fontFamily: 'kanit, semibold',
                fontSize: '25px',
                fontWeight: '500',
                color: '#FFFFFF',
                textShadow: '2px 2px 4px gray',
              }}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/signup'
              style={{
                fontFamily: 'kanit, semibold',
                fontSize: '25px',
                fontWeight: '500',
                color: '#FFFFFF',
                textShadow: '2px 2px 4px gray',
              }}>
              Signup
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/login'
              style={{
                fontFamily: 'kanit, semibold',
                fontSize: '25px',
                fontWeight: '500',
                color: '#FFFFFF',
                textShadow: '2px 2px 4px gray',
              }}>
              Login
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
