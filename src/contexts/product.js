import { createContext } from "react";

const productContext = createContext({
    products: [],
    handleClear: () => {},
    handleIncreament: () => {},
    handleIncreament10: () => {},
    handleDecreament: () => {},
    handleDecreament10: () => {},
    handleDelete: () => {},
    resetAll: () => {},
});

export default productContext;