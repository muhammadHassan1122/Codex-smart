import React from "react";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import loction from "../images/loction.png";
import phonecall from "../images/phonecall.png";
import email from "../images/email.png";



function Footer(props) {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div>
          <a style={{ textDecoration: "none" }} href="">
            <h1 style={{ color: "#FFFFFF", fontSize: "40px" }}>
              Codex<span style={{ color: "#878787" }}>Smart</span>
            </h1>
          </a>
          <p className="footer-small-container">
            Innovative software solutions <br /> for thriving businesses. <br />{" "}
            Transforming ideas into reality, <br /> we redefine the digital{" "}
            <br /> landscape with cutting-edge <br /> development.
          </p>
          
          <div class="icons-container hightech-link">
                        <a href="https://www.facebook.com/profile.php?id=61556156862580" target="_blank"
                            class="icon-facebook"><img src={facebook} width="15px" height="12px" alt="" /></a>
                        <a href="https://www.instagram.com/codes_smart/" target="_blank"
                            class="icon-facebook"><img src={instagram} width="18px" height="15px" alt="" /></a>
                        <a href="https://www.linkedin.com/company/codex-smart" target="_blank"
                            class="icon-facebook"><img src={linkedin} width="18px" height="15px" alt="" /></a>
                    </div>
         
        </div>
        <div>
          <a href="" style={{ textDecoration: "none" }}>
            <h3 style={{ fontSize: "28px", color: "#878787" }}>Short Link</h3>
          </a>
          <div>
            <div className="hightech-link" style={{ paddingTop: "4px" }}>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                }}
              >
                About us
              </a>
            </div>
            <div className="hightech-link" style={{ paddingTop: "4px" }}>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                }}
              >
                Contact us
              </a>
            </div>
            <div className="hightech-link" style={{ paddingTop: "4px" }}>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                }}
              >
                Our Services
              </a>
            </div>
            <div className="hightech-link" style={{ paddingTop: "4px" }}>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                }}
              >
                Our Team
              </a>
            </div>
            <div className="hightech-link" style={{ paddingTop: "4px" }}>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                }}
              >
                Our Projects
              </a>
            </div>
          </div>
        </div>
        <div style={{paddingTop: "3%"}}>
          <a href="" style={{ textDecoration: "none" }}>
            <h3 style={{ fontSize: "28px", color: "#878787" }}>Contact Us</h3>
          </a>
          <div>
            <div
              className="hightech-link"
              style={{
                borderBottom: "1px solid #1035AC",
                paddingBottom: "1rem",
                width: "100%",
              }}
            ><img src={loction} style={{paddingTop: "8px", paddingRight: "6px"}} width="22px" height="22px" alt="" />
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                }}
              >
                United Kingdom
              </a>
            </div>
            <div
              className="hightech-link"
              style={{
                paddingTop: "10px",
                paddingBottom: "1rem",
                borderBottom: "1px solid #1035AC",
                width: "100%",
              }}
            ><img src={phonecall} style={{paddingTop: "8px", paddingRight: "6px"}} width="22px" height="22px" alt="" />
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                }}
              >
                +44 1233 28 1644
              </a>
            </div>
            <div
              className="hightech-link"
              style={{
                paddingTop: "10px",
                paddingBottom: "1rem",
                borderBottom: "1px solid #1035AC",
                width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
              }}
            ><img src={email} style={{paddingTop: "8px", paddingRight: "6px"}} width="22px" height="22px" alt="" />
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "8px",
                  

                }}
              >
                info.codexsmart@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          margin: "3rem auto",
          height: "1px",
          color: "#878787",
          marginTop: "3rem",
          backgroundColor: "currentcolor",
          marginBottom: "1.5rem",
        }}
      ></div>
      <div className="footer-end-container">
      <div>
        <span style={{color: "white"}}>
            <a href="" style={{color: "#878787", textDecoration: "none"}}>CodexSmart</a>
            ,All right reserved
        </span>
      </div>
      <div>
      <span style={{color: "white"}}>
        Designed by
            <a href="" style={{color: "#878787", textDecoration: "none"}}> CodexSmart</a>
            
        </span>
      </div>
      </div>
    </div>
  );
}

export default Footer;
