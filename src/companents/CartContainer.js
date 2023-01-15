import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/cart/modalSlice";

export default function CartContainer() {
  const dispatch = useDispatch();
  const { total, cartItems, amount } = useSelector((store) => store.cart);

  if (amount >= 1) {
    return (
      <>
        <div>
          {cartItems.map((item) => {
            return <CartItems {...item} key={item.id} />;
          })}
        </div>
        <hr />
        <div className="flex flex-row justify-between p-5">
          <h3 className="text-[#87bc44] font-semibold text-xl">
            Total : <span className="text-[#556553]">{total.toFixed(2)} $</span>
          </h3>
     
            <button
              className="bg-[#87bc44] text-white rounded-lg p-2 font-semibold cursor-pointer"
              onClick={() => dispatch(openModal())}
            >
              Clear basket
            </button>
        
        </div>
      </>
    );
  }
  return (
    <div className="text-[#556553] font-medium text-2xl text-center my-10">
      Your Basket is empty{" "}
    </div>
  );
}
