import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Comments from '../components/Comments';
import EditReview from '../components/Edit Comments';
import { AuthContext } from '../context/auth.context';
import { CartContext } from '../context/cart.context';

const ProductBlush = () => {
  const [product, setProduct] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [cartQuantity, setCartQuantity] = useState(1);

  const { productId } = useParams();
  const { user } = useContext(AuthContext);
  const { handleAddToCart, handleRemoveProduct } = useContext(CartContext);

  const handleCartQuantity = (e) => {
    setCartQuantity(e.target.value);
  };

  const getSingleProduct = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product/${id}`,
      );
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log('error fetching the product', error);
    }
  };

  useEffect(() => {
    getSingleProduct(productId);
  }, [productId]);

  return (
    <div>
      <div className='w-full h-64 overflow-hidden mt-24 px-4 rounded-lg relative'>
        <img
          src='https://www.rhodeskin.com/cdn/shop/files/pdp-desktop-1_2480x.jpg?v=1685988550'
          alt='Signup Banner'
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1
            className='text-white text-5xl font-medium drop-shadow-xl'
            style={{ fontFamily: 'kanit, extrabold' }}>
            An effortless glow.
          </h1>
        </div>
      </div>
      {!product && <h3>No product found</h3>}
      {product && (
        <>
          <div
            className='flex items-center justify-center mt-10
       px-4'>
            <div className='md:w-1/2 flex flex-col justify-center mr-4'>
              <h1
                className=' text-gray-700 text-left'
                style={{
                  fontFamily: 'kanit, regular',
                  fontSize: '50px',
                  marginBottom: '20px',
                }}>
                {product.title}
              </h1>
              <p
                className='text-gray-700 text-left'
                style={{
                  fontFamily: 'kanit, extralight',
                  marginBottom: '20px',
                }}>
                {product.description}
              </p>
              <p
                className='text-gray-700 text-left'
                style={{
                  fontFamily: 'kanit, extralight',
                  marginBottom: '20px',
                }}>
                Product price: {product.price}€
              </p>
              <div>
                <input
                  type='number'
                  name='cartQuantity'
                  id='cartQuantity'
                  min={1}
                  value={cartQuantity}
                  onChange={handleCartQuantity}
                  className='border-2 rounded-full text-center mt-4'
                />
                <button
                  onClick={() => handleAddToCart(product, cartQuantity)}
                  className='mt-4 w-full py-2 rounded-full border-2 hover:bg-[#ddd]'>
                  Add to cart
                </button>
              </div>
            </div>
            <div className='md:w-1/2 flex flex-col items-center justify-center'>
              <img
                src={product.imageUrl}
                alt=''
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>

          <div className='mx-4 flex flex-col items-center mt-10 bg-[#E0DBD8] rounded-lg '>
            <h2
              className=' text-gray-700'
              style={{
                fontFamily: 'kanit, regular',
                fontSize: '50px',
                marginBottom: '20px',
              }}>
              Reviews
            </h2>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <>
                  {editingReviewId === review._id ? (
                    <EditReview
                      key={review._id}
                      review={review}
                      getSingleProduct={getSingleProduct}
                      setEditingReviewId={setEditingReviewId}
                      productId={productId}
                    />
                  ) : (
                    <div
                      key={review._id}
                      style={{ marginBottom: '20px' }}>
                      <h4>{review.author}</h4>
                      <p>Rating: {review.rating} / 5</p>
                      <p>{review.comment}</p>
                    </div>
                  )}

                  {review.author === user?._id && (
                    <button onClick={() => setEditingReviewId(review._id)}>
                      Edit Review
                    </button>
                  )}
                </>
              ))
            ) : (
              <p
                className='text-gray-700 text-left'
                style={{
                  fontFamily: 'kanit, extralight',
                  marginBottom: '10px',
                }}>
                No reviews yet. Be the first to review this product!
              </p>
            )}
            {user && (
              <>
                <button
                  onClick={() => setShowReviews(!showReviews)}
                  className='mt-4 py-2 rounded-full border-2 w-60 text-gray-700 border-gray-700'
                  style={{
                    fontFamily: 'kanit, extralight',
                    marginBottom: '20px',
                    //color: 'gray',
                  }}>
                  Add Review
                </button>
                {showReviews && (
                  <Comments
                    productId={productId}
                    getSingleProduct={getSingleProduct}
                    setShowReviews={setShowReviews}
                  />
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductBlush;
