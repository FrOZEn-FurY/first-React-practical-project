import { Component } from "react";
import productContext from "../contexts/product";

class Product extends Component {
  static contextType = productContext;

  render() {
    return (
      <div className="card border border-dark">
        <div className={this.headerBackground()}>
          <h1>{this.props.productName}</h1>
        </div>
        <div className="card-body">
          <p className="text-succes text-justified">This is the description.</p>
          <h6>
            Number of items from this that you want: {this.props.count}
          </h6>
        </div>
        <div className="card-footer text-center">
          <div className="btn-group">
            <button
              onClick={this.handleIncreament10}
              className={this.handleIncreamentBackgroundColor()}
              type="button"
            >
              +10
            </button>
            <button
              onClick={this.handleIncreament}
              className={this.handleIncreamentBackgroundColor()}
              type="button"
            >
              +
            </button>
            <button
              onClick={this.handleClear}
              className="btn btn-secondary"
              type="button"
            >
              Clear
            </button>
            <button
              onClick={this.handleDelete}
              className="btn btn-danger"
              type="button"
            >
              Delete
            </button>
            <button
              onClick={this.handleDecreament}
              className={this.handleDecreamentBackgroundColor()}
              type="button"
            >
              -
            </button>
            <button
              onClick={this.handleDecreament10}
              className={this.handleDecreamentBackgroundColor()}
              type="button"
            >
              -10
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleIncreamentBackgroundColor = () => {
    if (this.props.count % 2 === 0) {
      return "btn btn-success";
    } else {
      return "btn btn-primary";
    }
  };

  handleDecreamentBackgroundColor = () => {
    if (this.props.count % 2 === 0) {
      return "btn btn-warning";
    } else {
      return "btn btn-dark";
    }
  };

  handleDelete = () => {
    this.context.deleteProduct(this.props.id);
  };

  handleIncreament = () => {
    this.context.handleIncreament(this.props.id);
  }

  handleIncreament10 = () => {
    this.context.handleIncreament10(this.props.id);
  }

  handleDecreament = () => {
    this.context.handleDecreament(this.props.id);
  }

  handleDecreament10 = () => {
    this.context.handleDecreament10(this.props.id);
  }

  handleClear = () => {
    this.context.handleClear(this.props.id);
  };

  headerBackground = () => {
    let headerStyle = "card-header text-center ";
    if (this.props.id % 3 === 0) {
      headerStyle += "bg-info";
    } else if (this.props.id % 3 === 1) {
      headerStyle += "bg-dark text-white";
    } else {
      headerStyle += "bg-success";
    }
    return headerStyle;
  };
}

export default Product;
