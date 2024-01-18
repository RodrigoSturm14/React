import { useState } from 'react';
import './Filters.css';
import { Product } from './Product';

export function Filters({ filterChanged }){

  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) =>{
    setMinPrice(event.target.value);
    filterChanged(prevState => ({
      ...prevState, // se copia el estado anterior del filtro, con todos sus datos
      minPrice: event.target.value // se actualiza el precio establecido con el elemento rango en el estado anterior q se acaba de copiar
    }))
  }

  const handleChangeCategory = (event) =>{
    filterChanged(prevState => ({
      ...prevState,
      category: event.target.value // ????????
    }))
  }

  return(
    <section className='filters'>
      <div>
        <label htmlFor="price">Precio a partir de: </label>
        <input type="range" 
        id="price"
        min='0'
        max='1000' 
        onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categorias </label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}