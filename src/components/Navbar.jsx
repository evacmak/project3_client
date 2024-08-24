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
            color: '#292F36',
            fontSize: '25px',
            fontWeight: '500',
          }}>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/product'
          style={{
            fontFamily: 'kanit, semibold',
            color: '#292F36',
            fontSize: '25px',
            fontWeight: '500',
          }}>
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/about'
          style={{
            fontFamily: 'kanit, semibold',
            fontSize: '25px',
            fontWeight: '500',
            color: '#292F36',
          }}>
          About
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
                color: '#292F36',
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
                color: '#292F36',
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
                color: '#292F36',
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
                color: '#292F36',
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
