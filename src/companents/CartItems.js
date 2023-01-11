import { BiCaretUp } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {removeItem,increace, decrease} from '../features/cart/cartSlice';

export default function CartItems({ id, img, price, amount, title }) {
  const dispatch = useDispatch()

  return <article>

<img src={img} alt ='productImage'/>
<h3>{title}</h3>
<h3>{price}</h3>
<button onClick={()=>dispatch(removeItem(id))}>Remove product</button>
<div>
    <BiCaretUp onClick={()=>dispatch(increace({id}))}/>
    <h4>{amount}</h4>
    <BiCaretDown onClick={()=>{
      if(amount===1){
        dispatch(removeItem(id))
        return;
      }
      dispatch(decrease({id}))}}/>
</div>
  </article>;
}
