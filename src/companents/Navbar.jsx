import {BiBasket} from "react-icons/bi";
import { useSelector } from 'react-redux';

export default function Navbar() {

const {amount} = useSelector((store)=>store.cart)
  return (
    <div className="flex items-center justify-around py-5">
      <h2 className ="text-[#556553] font-medium text-2xl"> Your Basket</h2>
     <div >
     <BiBasket className="text-xl relative"/>
  <h3 className ="absolute right-[162px] top-[13px] text-[#87bc44] font-semibold">{amount}</h3>
     </div>

    </div>
  )
}
