import React, { Component } from "react";
import "./Services.css";
import bloco_services from "../Services/img/bloco_services.jpg";

class Services extends Component {
  render() {
    return (
      <div class="container-services mt-4">
        <div class="col mx-auto text-start">
          <img src={bloco_services} width="800" alt="bloco_services" />
        </div>
        <div class="col mx-auto text-start">
          <h2>The best services ready To serve you</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </p>
          <button type="button" className="btnok">
            Know More
          </button>
        </div>
      </div>
    );
  }
}

export default Services;