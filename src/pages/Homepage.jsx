import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import banner from '../assets/images/banner.png';
import blushSpicy from '../assets/images/blush-spicy.webp';

const Homepage = () => {
  useContext(AuthContext);
  return (
    <div className='mx-4 bg-[##FFFFFF]'>
      <div>
        <img
          className='w-[500px] rounded-lg'
          src={blushSpicy}
          alt='image blush'
        />
      </div>
      <img
        className='w-full rounded-lg mt-4'
        src={banner}
        alt='homepage banner'
      />
    </div>
  );
};

export default Homepage;
