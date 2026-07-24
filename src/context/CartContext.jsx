import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    CartReducer,
    initialState
  );

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(state.cart)
    );
  }, [state.cart]);

  // Total number of items
  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total cart price
  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;