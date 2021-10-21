import "./App.css";
import Product from "./components/Product";
import products from "./data/products.json";

function App() {
  return (
    <div>
      <div className="bg-gray-200 py-4">
        <div className="md:w-1/2 mx-auto">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
