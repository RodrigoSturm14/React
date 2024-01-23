import { ProductCard } from "./components/ProductCard.jsx";
import { Header } from './components/Header.jsx';
import { productsJson as initialProductsJson } from './mocks/productsJson.json'
// header - products - footer

export function App(){
   return(
      <>
         <Header />
         <ProductCard initialCartState={false} productsJson={initialProductsJson} />
      </>
   );
};