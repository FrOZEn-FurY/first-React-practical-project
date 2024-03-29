import { useContext } from "react";
import productContext from "../contexts/product";
import Product from "./product";

const Products = () => {
  const context = useContext(productContext);

  return (
    <>
      <div className="row justify-content-center">
          <button className="btn btn-dark col-4 mt-2" onClick={context.resetAll} type="button">Reset all functional components.</button>
      </div>
      <div className="row justify-content-center">
        {
          context.products.map((p)=>{
            return (
              <div className="col-4 m-3">
                <Product name={p.name} id={p.id} key={p.key} count={p.count} />
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Products;
