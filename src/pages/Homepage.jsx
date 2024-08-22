import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import banner from '../assets/images/banner.png';
import HaileyBlush from '../assets/images/HaileyBlush.webp';

const Homepage = () => {
  useContext(AuthContext);

  return (
    <div className='relative min-h-screen'>
      {/* Background Image */}

      {/* Content */}
      <div className='relative z-10 mx-4 flex flex-col items-center pt-20 pb-10'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 p-4'>
            <h1
              className='text-lg font-medium text-gray-700'
              style={{
                fontFamily: 'kanit, regular',
                fontSize: '25px',
                marginBottom: '8px',
              }}>
              Meet rhode
            </h1>
            <div>
              <p
                className='text-lg font-medium text-gray-700'
                style={{ fontFamily: 'kanit, extralight' }}>
                At rhode, our beauty philosophy is to make one of everything
                really good. To us, that means a collection of intentional,
                high-performance essentials you reach for on a daily basis. The
                ones you love, rely on, and always come back to.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2 flex justify-end'>
            <img
              className='w-[600px] rounded-lg zoom-image'
              src={HaileyBlush}
              alt='image blush'
            />
          </div>
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
