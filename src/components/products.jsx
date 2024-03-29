import Product from "./product";
import { Component } from "react";
import productContext from "../contexts/product";

class Products extends Component {
  static contextType = productContext;
  render() {
    return (
      <>
        <div className="row justify-content-center">
          <button onClick={this.context.resetAll} className="btn btn-dark col-4 mt-2">
            Reset all class components.
          </button>
        </div>
        <div className="row justify-content-center">
          {this.context.products.map((p) => {
            return (
              <div className="col-4 m-3">
                <Product
                  productName={p.productName}
                  key={p.id}
                  id={p.id}
                  count={p.count}
                />
              </div>
            );
          })}
        </div>
        ;
      </>
    );
  }

  
}

export default Products;
