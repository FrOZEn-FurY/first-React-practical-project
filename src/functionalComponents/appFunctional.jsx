import { useState } from "react";
import productContext from "../contexts/product";
import Products from "./products";
import Navbar from "./navbar";

const AppFunctional = () => {
  const [products, setProducts] = useState([
    { name: "Mobile1", id: 1, count: 0 },
    { name: "Mobile2", id: 2, count: 0 },
    { name: "Mobile3", id: 3, count: 0 },
  ]);

  return (
    <productContext.Provider
      value={{
        products: products,
        handleIncreament: handleIncreament,
        handleIncreament10: handleIncreament10,
        handleDecreament: handleDecreament,
        handleDecreament10: handleDecreament10,
        handleClear: handleClear,
        handleDelete: handleDelete,
        resetAll: resetAll,
      }}
    >
      <Navbar />
      <Products />
    </productContext.Provider>
  );

  function handleIncreament10(id) {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          p.count += 10;
        }
        return p;
      })
    );
  }

  function handleIncreament(id) {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          p.count += 1;
        }
        return p;
      })
    );
  }

  function handleDecreament10(id) {
    setProducts(
      products.map((p) => {
        if (p.id === id && p.count > 10) {
          p.count -= 10;
        }
        return p;
      })
    );
  }

  function handleDecreament(id) {
    setProducts(
      products.map((p) => {
        if (p.id === id && p.count > 0) {
          p.count -= 1;
        }
        return p;
      })
    );
  }

  function handleClear(id) {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          p.count = 0;
        }
        return p;
      })
    );
  }

  function handleDelete(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  function resetAll() {
    setProducts(
      products.map((p) => {
        p.count = 0;
        return p;
      })
    );
  }
};

export default AppFunctional;
