import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BannerProducts from '../assets/images/banner products.webp';

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
    <div className='collection-page mx-4'>
      <div className='header relative mx-auto text-center'>
        {/* Container with relative positioning */}
        <div className='relative'>
          <img
            className='rounded-lg mt-5 w-full'
            src={BannerProducts}
            alt='banner products page'
          />
          {/* Absolute positioned text */}
          <div className='absolute inset-0 flex flex-col justify-center items-center'>
            <h1
              className=' text-white'
              style={{ fontFamily: 'kanit, semibold', fontSize: '40px' }}>
              FEATURED COLLECTION
            </h1>
            <p
              className='text-lg text-white mt-1'
              style={{ fontFamily: 'kanit, light', fontSize: '20px' }}>
              Explore our latest and greatest products
            </p>
          </div>
        </div>
      </div>
      <div className='product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto mt-8'>
        {products.map((product) => (
          <div
            key={product._id}
            className='product-card border rounded-lg p-4'>
            <Link to={`/product/${product._id}`}>
              <div>
                <img
                  className='w-full h-48 object-cover rounded-lg'
                  src={product.imageUrl}
                  alt={product.title}
                />
                <h2
                  className='text-xl font-medium mt-4 text-center'
                  style={{ fontFamily: 'kanit, extralight' }}>
                  {product.title}
                </h2>
                <h3
                  className='mt-4 text-center text-gray-600'
                  style={{ fontFamily: 'kanit, extralight' }}>
                  {product.subtitle}
                </h3>
                {/* <p>${product.price.toFixed(2)}</p> */}
              </div>
              <button className='mt-4 w-full py-2 rounded-full'>
                See product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
