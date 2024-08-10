import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context'; // Import AuthContext

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Destructure user and logout from AuthContext

  return (
    <nav className='w-full'>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/products'
          style={{
            fontFamily: 'Bebas, sans-serif',
            color: '#333333',
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
            color: '#333333',
            fontSize: '25px',
            fontWeight: '600',
          }}>
          About
        </NavLink>

        {user ? ( // Check if user is logged in
          <>
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/'
              onClick={logout} // Call the logout function on click
              style={{
                fontFamily: 'Bebas, sans-serif',
                fontSize: '25px',
                fontWeight: '500',
                backgroundColor: '#3526DE',
                padding: '5px 13px',
                color: 'white',
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
                fontFamily: 'Bebas, sans-serif',
                fontSize: '25px',
                fontWeight: '500',
                backgroundColor: '#3526DE',
                padding: '5px 13px',
                color: 'white',
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
                backgroundColor: '#3526DE',
                padding: '5px 13px',
                color: 'white',
              }}>
              Login
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
