import { useContext } from "react"
import { FiltersContext } from "../context/filters.jsx";
// custom hook - incluye logica de filtros, devuelve funcion filterProducts q devuelve 
// los productos filtrados y funcion setFilter q actualiza los filtros 
export function useFilters(){

  const {filters, setFilters} = useContext(FiltersContext);
  
  const filterProducts = (products) =>{
    return products.filter(product => {
      return(
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      );
    });
  };
  return { filters, filterProducts, setFilters };
};