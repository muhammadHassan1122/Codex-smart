import React from "react";
import Service1 from '../images/Service1.png'
import Service2 from '../images/Service2.png'
import Service3 from '../images/Service3.png'
import Service4 from '../images/Service4.png'
import Service5 from '../images/Service5.png'
import Service6 from '../images/Service6.png'
import Service7 from '../images/Service7.png'
import Service8 from '../images/Service8.png'
import { useLocation, useNavigate } from "react-router-dom";


function Service(props) {
  const navigate = useNavigate()
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="Service-container">
      <div>
        <h5 className="services-heading">Our Services</h5>
        <h1 className="Social-services-heading">
          Services Built Specifically For <br /> Your Business
        </h1>
      </div>
      <div className="box">
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service1} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">Web <br/><span>Development</span></h6>
          <div className="Service-box-btn" onClick={()=>navigate("/Development")}>
            +
          
          </div>
        </div>
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service2} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">Web 3.0 <br/><span>Integration</span></h6>
          <div className="Service-box-btn" onClick={()=>navigate("/Development")}>
            +
          
          </div>
        </div>
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service3} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">App <br/><span>Development</span></h6>
          <div className="Service-box-btn">
            +
          </div>
        </div>
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service4} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">Programming</h6>
          <div className="Service-box-btn programming-service-container" onClick={()=>navigate("/Development")} style={{marginTop: "5.5%"}}>
            +
          
          </div>
        </div>
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service5} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">UI/UX <br/><span>Design</span></h6>
          <div className="Service-box-btn" onClick={()=>navigate("/Development")}>
            +
          
          </div>
        </div>
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service6} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">Web <br/><span>Design</span></h6>
          <div className="Service-box-btn" onClick={()=>navigate("/Development")}>
            +
          
          </div>
        </div>
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service7} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">Block Chain <br/><span>Development</span></h6>
          <div className="Service-box-btn" onClick={()=>navigate("/Development")}>
            +
          
          </div>
        </div>
        <div className="services-box">
          <div>
            <img style={{paddingLeft: "15%", paddingTop: "12%", cursor: "pointer"}} src={Service8} width={75} height={75} alt="" />
          </div>
          <h6 className="service-box-h6">Digital <br/><span>Marketing</span></h6>
          <div className="Service-box-btn" onClick={()=>navigate("/Development")}>
            +
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
