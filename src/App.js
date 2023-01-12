import CartContainer from "./companents/CartContainer";
import Navbar from "./companents/Navbar";
import Modal from "./companents/Modal";
import { useDispatch, useSelector } from "react-redux";
import { totalPrice } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(totalPrice());
  }, [cartItems]);
  return (
    <div className="App">
      <Modal/>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
