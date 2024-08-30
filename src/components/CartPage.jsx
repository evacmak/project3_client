import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/cart.context';
import axios from 'axios';

function CartPage() {
  //const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState('');

  const { cart, cartTotal } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const purchaseData = {
        address,
        products: cart,
        total: cartTotal,
      };
      const response = await axios.post('/api/purchase', purchaseData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

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

      <div className='flex items-start justify-center mt-10 px-4 mb-4'>
        <div className='right md:w-1/2 flex flex-col justify-start mr-4 bg-[#E0DBD8] rounded-lg'>
          <h1
            className='w-full py-2 rounded-lg text-center text-gray-700'
            style={{
              fontFamily: 'kanit, regular',
              fontSize: '50px',
              marginBottom: '20px',
            }}>
            Cart
          </h1>
          <ul
            className='text-gray-700 text-center'
            style={{
              fontFamily: 'kanit, extralight',
              marginBottom: '20px',
            }}>
            {cart.map((item) => (
              <li key={item.product._id}>
                <span>{item.product.title}</span>
                <span>Quantity: {item.quantity}</span>
              </li>
            ))}
          </ul>
          <p
            className='text-gray-700 text-center'
            style={{
              fontFamily: 'kanit, extralight',
              marginBottom: '20px',
            }}>
            Total: €{cartTotal}
          </p>
          <div className='flex justify-center'>
            <input
              className='mt-4 w-80 py-2 border-2 border-white text-center mx-auto rounded-full'
              style={{
                fontFamily: 'kanit, extralight',
                marginBottom: '20px',
              }}
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Enter address'
            />
          </div>
          <button
            className='mt-4 w-80 py-2 border-2 border-white text-center mx-auto rounded-full hover:bg-[#ddd] text-gray-700'
            style={{
              fontFamily: 'kanit, extralight',
              marginBottom: '20px',
            }}
            onClick={handleCheckout}>
            Checkout
          </button>
        </div>

        <div className='left md:w-1/2 flex flex-col items-center justify-center'>
          <img
            src='https://www.rhodeskin.com/cdn/shop/files/blush-claims_2480x.jpg?v=1717654938'
            alt=''
            className='object-cover rounded-lg w-full'
            style={{ height: '385px' }}
          />
        </div>
      </div>
      <div className='w-full h-64 overflow-hidden mt-10 px-4 rounded-lg relative'>
        <img
          src='https://www.rhodeskin.com/cdn/shop/files/Mask_Group-1_97d2ee21-b57b-4ad7-9f35-ad98a4db463f_1800x.jpg?v=1695070880'
          alt='Signup Banner'
          className='w-full h-full object-cover rounded-lg'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1
            className='text-white text-5xl font-medium drop-shadow-xl'
            style={{ fontFamily: 'kanit, extrabold' }}>
            Thank you for glowing with us.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
