import CartItems from "./CartItems";
import { useDispatch,  useSelector } from "react-redux"; 
import {openModal} from '../features/cart/modalSlice';


export default function CartContainer() {
  const dispatch = useDispatch()
  const { total, cartItems, amount } = useSelector((store) => store.cart);


  if (amount >1 ) {
    return (
      <div>
       <h2> Your Basket</h2>
       <div>
        {cartItems.map(item=>{
            return <CartItems {...item} key ={item.id}/>
        })}
       </div>
       <div>
        Total <h3>{total.toFixed(2)} $</h3>
       </div>

       <div>
        <button onClick={()=>dispatch(openModal())}>Clear basket</button>
       </div>
      </div>
    );
  }
  return (
    <div>
      Your Basket is empty
    </div>
  );
}
