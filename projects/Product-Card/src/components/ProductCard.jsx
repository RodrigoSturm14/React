import { useState } from 'react';
import { CartFilled, CartNotFilled } from './Icons.jsx';
import './ProductCard.css'

export function ProductCard({ filteredProducts , initialCartState}){
  const [cartState, setCart] = useState(initialCartState);

  const cartNotFilled = <CartNotFilled />
  const cartFilled = <CartFilled />

  const cart = cartState ? cartFilled : cartNotFilled ;
  const bttCartClassName = cartState ? 'prCard-cartButton cartFilled' : 'prCard-cartButton cartNotFilled';

  const handleClick = () =>{
    setCart(!cartState);
  }
  
  return(
    <>
      <section className='productsWrap'>
        <ul>
          {
            filteredProducts.map(filteredProducts => (
              <li key={filteredProducts.id} className="prCard">
                <div className="prCard-imageContainer">
                  <img className="prCard-image" alt="Repositor Automatico - Inicio" src={filteredProducts.image} />
                </div>

                <div className="prCard-infoContainer">
                  <h3 className="prCard-prName">
                    {filteredProducts.name}
                  </h3>
                  <h4 className="prCard-prStock">
                    Cajas disponibles: {filteredProducts.stock}
                  </h4>
                </div>
                <div className="prCard-buttonContainer">
                  <button className="prCard-orderButton">
                    Ordenar
                  </button>
                  <button className={bttCartClassName} onClick={handleClick}>
                    <span className='prCard-cartButton-FillIt'>{cart}</span>
                    <span className='prCard-cartButton-dontFillIt'>
                      <CartFilled />
                    </span>
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  );
};