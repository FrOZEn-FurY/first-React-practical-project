import { useContext, useEffect } from "react";
import productContext from "../contexts/product";

const Product = (props) => {
    const context = useContext(productContext);

    useEffect(()=>{
        return ()=>{
            console.log("Product got unmounted.");
        }
    })

    return (
        <div className='card border border-dark'>
            <div className={'card-header text-center ' + headerBackground()}>
                <h1>{props.name}</h1>
            </div>
            <div className='card-body'>
                <p className='text-succes text-justified'>
                    This is the description for mobile phone {props.name}.
                </p>
                <h6>Number of items from this that you want: {props.count}</h6>
            </div>
            <div className='card-footer text-center'>
                <div className='btn-group'>
                    <button onClick={handleIncreament10} className={handleIncreamentBackgroundColor()} type='button'>+10</button>
                    <button onClick={handleIncreament} className={handleIncreamentBackgroundColor()} type='button'>+</button>
                    <button onClick={handleClear} className='btn btn-secondary' type='button'>Clear</button>
                    <button onClick={handleDelete} className="btn btn-danger" type="button">Delete</button>
                    <button onClick={handleDecreament} className={handleDecreamentBackgroundColor()} type='button'>-</button>
                    <button onClick={handleDecreament10} className={handleDecreamentBackgroundColor()} type='button'>-10</button>
                </div>
            </div>
        </div>
    );

    function handleIncreamentBackgroundColor() {
        if (props.count % 2 === 0) {
            return 'btn btn-success';
        }
        else {
            return 'btn btn-primary';
        }
    }

    function handleDecreamentBackgroundColor() {
        if (props.count % 2 === 0) {
            return 'btn btn-warning';
        }
        else {
            return 'btn btn-dark';
        }
    }

    function headerBackground() {
        if (props.id % 3 === 0) {
            return 'bg-secondary';
        }
        else if (props.id % 3 === 1) {
            return 'bg-danger';
        }
        else {
            return 'bg-primary';
        }
    }

    function handleIncreament10() {
        context.handleIncreament10(props.id);
    }

    function handleIncreament() {
        context.handleIncreament(props.id);
    }

    function handleDecreament10() {
        context.handleDecreament10(props.id);
    }

    function handleDecreament() {
        context.handleDecreament(props.id);
    }

    function handleClear() {
        context.handleClear(props.id);
    }

    function handleDelete() {
        context.handleDelete(props.id);
    }
}
 
export default Product;