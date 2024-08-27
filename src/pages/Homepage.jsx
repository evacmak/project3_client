import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import banner from '../assets/images/banner.png';
import HaileyBlush from '../assets/images/HaileyBlush.webp';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className='relative min-h-screen'>
      <div className='relative z-10 mx-4 flex flex-col items-center pb-10'>
        <img
          className='w-full rounded-lg mb-10 mt-5'
          src={banner}
          alt='homepage banner'
        />
        <div className='flex flex-col md:flex-row items-center '>
          <div className='w-full md:w-1/2 p-4 rounded-lg h-full flex flex-col justify-center'>
            <h1
              className=' text-gray-700'
              style={{
                fontFamily: 'kanit, regular',
                fontSize: '30px',
                marginBottom: '20px',
              }}>
              Meet rhode
            </h1>
            <div>
              <p
                className='text-gray-700'
                style={{
                  fontFamily: 'kanit, extralight',
                  marginBottom: '20px',
                }}>
                At rhode, our beauty philosophy is to make one of everything
                really good. To us, that means a collection of intentional,
                high-performance essentials you reach for on a daily basis. The
                ones you love, rely on, and always come back to.
              </p>
              <p
                className=' text-gray-700'
                style={{
                  fontFamily: 'kanit, extralight',
                  marginBottom: '20px',
                }}>
                To RESTORE and NURTURE the skin you have now for lasting results
                that reveal themselves over time.
              </p>
              <p
                className=' text-gray-700'
                style={{
                  fontFamily: 'kanit, extralight',
                  marginBottom: '40px',
                }}>
                This is a school project, not the real Rhode shop. So, be nice
                ❤️
              </p>
              <button
                onClick={() => navigate('/product')}
                className='mt-4 w-full py-2 rounded-full border-2 hover:bg-[#ddd]'
                style={{ fontFamily: 'kanit, regular' }}>
                Explore our products
              </button>
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
      </div>
    </div>
  );
};

export default Homepage;
