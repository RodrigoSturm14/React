import { products as initialProducts } from "./mocks/products.json";
import { IS_DEVELOPMENT } from "./config.js";
// contextos
import { CartProvider } from "./context/cart.jsx";
// componentes
import { Product } from "./components/Product.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Cart } from "./components/Cart.jsx";
// hooks
import { useFilters } from "./hooks/useFilters.js";
import './components/Cart.css'

function App() {
  // custom hook q devuelve funcion 'filterProducts' y una forma de actualizar el estado de 'filters', 'setFilters'
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Product products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
};

export default App
