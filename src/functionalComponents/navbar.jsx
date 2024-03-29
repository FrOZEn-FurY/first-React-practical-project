import { useContext } from "react";
import productContext from "../contexts/product";

const Navbar = () => {
    const context = useContext(productContext);

    return ( 
        <>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a href='#' className='navbar-brand'>
                        Online Shop
                    </a>
                    <h3 className='navbar-item text-white align-self-start text-decoration-none' style={{marginRight: '50px'}}>
                        Total products count: {calculateSum()}
                    </h3>
                </div>
            </nav>
        </>
    );

    function calculateSum() {
        let sum = 0;
        context.products.forEach((p) => {
            sum += p.count;
        });
        return sum;
    }
}
 
export default Navbar;