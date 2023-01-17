import { useDispatch } from "react-redux";
import { clearBasket } from "../features/cart/cartSlice";
import { closeModal } from "../features/cart/modalSlice";

export default function Modal () {
    const dispatch = useDispatch();

    return (
        <div className="w-[65%] py-10 rounded-lg bg-[#bde094] absolute top-[25%] left-[20%] text-[#556553] m-auto">
            <div className="text-center">
                <h3 className=" text-[#556553] font-medium text-2xl">
          Remove all list from your basket?
                </h3>
                <div className="flex justify-evenly mt-7">
                    <button onClick={() => {
                        dispatch(clearBasket());
                        dispatch(closeModal());
                    }} className="bg-[#bc5244] text-white rounded-lg py-2 px-6 font-semibold cursor-pointer">Confirm</button>
                    <button className="bg-gray-400 text-white rounded-lg py-2 px-6 font-semibold cursor-pointer" onClick={() => dispatch(closeModal()) }>Cancel</button>
                </div>
            </div>
        </div>
    );
}
