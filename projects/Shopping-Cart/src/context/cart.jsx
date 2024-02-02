import { useState, createContext } from "react";
// 1 crear contexto
export const CartContext = createContext()

// 2 crear provider
export function CartProvider({ children }){
  const [cart, setCart] = useState([])

  const addToCart = product =>{
    // checkear si el producto ya esta en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    // si esta en el carrito:
    if(productInCartIndex >= 0){
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    // si es producto nuevo:
    setCart(prevState =>([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  const removeFromCart = product => {
    setCart(cart.filter(item => item.id !== product.id))
  }
  const clearCart = () =>{
    setCart([])
  }

  return(
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
} 

