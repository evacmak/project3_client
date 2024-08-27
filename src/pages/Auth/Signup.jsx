import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleName = (event) => setName(event.target.value);
  const handleLastName = (event) => setLastName(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault(); //isto faz com que a página não carregue como faz por predefinição

    try {
      //Same as the process.env that we saw on the server, but for Vite
      //Estamos a importar o link que temos no .env file que se chama API_URL e depois adicionar o caminho que queremos
      //o segundo argumento é o req.body do servidor
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        name,
        email,
        password,
        lastName,
      });
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className='SignupPage flex items-center justify-center min-h-screen px-4'>
      {/* Column 1: Form */}
      <div className='md:w-1/3 flex flex-col items-center justify-center'>
        <p
          className='text-center text-4xl font-medium mb-8'
          style={{ fontFamily: 'kanit, extrabold' }}>
          Signup
        </p>

        <form
          onSubmit={handleSubmit}
          className='w-full max-w-sm flex flex-col space-y-4'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleName}
            className='border-2 rounded-full'
          />

          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={lastName}
            onChange={handleLastName}
            className='border-2 rounded-full'
          />

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
            disabled={loading}
            type='submit'
            className='mt-4 w-full py-2 rounded-full border-2 hover:bg-[#ddd]'>
            Signup
          </button>
        </form>
      </div>

      {/* Column 2: Image */}
      <div className='md:w-1/3 flex items-center justify-center'>
        <img
          src='https://www.rhodeskin.com/cdn/shop/files/carousel-peach-duo_1800x.jpg?v=1718218851'
          alt='Signup illustration'
          className='w-full max-w-md rounded-lg'
        />
      </div>
      {/* Column 3 */}
      <div className='md:w-1/3 flex flex-col items-center justify-center'>
        {errorMessage && <p className='error-message'>{errorMessage} </p>}

        <p
          className='text-center text-4xl font-medium mb-8'
          style={{ fontFamily: 'kanit, extrabold' }}>
          Already have an account?
        </p>

        <Link
          to='/login'
          className='mt-4 w-full py-2 rounded-full border-2 hover:bg-[#ddd] text-center flex items-center justify-center'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
