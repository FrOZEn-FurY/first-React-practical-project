import { Component } from "react";
import Products from "./components/products";
import AppFunctional from './functionalComponents/appFunctional'
import Navbar from "./components/navbar";
import productContext from "./contexts/product";

class App extends Component {
  state = {
    products: [
      { id: 1, count: 0, productName: "Laptop 1" },
      { id: 2, count: 0, productName: "Laptop 2" },
      { id: 3, count: 0, productName: "Laptop 3" },
    ],
  };
  render() {
    return (
      <productContext.Provider
        value={{
          products: this.state.products,
          handleClear: this.handleClear,
          handleDecreament: this.handleDecreament,
          handleDecreament10: this.handleDecreament10,
          handleIncreament: this.handleIncreament,
          handleIncreament10: this.handleIncreament10,
          deleteProduct: this.deleteProduct,
          resetAll: this.resetAll,
        }}
      >
        <Navbar />
        <Products />
        <AppFunctional/>
      </productContext.Provider>
    );
  }

  deleteProduct = (id) => {
    const newProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: newProducts });
  };

  resetAll = () => {
    const newProducts = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products: newProducts });
  };
  handleIncreament = (id) => {
    const newProducts = [...this.state.products];
    let index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handleIncreament10 = (id) => {
    const newProducts = [...this.state.products];
    let index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count += 10;
    this.setState({ products: newProducts });
  };

  handleDecreament = (id) => {
    const newProducts = [...this.state.products];
    let index = newProducts.findIndex((p) => p.id === id);
    if (newProducts[index].count > 0) {
      newProducts[index].count -= 1;
    }
    this.setState({ products: newProducts });
  };

  handleDecreament10 = (id) => {
    const newProducts = [...this.state.products];
    let index = newProducts.findIndex((p) => p.id === id);
    if (newProducts[index].count > 9) {
      newProducts[index].count -= 10;
    }
    this.setState({ products: newProducts });
  };

  handleClear = (id) => {
    const newProducts = [...this.state.products];
    let index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count = 0;
    this.setState({ products: newProducts });
  };
}

export default App;
