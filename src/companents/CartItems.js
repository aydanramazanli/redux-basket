
import { useDispatch } from "react-redux";
import { removeItem, increace, decrease } from "../features/cart/cartSlice";

export default function CartItems({ id, img, price, amount, title }) {
  const dispatch = useDispatch();

  return (
    <article className="flex flex-row  items-center py-5 justify-around">
      <div className="w-28 h-20">
        <img
          src={img}
          alt="productImage"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-[#556553] font-semibold text-xl w-[200px]">
        {title}
      </h3>

      <div className="flex flex-row items-center">
        <span  className="bg-[#87bc44] text-white rounded-lg  px-2 font-semibold cursor-pointer"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          -
        </span>
        <h4 className="text-[#556553] font-semibold text-lg  mx-2">{amount}</h4>
        <span className='bg-[#87bc44] text-white rounded-lg px-2 font-semibold cursor-pointer' onClick={() => dispatch(increace({ id }))}>+</span>
       
      </div>
      <h3 className="text-[#556553] font-semibold text-lg  mx-2">{price} $</h3>
      <button className="bg-[#87bc44] text-white rounded-lg p-2 font-semibold cursor-pointer" onClick={() => dispatch(removeItem(id))}>Remove </button>
    </article>
  );
}
