import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import banner from '../assets/images/banner.png';
import blushSpicy from '../assets/images/blush-spicy.webp';
import Logo from '../components/Logo';
import background from '../assets/images/background-homepage.jpg';

const Homepage = () => {
  useContext(AuthContext);

  return (
    <div className='relative min-h-screen'>
      {/* Background Image */}

      {/* Content */}
      <div className='relative z-10 mx-4 flex flex-col items-center pt-20 pb-10'>
        <Logo />
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 p-4'>
            <h1 className='text-lg font-medium text-gray-700'>Meet Rhode</h1>
            <p className='text-lg font-medium text-gray-700'>
              At rhode, our beauty philosophy is to make one of everything
              really good. To us, that means a collection of intentional,
              high-performance essentials you reach for on a daily basis. The
              ones you love, rely on, and always come back to.
            </p>
          </div>
          {/*           <div className='w-full md:w-1/2 flex justify-center'>
            <img
              className='w-[300px] rounded-lg'
              src={blushSpicy}
              alt='image blush'
            />
          </div> */}
        </div>
        <img
          className='w-full rounded-lg mt-4'
          src={banner}
          alt='homepage banner'
        />
      </div>
    </div>
  );
};

export default Homepage;
