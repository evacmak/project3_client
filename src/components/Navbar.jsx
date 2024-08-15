import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context'; // Import AuthContext

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Destructure user and logout from AuthContext

  return (
    <nav className='bg-[#A41F13] h-14 rounded-lg mt-4 mx-4'>
      <ul className='flex justify-between items-center h-full'>
        {/* Left side: Shop and About */}
        <div className='flex space-x-4 ml-4'>
          <NavLink
            className={({ isActive }) => (isActive ? 'selected' : '')}
            to='/products'
            style={{
              fontFamily: 'Bebas, sans-serif',
              color: 'white',
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
              color: 'white',
            }}>
            About
          </NavLink>
        </div>

        {/* Right side: Signup, Login, Logout, Cart */}
        <div className='flex space-x-4 mr-4'>
          {user ? ( // Check if user is logged in
            <NavLink
              className={({ isActive }) => (isActive ? 'selected' : '')}
              to='/'
              onClick={logout} // Call the logout function on click
              style={{
                fontFamily: 'Bebas, sans-serif',
                fontSize: '25px',
                fontWeight: '500',
                padding: '5px 13px',
                color: 'white',
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
                  padding: '5px 13px',
                  color: 'white',
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
                  padding: '5px 13px',
                  color: 'white',
                }}>
                Cart
              </NavLink>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
