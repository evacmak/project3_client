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
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.product._id}>
            <span>{item.product.title}</span>
            <span>Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <p>Total: €{cartTotal}</p>
      <input
        type='text'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder='Enter address'
      />
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartPage;
