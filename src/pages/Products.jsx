import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product`,
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log('error fetching the product', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='collection-page'>
      <div className='header'>
        <h1>Featured Collection</h1>
        <p>Explore our latest and greatest products</p>
      </div>
      <div className='product-grid'>
        {products.map((product) => (
          <div
            key={product._id}
            className='product-card'>
            <Link to={`/product/${product._id}`}>
              <div>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                />

                <h2>{product.title}</h2>
                {/*    <p>${product.price.toFixed(2)}</p> */}
              </div>
            </Link>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
