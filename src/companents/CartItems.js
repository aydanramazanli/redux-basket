import { BiCaretUp } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

export default function CartItems({ id, img, price, amount, title }) {
  return <article>

<img src={img} alt ='productImage'/>
<h3>{title}</h3>
<h3>{price}</h3>
<button>Remove product</button>
<div>
    <BiCaretUp/>
    <h4>{amount}</h4>
    <BiCaretDown/>
</div>
  </article>;
}
