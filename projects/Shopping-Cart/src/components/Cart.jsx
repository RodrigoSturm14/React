import { useId } from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'

export function Cart(){
  const cartCheckBoxId = useId()
  return(
    <>
      <label className='cart-button' htmlFor='cartCheckBoxId'>
        <CartIcon />
      </label>
      <input id="cartCheckBoxId" type="checkbox" hidden/>

      <aside className="cart">
        <ul>
          <li>
            <img src="https://cdn.dummyjson.com/product-images/9/thumbnail.jpg" alt="Infinix INBOOK" />

            <div>
              <strong>Iphone</strong>
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>

          </li>
        </ul>

        <button>
        <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}