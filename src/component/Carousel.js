import React from "react";
import Caraousel1 from "../images/Caraousel1.jpeg";
import Caraousel2 from "../images/Caraousel2.jpeg";

function Carousel(props) {
  return (
    <div>
      <div className="Image-slider-container">
        <div class="carousel-caption">
          <div class=" carousel-content">
            <h1 class="carousal-heading-container">
            Codex Smart leads in innovation, using cutting-edge technology to drive progress and efficiency
            </h1>
            <h6 class="carousal-heading">
              form infancy to growth, we are you growth partners.
            </h6>
            <a href="contact.html" class="ms-2">
              <button type="button" class="corousel-content-btn2">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="Image-slider-container-2"></div>
    </div>
  );
}

export default Carousel;
