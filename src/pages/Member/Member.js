import React, { Component } from "react";
import "./Member.css";
import bloco_final_image from "../Member/img/bloco_final_image.jpg";

class Member extends Component {
  render() {
    return (
      <div className="container-fluid mt-4">
        <div className="container-services">
          <div className="col mx-auto text-start">
            <h2>Join our membership to get special offer</h2>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
              />
            </div>
            <button type="button" className="btnok">
              Join
            </button>
          </div>
          <div className="col mx-auto text-end">
            <img src={bloco_final_image} width="800" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}
export default Member;
