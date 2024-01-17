import { products } from "./mocks/products.json";
import { Product } from "./components/Product.jsx";

function App() {
  return (
    <>
      <h6>
        hola cart
      </h6>
      <Product products={products}/>
    </>
  )
}

export default App
