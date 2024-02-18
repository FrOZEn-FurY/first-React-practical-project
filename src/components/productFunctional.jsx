import { useState } from "react";

const ProductFunctional = () => {

    const [buyCount, setBuyCount] = useState(0);

    return (
        <div className='card border border-dark'>
            <div className='card-header text-center bg-danger'>
                <h1>Laptop Functional</h1>
            </div>
            <div className='card-body'>
                <p className='text-succes text-justified'>
                    This is the description for second laptop.
                </p>
                <h6>Number of items from this that you want: {buyCount}</h6>
            </div>
            <div className='card-footer text-center'>
                <div className='btn-group'>
                    <button onClick={handleIncreament10} className='btn btn-success' type='button'>+10</button>
                    <button onClick={handleIncreament} className='btn btn-success' type='button'>+</button>
                    <button onClick={handleClear} className='btn btn-danger' type='button'>Clear</button>
                    <button onClick={handleDecreament} className='btn btn-warning' type='button'>-</button>
                    <button onClick={handleDecreament10} className='btn btn-warning' type='button'>-10</button>
                </div>
            </div>
        </div>
    );

    function handleIncreament() {
        setBuyCount(buyCount + 1);
    }

    function handleIncreament10() {
        setBuyCount(buyCount + 10);
    }

    function handleDecreament() {
        if (buyCount > 0) {
            setBuyCount(buyCount - 1);
        }
    }

    function handleDecreament10() {
        if (buyCount > 10) {
            setBuyCount(buyCount - 10);
        }
    }

    function handleClear() {
        setBuyCount(0);
    }
}
 
export default ProductFunctional;