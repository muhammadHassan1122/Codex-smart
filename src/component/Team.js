import React from "react";
import Womenavatar from "../images/Womanavatar.png";
import Womenavatar2 from "../images/Womanavatar2.png";
import Womenavatar3 from "../images/Womanavatar3.png";
import Saqibfaisal from "../images/Saqibfaisal.png";
import HassanImran from "../images/HassanImran.jpeg";


function Team(props) {
  let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.teamcard');
    const totalSlides = slides.length;
   console.log("hassan")

    index = (index + step + totalSlides) % totalSlides;

    const slideWidth = slides[0].clientWidth;
    const offset = -index * slideWidth;
    
    document.querySelector('.teamcontainer').style.transform = `translateX(${offset}px)`;
}
  return (
    <div>
      <div>
        <h5 className="team-heading">Our Team</h5>
        <h1 className="expert-team-heading">Meet Our Expert Team</h1>
      </div>
      <section className="team">
        <div className="team-main-container">

        <button class="nav-button prev" onClick={moveSlide}>&#10094;</button>
          
          <div className="teamcontainer">
           
          
           
            <div className="teamcard">
              <div className="team-card-content">
                <div className="team-images">
                  <img
                    src={Saqibfaisal}
                    style={{ backgroundColor: "#fff" }}
                    className="team-img-container"
                    alt=""
                  />
                </div>

                <div className="media-icon">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>

                <div className="name-profession-container">
                  <span className="name">Saqib Faisal</span>
                  <span className="profession">Co-Founder</span>
                </div>
              </div>
            </div>

            <div className="teamcard">
              <div className="team-card-content">
                <div className="team-images">
                  <img
                    src={Womenavatar}
                    style={{ backgroundColor: "#fff" }}
                    className="team-img-container"
                    alt=""
                  />
                </div>

                <div className="media-icon">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>

                <div className="name-profession-container">
                  <span className="name">Sharjeena Khokar</span>
                  <span className="profession">Director</span>
                </div>
              </div>
            </div>

            <div className="teamcard">
              <div className="team-card-content">
                <div className="team-images">
                  <img
                    src={HassanImran}
                    style={{ backgroundColor: "#fff" }}
                    className="team-img-container"
                    alt=""
                  />
                </div>

                <div className="media-icon">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>

                <div className="name-profession-container">
                  <span className="name">Hassan Imran</span>
                  <span className="profession">FrontEnd Developer</span>
                </div>
              </div>
            </div>

            <div className="teamcard">
              <div className="team-card-content">
                <div className="team-images">
                  <img
                    src={Womenavatar2}
                    style={{ backgroundColor: "#fff" }}
                    className="team-img-container"
                    alt=""
                  />
                </div>

                <div className="media-icon">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>

                <div className="name-profession-container">
                  <span className="name">Anushay Imran</span>
                  <span className="profession">Social Media Manager</span>
                </div>
              </div>
            </div>

            <div className="teamcard">
              <div className="team-card-content">
                <div className="team-images">
                  <img
                    src={Womenavatar3}
                    style={{ backgroundColor: "#fff" }}
                    className="team-img-container"
                    alt=""
                  />
                </div>

                <div className="media-icon">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>

                <div className="name-profession-container">
                  <span className="name">Rani Kumari</span>
                  <span className="profession">Sales Executive</span>
                </div>
              </div>
            </div>

            <div className="teamcard">
              <div className="team-card-content">
                <div className="team-images">
                  <img
                    src={Saqibfaisal}
                    style={{ backgroundColor: "#fff" }}
                    className="team-img-container"
                    alt=""
                  />
                </div>

                <div className="media-icon">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>

                <div className="name-profession-container">
                  <span className="name">Ahmed Raza</span>
                  <span className="profession">FrontEnd Developer</span>
                </div>
              </div>
            </div>
          </div>
          
          <button class="nav-button next"  onClick={moveSlide}>&#10095;</button>


        </div>

        
      </section>
    </div>
  );
}

export default Team;
