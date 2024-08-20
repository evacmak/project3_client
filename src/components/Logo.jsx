import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Logo = () => {
  return (
    <div className='flex items-center justify-start'>
      <NavLink
        to='/'
        className='h-full'>
        <img
          src={logo}
          alt='Clube Logo'
          className='nav-logo'
          style={{ width: '200px', height: 'auto' }}
        />
      </NavLink>
    </div>
  );
};

export default Logo;
