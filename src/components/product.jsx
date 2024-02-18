import { Component } from "react";

class Product extends Component {
  state = {
    buy_count: 0,
  };
  render() {
    return (
      <div className="card border border-dark">
        <div className={this.headerBackground()}>
          <h1>{this.props.productName}</h1>
        </div>
        <div className="card-body">
          <p className="text-succes text-justified">This is the description.</p>
          <h6>
            Number of items from this that you want: {this.state.buy_count}
          </h6>
        </div>
        <div className="card-footer text-center">
          <div className="btn-group">
            <button
              onClick={this.handleIncreament10}
              className="btn btn-success"
              type="button"
            >
              +10
            </button>
            <button
              onClick={this.handleIncreament}
              className="btn btn-success"
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
              className="btn btn-warning"
              type="button"
            >
              -
            </button>
            <button
              onClick={this.handleDecreament10}
              className="btn btn-warning"
              type="button"
            >
              -10
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleIncreament = () => {
    this.setState({ buy_count: this.state.buy_count + 1 });
  };

  handleIncreament10 = () => {
    this.setState({ buy_count: this.state.buy_count + 10 });
  };

  handleDecreament = () => {
    if (this.state.buy_count > 0) {
      this.setState({ buy_count: this.state.buy_count - 1 });
    }
  };

  handleDecreament10 = () => {
    if (this.state.buy_count > 10) {
      this.setState({ buy_count: this.state.buy_count - 10 });
    }
  };

  handleDelete = () => {
    this.props.deleteProduct(this.props.id)
  };

  handleClear = () => {
    this.setState({ buy_count: 0 });
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
