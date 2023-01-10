import {BiBasket} from "react-icons/bi";
import { useSelector } from 'react-redux';

export default function Navbar() {

const {amount} = useSelector((store)=>store.cart)
  return (
    <div>
        <h2>Shopping cart</h2>
     
     <BiBasket/>
  <h3>{amount}</h3>
    </div>
  )
}
