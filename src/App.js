import "./App.css";
import Product from "./components/Product";
import products from "./data/products.json";

function App() {
  return (
    <div>
      <div>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
