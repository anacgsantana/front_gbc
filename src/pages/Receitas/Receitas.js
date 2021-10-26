import React, { Component } from "react";
import "./Receitas.css";
import comida_1 from "../Receitas/img/comida_1.jpg";
import comida_2 from "../Receitas/img/comida_2.jpg";
import comida_3 from "../Receitas/img/comida_3.jpg";
import comida_4 from "../Receitas/img/comida_4.jpg";

class Receitas extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-fluid">
          <h2 className="d-flex justify-content-center mt-4">
            Our Best Recipes
          </h2>
          <p className="d-flex justify-content-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="container row row-cols-1 row-cols-md-2 g-4 mt-4">
          <div class="card mb-6">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={comida_1} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">Broccoli Salad with Bacon</h5>
                  <button type="button" className="btnok">
                    See Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-6">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={comida_2} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">Classic Beef Burgers</h5>
                  <button type="button" className="btnok">
                    See Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-6">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={comida_3} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">Classic Potato Salad</h5>
                  <button type="button" className="btnok">
                    See Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-6">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={comida_4} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">Cherry Cobbler on the Grill</h5>
                  <button type="button" className="btnok">
                    See Recipe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Receitas;
