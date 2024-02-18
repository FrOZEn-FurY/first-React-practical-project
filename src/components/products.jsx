import Product from "./product";
import { Component } from "react";

class Products extends Component {
  state = {
    products: [
      { id: 1, count: 3, productName: "Laptop 1" },
      { id: 2, count: 6, productName: "Laptop 2" },
      { id: 3, count: 321, productName: "Laptop 3" },
    ],
  };

  render() {
    return (
      <>
        {this.state.products.map((p) => {
          return (
            <div className="col-4 m-3">
              <Product
                productName={p.productName}
                key={p.id}
                id={p.id}
                count={p.count}
                deleteProduct={this.deleteProduct}
              />
            </div>
          );
        })}
        ;
      </>
    );
  }

  deleteProduct = (id) => {
    const newProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: newProducts });
  };
}

export default Products;
