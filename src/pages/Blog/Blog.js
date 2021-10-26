import React, { Component } from "react";
import "./Blog.css";
import blog_image_1 from "../Blog/img/blog_image_1.jpg";
import bloco_image_2 from "../Blog/img/bloco_image_2.jpg";
import bloco_image_3 from "../Blog/img/bloco_image_3.jpg";
import bloco_image_4 from "../Blog/img/bloco_image_4.jpg";

class Blog extends Component {
  render() {
    return (
      <div class="container-fluid mt-4">
        <div>
          <h2 className="d-flex justify-content-center">Read Our Blog</h2>
          <p className="d-flex justify-content-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="container">
          <div class="card-group">
            <div class="card col-md-6">
              <img src={blog_image_1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Quick-start guide to nuts and seeds</h5>

                <p class="card-text">
                  <small class="text-muted">Kevin Ibrahim</small>
                </p>
              </div>
            </div>
            <div class="card col-md-6">
              <img src={bloco_image_2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Nutrition: Tips for Improving Your Health
                </h5>

                <p class="card-text">
                  <small class="text-muted">Mike Jackson</small>
                </p>
              </div>
            </div>
            <div class="card col-md-6">
              <img src={bloco_image_3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  The top 10 benef its of eating healthy
                </h5>

                <p class="card-text">
                  <small class="text-muted">Bryan McGregor</small>
                </p>
              </div>
            </div>
            <div class="card col-md-6">
              <img src={bloco_image_4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">What M Healthy</h5>
                <p class="card-text">
                  <small class="text-muted">Jash</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
