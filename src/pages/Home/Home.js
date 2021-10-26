import React, { Component } from "react";
import "./Home.css";
import Logo from "../Home/img/Logo.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid w-100">
        <div class="col mx-auto text-end">
          <img src={Logo} width="800" alt="logo" />
        </div>
        <section>
          <div>
            <h2 className="d-flex justify-content-start">
              Ready for Trying a new recipe?
            </h2>
            <div>
              <input
                type="text"
                class="form-control"
                placeholder="Search healthy recipes"
                col-xs-4="true"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
