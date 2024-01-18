import { products as initialProducts } from "./mocks/products.json";
// componentes
import { Product } from "./components/Product.jsx";
import { Header } from "./components/Header.jsx";
import { useState } from "react";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

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

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Product products={filteredProducts}/>
    </>
    
  );
};

export default App
