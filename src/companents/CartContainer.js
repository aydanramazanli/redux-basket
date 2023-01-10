import CartItems from "./CartItems";
import { useSelector } from "react-redux";

export default function CartContainer() {
  const { total, cartItems, amount } = useSelector((store) => store.cart);

  if (amount >1 ) {
    return (
      <div>
       <h2> Your Basket</h2>
       <div>
        {cartItems.map(item=>{
            return <CartItems {...item} id ={item.id}/>
        })}
       </div>
       <div>
        Total <h3>{total} $</h3>
       </div>

       <div>
        <button>Clear basket</button>
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
