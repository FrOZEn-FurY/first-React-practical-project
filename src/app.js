import { Component } from "react";
import Card from "./card";

class App extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center p-3"
        style={{ height: String(900) + "px" }}
      >
        <Card />
        <div
          className="card border border-dark mt-4"
          style={{ width: String(500) + "px" }}
        >
          <div className="card-header bg-info">
            <h1 className="card-title text-center">This is a text.</h1>
          </div>
          <div className="card-body bg-white-50 text-dark-50">
            <p className="card-text text-justified">
              Compiled successfully! You can now view react-project in the
              browser. http://localhost:3000 Note that the development build is
              not optimized. To create a production build, use npm run build.
              webpack compiled successfully
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
