import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        },
      );
      //first we store the token
      storeToken(response.data.authToken);

      //then we use the same token to verify the user
      authenticateUser();

      navigate('/');

      //console.log(response.data);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className='LoginPage mt-24'>
      <div className='w-full h-64 overflow-hidden mt-24 px-4 rounded-lg relative'>
        <img
          src='https://www.rhodeskin.com/cdn/shop/files/lip-set-1_1800x.jpg?v=1721356290'
          alt='Signup Banner'
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1
            className='text-white text-5xl font-medium drop-shadow-xl'
            style={{ fontFamily: 'kanit, extrabold' }}>
            Login for exclusive deals.
          </h1>
        </div>
      </div>

      {/* Columns Container */}
      <div className='flex items-center justify-center mt-10 px-4'>
        {/* Column 1: Form */}
        <div className='md:w-1/3 flex flex-col items-center justify-center'>
          <p
            className='text-center text-4xl font-medium mb-8'
            style={{ fontFamily: 'kanit, extrabold' }}>
            Login
          </p>

          <form
            onSubmit={handleSubmit}
            className='w-full max-w-sm flex flex-col space-y-4'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={handleEmail}
              className='border-2 rounded-full'
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={handlePassword}
              className='border-2 rounded-full'
            />
            <button
              type='submit'
              className='mt-4 w-full py-2 rounded-full border-2 hover:bg-[#ddd]'>
              Login
            </button>
          </form>

          {errorMessage && <p>{errorMessage}</p>}
        </div>

        {/* Column 2: Additional Image (optional) */}
        <div className='md:w-1/3 flex items-center justify-center'>
          <img
            src='https://www.rhodeskin.com/cdn/shop/files/PDP-Desktop-2_49f35727-c353-45dd-879e-88609689320e_1800x.jpg?v=1707782607'
            alt='Signup illustration'
            className='w-full max-w-md rounded-lg'
          />
        </div>

        {/* Column 3: Login Link */}
        <div className='md:w-1/3 flex flex-col items-center justify-center'>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}

          <p
            className='text-center text-4xl font-medium mb-8'
            style={{ fontFamily: 'kanit, extrabold' }}>
            Don't have an account?
          </p>

          <Link
            to='/signup'
            className='mt-4 w-full py-2 rounded-full border-2 hover:bg-[#ddd] text-center flex items-center justify-center'>
            Sign up
          </Link>
        </div>
      </div>

      <div className='w-full h-64 overflow-hidden mt-10 px-4 rounded-lg relative'>
        <img
          src='https://www.rhodeskin.com/cdn/shop/files/Mask_Group-1_97d2ee21-b57b-4ad7-9f35-ad98a4db463f_1800x.jpg?v=1695070880'
          alt='Signup Banner'
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1
            className='text-white text-5xl font-medium drop-shadow-xl'
            style={{ fontFamily: 'kanit, extrabold' }}>
            Join us on the rhode to an effortless glow.
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Login;
