import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import banner from '../assets/images/banner.png';

const Homepage = () => {
  useContext(AuthContext);
  return (
    <div className='mx-4 bg-[#FAF5F1]'>
      <img
        className='w-full rounded-lg mt-4'
        src={banner}
        alt='homepage banner'
      />
    </div>
  );
};

export default Homepage;
