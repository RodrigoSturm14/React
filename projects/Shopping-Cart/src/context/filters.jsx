import { useState, createContext } from "react";
// crear contexto
export const FiltersContext = createContext();
// proveer contexto, crear provider
export function FiltersProvider({ children }){
  const [filters, setFilters ] = useState({
    category: 'all',
    minPrice: 450
  })
  return(
    <FiltersContext.Provider value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
