import React from "react";
import Communicative from "../images/Communicative.png";
import Favorite from "../images/Favorite.png";
import Collaborative from "../images/Collaborative.png";
import Management from "../images/Management.png";


function Choose(props) {
  return (
    <div>
      <div>
        <h5 className="choose-heading">Why Choose Us</h5>
        <h1 className="handle-heading">
          Why you should choose us to handle your project.
        </h1>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2%",
            flexWrap: "wrap",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <div className="choose-box-1">
            <img src={Communicative} width={180} height={180} alt="" />
            <div style={{ marginBottom: "40px" }}>
              <h6 className="headings-h6">Communicative</h6>
              <p className="chooseus-sub-paragraph">
                We communicate our project ideas and progress to make it clear.
              </p>
            </div>
          </div>
          <div className="choose-box-1" style={{ marginTop: "5%" }}>
            <img src={Collaborative} width={180} height={180} alt="" />
            <div style={{ marginBottom: "40px" }}>
              <h6 className="headings-h6">Collaborative​</h6>
              <p className="chooseus-sub-paragraph">
                Our team are very collaborative to make our project done well.
              </p>
            </div>
          </div>
          <div className="choose-box-1">
            <img src={Favorite} width={180} height={180} alt="" />
            <div style={{ marginBottom: "40px" }}>
              <h6 className="headings-h6">Favorite</h6>
              <p className="chooseus-sub-paragraph">
                We've did so many project and all of our client love it.
              </p>
            </div>
          </div>
          <div className="choose-box-1" style={{ marginTop: "5%" }}>
            <img src={Management} width={180} height={180} alt="" />
            <div style={{ marginBottom: "40px" }}>
              <h6 className="headings-h6">Management</h6>
              <p className="chooseus-sub-paragraph">
                We manage our project properly to make our project done well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
