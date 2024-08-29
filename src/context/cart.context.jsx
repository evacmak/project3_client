import { useState, useEffect, createContext } from 'react';

//Create context
const CartContext = createContext();

//Create the wrapper function
function CartProviderWrapper(props) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddToCart = (product, quantity) => {
    console.log('hello');
    const index = cart.findIndex((item) => item._id === product._id);
    //Add new product
    if (index === -1) {
      setCart([...cart, { product, quantity }]);
      const total = calculateCartTotal([...cart, { product, quantity }]);
      setCartTotal(total);
      //setCartTotal(calculateCartTotal());
    } else {
      const newCart = [...cart];
      newCart[index].quantity = quantity;
      setCart(newCart);

      const total = calculateCartTotal(newCart);
      setCartTotal(total);
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotal', cartTotal);
  };

  const handleRemoveProduct = (productId) => {
    const newCart = cart.filter((item) => item._id !== productId);
    const total = calculateCartTotal(newCart);

    setCart(newCart);
    setCartTotal(total);
  };

  const calculateCartTotal = (cartArray) => {
    return cartArray.reduce((acc, val) => {
      return acc + val.product.price * val.quantity;
    }, 0);
  };

  //Get the cart from the localStorage or set initial values
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = localStorage.getItem('cartTotal') || 0;
    setCart(cart);
    setCartTotal(total);
  }, []);

  //update localstorage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      saveToLocalStorage();
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, cartTotal, handleAddToCart, handleRemoveProduct }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProviderWrapper };
