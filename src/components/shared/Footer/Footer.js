import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mt-4">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                © Copyrights 2019 Stack. All Rights Reserved.
              </a>
            </li>
          </ul>
          <span class="navbar-text px-2">Privacy Policy</span>
          <span class="navbar-text px-2">Terms and Conditions</span>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
