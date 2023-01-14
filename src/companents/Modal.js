import { useDispatch } from "react-redux";
import { clearBasket } from "../features/cart/cartSlice";
import { closeModal } from "../features/cart/modalSlice";

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <div className="w-[80%] h-56 bg-orange-400 m-auto">
      <div>
        <h3>
          Remove all list from your basket?
        </h3>
        <div>
        <button onClick={()=>{
         dispatch( clearBasket())
         dispatch(closeModal()) 
        }} className="bg-red-500">Confirm</button>
        <button className="bg-gray-500" onClick={()=> dispatch(closeModal()) }>Cancel</button>
        </div>
      </div>
    </div>
  )
}
