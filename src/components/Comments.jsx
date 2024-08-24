import { Rating } from '@material-tailwind/react';
//import { Select, Option } from '@material-tailwind/react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth.context';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddReview = ({ getSingleProduct, productId, setShowReviews }) => {
  const [skinType, setSkinType] = useState('A');
  const [skinConcern, setSkinConcern] = useState('A'); // Fixed typo from 'skinConcerm'
  const [comment, setComment] = useState('');
  const [userRating, setUserRating] = useState(0); // Renamed to avoid conflict with imported 'rating'
  //const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleSkinType = (event) => {
    setSkinType(event.target.value);
  };

  const handleConcern = (event) => {
    setSkinConcern(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleRating = (value) => {
    setUserRating(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const product = {
        skinType,
        skinConcern,
        comment,
        rating: userRating,
      };
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/review/${user._id}/${productId}`,
        product,
      );

      // Redirect the user to the list of projects (webpage)
      // navigate('/blush');
      getSingleProduct(productId);
      //Hide reviews field
      setShowReviews(false);
    } catch (error) {
      console.log('Error creating the project', error);
    }
  };

  // Define the rest of the components inside AddReview
  const RatedIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='custom-icon'>
      <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
    </svg>
  );

  const UnratedIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={0.5}
      stroke='currentColor'
      className='custom-icon'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
      />
    </svg>
  );

  const CustomRatingIcon = () => (
    <Rating
      label='Skin Concern'
      className='flex'
      ratedColor='red'
      ratedIcon={<RatedIcon />}
      unratedIcon={<UnratedIcon />}
      value={userRating}
      onChange={(value) => handleRating(value)}
    />
  );

  const SkinType = () => (
    <div className='w-72 h-10'>
      <select
        className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        label='Skin Type'
        onChange={handleSkinType}
        value={skinType}>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
      </select>
    </div>
  );

  const SkinConcern = () => (
    <div className='w-72 h-10'>
      <select
        className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        label='Skin Concern'
        onChange={handleConcern}
        value={skinConcern}>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
      </select>
    </div>
  );

  return (
    <form
      className='px-8 h-screen'
      onSubmit={handleSubmit}>
      <div className='py-3 h-full'>
        <div>
          {' '}
          <p>Choose your skin type</p>
          <SkinType />
        </div>
        <div>
          <p>Choose your skin concern</p>
          <SkinConcern />
        </div>
        <p>Write your review here</p>
        <textarea
          className='w-full h-40 rounded-md border-2 border-gray-500'
          value={comment}
          onChange={handleComment}
        />
        <CustomRatingIcon />
        <button type='submit'>Add Review</button>
      </div>
    </form>
  );
};

export default AddReview;
