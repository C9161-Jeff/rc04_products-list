import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { products, categories } from "../src/helper/data";
import "./App.module.scss";

function App() {
  // console.log(products, categories);
  return (
    <div className="App">
      <Header categories={categories} text="Product List" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
