import React from "react";
import Rightarrow from "../images/Rightarrow.png";
import mobileApp from "../images/mobileApp.jpg";
import m1 from "../images/m1.png";
import expert from "../images/expert.png";
import client from "../images/client.png";
import quality from "../images/quality.png";
import growthBusiness from "../images/growthBusiness.jpg";
import { useLocation } from "react-router-dom";

function Allservices(props) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="allservices-container">
      <div
        style={{
          border: "2px solid #000000",
          width: "30%",
          backgroundColor: "white",
          height: "720px",
        }}
      >
        <div>
          <div className="heading-all-services">
            <h6>All Services</h6>
          </div>
          <div className="allservices-box">
            <div className="Services-boxses">
              <h6>Web Development</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
            <div className="Services-boxses">
              <h6>Web Design</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
            <div className="Services-boxses">
              <h6>UI/UX Design</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
            <div className="Services-boxses">
              <h6>Blockchain Development</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
            <div className="Services-boxses">
              <h6>Programming</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
            <div className="Services-boxses">
              <h6>Digital Marketing</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
            <div className="Services-boxses">
              <h6>App Development</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
            <div className="Services-boxses">
              <h6>Web 3.0 Integration</h6>
              <img
                src={Rightarrow}
                style={{ paddingRight: "15px" }}
                width={17}
                height={17}
                alt=""
              />
            </div>
          </div>
          <div className="image-container">
            
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={m1} width="100%" height={400} alt="" />
        </div>
        <h3 className="services-line">
          We develop great mobile apps for great brands
        </h3>
        <p className="services-p-container">
          For the past 6 years we have been creating high performance,
          feature-packed mobile applications for iOS & Android. As an expert in
          mobile application development services, SoftSyncDev can create the
          right app that will meet all your business and industry needs.
        </p>
        <div style={{ paddingTop: "9%" }}>
          <h3 className="services-line">Web Development</h3>
          <p className="services-p-container">
            Transforming mobile apps with AI integration is our forte. Trust us
            as your app development company for innovative mobile app solutions
          </p>
          <p className="services-p-container" style={{ paddingTop: "3%" }}>
            We can transform your ideas into fully functional visually appealing
            and highly functional mobile applications. Whether you need a
            business app social media app e-commerce app or any other custom
            mobile solution SoftSyncDev is your trusted partner for delivering
            top-quality mobile applications using the power of React Native and
            Expo technology.
          </p>
        </div>
        <div className="service-outline-line">
          <h4>
            App development is the process of creating software
            <br /> applications specifically designed to run on mobile <br />{" "}
            devices, such as smartphones and tablets.
          </h4>
        </div>
        <div>
          <h3 className="services-line">Industries we serve</h3>
          <p className="services-p-container">
            With a highly-professional outlook on every project and a team
            that’s experienced and versatile, we cater to a wide range of
            industries with our service.
          </p>
          <ul style={{ marginTop: "10%" }}>
            <li className="services-p-container">Automative</li>
            <li className="services-p-container">Retail</li>
            <li className="services-p-container">Healthcare</li>
            <li className="services-p-container">Manufacturing</li>
            <li className="services-p-container">Logistics</li>
            <li className="services-p-container">Agriculture</li>
            <li className="services-p-container">Education</li>
          </ul>
        </div>
        <div>
          <h3 className="services-line">Why choose CodexSmart</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div className="img-main-div">
              <div className="service-img-main">
                <img src={expert} width={30} height={30} alt="" />
              </div>
              <h6 className="services-p-main">Expertise and Experiense</h6>
            </div>
            <div className="img-main-div">
              <div className="service-img-main">
                <img src={client} width={30} height={30} alt="" />
              </div>
              <h6 className="services-p-main">Client-centric Approach</h6>
            </div>
            <div className="img-main-div">
              <div className="service-img-main">
                <img src={quality} width={30} height={30} alt="" />
              </div>
              <h6 className="services-p-main">Quality & Timely Delivery</h6>
            </div>
          </div>
        </div>
        <div className="benefits-container">
          <div>
            <img className="mobile-img-container" src={mobileApp} alt="" />
          </div>
          <div className="benefits-second-container">
            <h3 className="services-line" style={{ margin: "8%" }}>
              Our Benefits
            </h3>
            <p className="agency-container" style={{ marginLeft: "2%" }}>
              Get the Best Digital Marketing from <br /> CodexSmart Agency of
              Excellence
            </p>
            <ul style={{ marginTop: "40%", marginLeft: "3%" }}>
              <li className="services-p-div">Cost Effective</li>
              <li className="services-p-div">Equal Opportunities</li>
              <li className="services-p-div">Create High Brand Awarness</li>
              <li className="services-p-div">Higher ROI</li>
            </ul>
          </div>
        </div>
        <div className="Business-Growth-container">
          <div>
            <h4 id="benefits-h6-container">
              CodexSmart Benefits to Drive Your
              <br /> Business Growth
            </h4>
            <div className="service-btn-container">
              <a
                className={isActive("/Contacts") ? "active" : "service-btn"}
                href="/Contacts"
              >
                Quick start
              </a>
            </div>
          </div>
          <div>
            <img src={growthBusiness} width={217} height={314} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allservices;
