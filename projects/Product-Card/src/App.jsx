import { ProductCard } from "./components/ProductCard.jsx";
import { Header } from './components/Header.jsx';
import { productsJson as initialProductsJson } from './mocks/productsJson.json'
import { useFilter } from "./hooks/useFilter.js";
// header - products - footer

export function App(){
   const { filterProducts, filters } = useFilter()
   const filteredProducts = filterProducts(initialProductsJson)
   console.log(filters)
   return(
      <>
         <Header />
         <ProductCard initialCartState={false} filteredProducts={filteredProducts} />
      </>
   );
};