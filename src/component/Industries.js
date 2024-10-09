import React from "react";
import Business from "../images/Business.png";
import Eduation from "../images/Education.png";
import Shopping from "../images/Shopping.png";
import Healthfitness from "../images/Healthfitness.png";
import Fooddrinks from "../images/Fooddrinks.png";
import Travel from "../images/Travel.png";
import Lifecycle from "../images/Lifecycle.png";
import Medical from "../images/Medical.png";
import Entertainment from "../images/Entertainment.png";
import Finance from "../images/Finance.png";

function Industries(props) {
  return (
    <div className="industries-work">
      <h2 className="Topindustries">
        Working With <span className="Industries-color">Top Industries</span>
      </h2>
      <div className="industries-container">
      <div className="industries-images">
        <div className="industries-img-container">
          <img className="industries-img-hover" src={Business} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>BUSINESS</h4>
        </div>
        <div className="industries-img-container">
          <img className="industries-img-hover" src={Eduation} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>EDUCATION</h4>
        </div>
        <div className="industries-img-container">
          <img className="industries-img-hover" src={Shopping} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>SHOPPING</h4>
        </div>
        <div className="industries-img-Health industries-img-container">
          <img className="industries-img-hover" style={{textAlign: "center"}} src={Healthfitness} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>HEALTH & FITNESS</h4>
        </div>
        <div className="industries-img-Food industries-img-container">
          <img className="industries-img-hover" src={Fooddrinks} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>FOOD AND DRINKS</h4>
        </div>
        <div className="industries-img-container">
          <img className="industries-img-hover" src={Travel} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>TRAVEL</h4>
        </div>
        <div className="industries-img-container">
          <img className="industries-img-hover" src={Lifecycle} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>LIFECYCLE</h4>
        </div>
        <div className="industries-img-container">
          <img className="industries-img-hover" src={Medical} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>MEDICAL</h4>
        </div>
        <div className="industries-img-Entertainment industries-img-container">
          <img className="industries-img-hover" src={Entertainment} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>ENTERTAINMENT</h4>
        </div>
        <div className="industries-img-container">
       <div  style={{ justifyContent: "center"}}>
          <img className="industries-img-hover" style={{textAlign: "center"}} src={Finance} alt="" />
          <h4 style={{letterSpacing: "1.5px", margin: "6px", textAlign: "center",}}>FINANCE</h4>
        </div>
        </div>
        </div>
      </div>
      </div>
  );
}

export default Industries;
