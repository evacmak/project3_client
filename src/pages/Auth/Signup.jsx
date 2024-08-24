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
    <div className='SignupPage mt-24'>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={handleName}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          value={lastName}
          onChange={handleLastName}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handlePassword}
        />

        <button
          disabled={loading}
          type='submit'>
          Signup
        </button>
      </form>

      {errorMessage && <p className='error-message'>{errorMessage} </p>}

      <p>Already have an account?</p>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Signup;
