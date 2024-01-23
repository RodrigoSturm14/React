import { products as initialProducts } from "./mocks/products.json";
import { IS_DEVELOPMENT } from "./config.js";
// componentes
import { Product } from "./components/Product.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
// hooks
import { useFilters } from "./hooks/useFilters.js";

function App() {
  // custom hook q devuelve funcion 'filterProducts' y una forma de actualizar el estado de 'filters', 'setFilters'
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Product products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
};

export default App
