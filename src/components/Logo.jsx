import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Logo = () => {
  return (
    <NavLink
      to='/'
      className='flex justify-center items-center h-full'>
      <img
        src={logo}
        alt='Clube Logo'
        className='nav-logo mt-4'
        style={{ width: '150px', height: 'auto', marginLeft: '15px' }}
      />
    </NavLink>
  );
};

export default Logo;
