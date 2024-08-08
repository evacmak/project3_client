import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const Homepage = () => {
  useContext(AuthContext);
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
