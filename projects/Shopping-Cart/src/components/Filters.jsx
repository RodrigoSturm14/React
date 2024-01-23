import { useId, useState } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters.js';

export function Filters(){
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { filters, setFilters } = useFilters()

  const handleChangeMinPrice = (event) =>{
    setFilters(prevState => ({ // el 'filterChanged' es el 'setFilters'
      ...prevState, // se copia el estado anterior del filtro, con todos sus datos
      minPrice: event.target.value // se actualiza el precio establecido con el elemento rango en el estado anterior q se acaba de copiar
    }))
  }

  const handleChangeCategory = (event) =>{
    setFilters(prevState => ({ // el 'filterChanged' es el 'setFilters'
      ...prevState,
      category: event.target.value // ????????
    }))
  }

  return(
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId} >Precio a partir de: </label>
        <input type="range" 
        id={minPriceFilterId}
        min='0'
        max='1000' 
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId} >Categorias </label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}