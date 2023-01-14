import CartContainer from "./companents/CartContainer";
import Navbar from "./companents/Navbar";
import Modal from "./companents/Modal";
import { useDispatch, useSelector } from "react-redux";
import { totalPrice, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(totalPrice());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return(<div>
      <h1>Loading...</h1>
    </div>)
  }
  return (
    <div className="App">
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
