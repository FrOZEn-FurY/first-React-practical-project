import { Component } from 'react'
import productContext from '../contexts/product';

class Navbar extends Component {
    static contextType = productContext;
    render() { 
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a href='#' className='navbar-brand'>
                        Online Shop
                    </a>
                    <h3 className='navbar-item text-white align-self-start text-decoration-none' style={{marginRight: '50px'}}>
                        Total products count: {this.calculateSum()}
                    </h3>
                </div>
            </nav>
        );
    }

    calculateSum = () => {
        let sum = 0;
        this.context.products.forEach((p) => {
            sum += p.count;
        });
        return sum;
    }
}
 
export default Navbar;