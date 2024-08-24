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
      {!product && <h3>No product found</h3>}
      {product && (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div>
            <input
              type='number'
              name='cartQuantity'
              id='cartQuantity'
              min={1}
              value={cartQuantity}
              onChange={handleCartQuantity}
            />
            <button onClick={() => handleAddToCart(product, cartQuantity)}>
              Add to cart
            </button>
          </div>

          <h2>Reviews</h2>
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
            <p>No reviews yet. Be the first to review this product!</p>
          )}
          {user && (
            <>
              <button onClick={() => setShowReviews(!showReviews)}>
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
        </>
      )}
    </div>
  );
};

export default ProductBlush;
