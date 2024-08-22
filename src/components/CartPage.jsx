import { useState, useEffect } from 'react';
import axios from 'axios';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    axios
      .get('/api/purchases')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCartItems(response.data);
        } else {
          console.error('API response is not an array');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddItem = (product) => {
    const newProduct = {
      productId: product._id,
      quantity: 1,
    };
    axios
      .post('/api/purchase', newProduct)
      .then(() => {
        setCartItems([...cartItems, newProduct]);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    axios
      .patch(`/api/purchase/${productId}`, { quantity: newQuantity })
      .then(() => {
        setCartItems(
          cartItems.map((item) => {
            if (item.productId === productId) {
              return { ...item, quantity: newQuantity };
            }
            return item;
          }),
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRemoveItem = (productId) => {
    axios
      .delete(`/api/purchase/${productId}`)
      .then(() => {
        setCartItems(cartItems.filter((item) => item.productId !== productId));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleCheckout = async () => {
    try {
      const purchaseData = {
        address,
        products: cartItems,
      };
      const response = await axios.post('/api/purchase', purchaseData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId}>
            <span>{item.product.title}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => handleRemoveItem(item.productId)}>
              Remove
            </button>
            <button
              onClick={() =>
                handleUpdateQuantity(item.productId, item.quantity + 1)
              }>
              +
            </button>
          </li>
        ))}
      </ul>
      <p>Total: €{calculateTotal()}</p>
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
