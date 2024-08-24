import { Rating } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const EditReview = ({
  getSingleProduct,
  productId,
  setEditingReviewId,
  review,
}) => {
  const [skinType, setSkinType] = useState(review.skinType);
  const [skinConcern, setSkinConcern] = useState(review.skinConcern); // Fixed typo from 'skinConcerm'
  const [comment, setComment] = useState(review.comment);
  const [userRating, setUserRating] = useState(review.rating); // Renamed to avoid conflict with imported 'rating'
  //const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const product = {
        skinType,
        skinConcern,
        comment,
        rating: userRating,
      };

      //put edits something that is already there
      console.log('review', review._id);
      console.log('user', user._id);

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/review/${user._id}/${review._id}`,
        product,
      );

      //once the project is created redirect the user to the list of projects (webpage)
      getSingleProduct(productId);
      setEditingReviewId(null);
    } catch (error) {
      console.log('Error editing the project', error);
    }
  };

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
    <div>
      <h2>Edit Project</h2>

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
          <button type='submit'>Edit Review</button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
