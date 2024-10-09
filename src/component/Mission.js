import React from "react";
import ReactPlayer from "react-player";
import vision from "../images/vision.png";
import target from "../images/target.png";
import values from "../images/values.png";

function Mission(props) {
  return (
    <div className="mission-react-player">
      <div className="player-wrapper">
        <ReactPlayer
          controls
          className="react-player"
          url="https://youtu.be/iu-LBY7NXD4"
          width="530px"
          height="540px"
        />
      </div>
      <div style={{paddingBottom: "5%"}}>
        <div className="vision-container">
          <div>
            <img
              style={{ paddingRight: "20px", paddingBottom: "220px" }}
              src={vision}
              alt=""
            />
          </div>
          <div>
            <h5 className="our-headings">Our Vision</h5>
            <ul style={{ paddingLeft: "19px" }}>
              <li>
                Firstly, to provide Intelligent Information <br /> Solutions.
              </li>
              <li>
                Secondly, to facilitate Trouble-Free Solutions & <br />{" "}
                Services.
              </li>
              <li>
                Thirdly, deliver Features Enriched Solutions with <br />{" "}
                Dynamics of Change.
              </li>
              <li>
                Lastly, to be the Lead Provider of SMS <br /> Communication
                Softwares.
              </li>
            </ul>
          </div>
        </div>
        <div className="Mission-container">
          <div>
            <img
              style={{ paddingRight: "20px", paddingTop: "20px" }}
              src={target}
              alt=""
            />
          </div>
          <div>
            <h5 className="our-headings">Our Mission</h5>
            <p className="mission-paragraph">
              Our Mission and horizon allow us to meet any challenge <br /> and
              dare. We are preparing ourselves for all high-end <br /> projects.
              With the essence of quality dedication <br /> commitment encircled
              by business ethics, we do not see <br /> the red right on the
              highway.
            </p>
          </div>
        </div>
        <div className="value-container">
          <div>
            <img
              style={{ paddingRight: "20px", paddingTop: "20px" }}
              src={values}
              alt=""
            />
          </div>
          <div>
            <h5 className="our-headings">Our Value</h5>
            <p className="mission-paragraph">
              Teamwork, experience, accountability, and innovation. All <br/> of which
              is reflected in the quality of our results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
