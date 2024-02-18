import { Component } from "react";
import Products from "./components/products";
import ProductFunctional from './components/productFunctional'

class App extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-center m-3">
          <Products />
          <div className="col-4 mt-3">
            <ProductFunctional />
          </div>
        </div>
      </>
    );
  }
}

export default App;
