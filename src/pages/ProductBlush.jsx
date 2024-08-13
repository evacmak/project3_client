import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comments from '../components/Comments';

const ProductBlush = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const getSingleProduct = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product/${id}`,
      );
      setProduct(response.data);
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
          <h2>Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div
                key={review._id}
                style={{ marginBottom: '20px' }}>
                <h4>{review.author}</h4>
                <p>Rating: {review.rating} / 5</p>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review this product!</p>
          )}

          <Comments
            productId={productId}
            getSingleProduct={getSingleProduct}
          />
        </>
      )}
    </div>
  );
};

export default ProductBlush;
