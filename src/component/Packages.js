import React from "react";

function Packages(props) {
  return (
    <div>
      <div>
        <h5 className="packages-heading">Our Packages</h5>
        <h1 className="Social-packages-heading">
          Social Media Marketing <br /> Packages
        </h1>
      </div>
      <div class="container">
        <div class="panel">
          <div class="ring">
            <div class="card card1"></div>
            <div class="border">
              <p class="title">Basic</p>
              <div class="slide">
                <ul className="ul-container">
                  <li class="para">20 Posts Per Month</li>
                  <li class="para">2 Platforms</li>
                  <li class="para">Increase In Sells And Traffic</li>
                  <li class="para">Content Creation</li>
                  <li class="para">Keyword Research</li>
                  <li class="para">Account Management</li>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "85%",
                      paddingTop: "40px",
                    }}
                  >
                    <p class="para1">$250</p>
                  </div>
                </ul>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="ring">
            <div class="card card2"></div>
            <div class="border">
              <p class="title">Standered</p>

              <div class="slide">
                <ul className="ul-container">
                  <li class="para">25 Posts Per Month</li>
                  <li class="para">3 Platforms</li>
                  <li class="para">Increase In Sells And Traffic</li>
                  <li class="para">Content Creation</li>
                  <li class="para">50+ Keyword Research</li>
                  <li class="para">Account Management</li>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "85%",
                      paddingTop: "40px",
                    }}
                  >
                    <p class="para1">$500</p>
                  </div>
                </ul>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="ring">
            <div class="card card3"></div>
            <div class="border">
              <p class="title">Premium</p>
              <div class="slide" style={{ paddingTop: "10px" }}>
                <ul className="ul-container">
                  <li class="para">30 Posts Per Month</li>
                  <li class="para">3 Platforms</li>
                  <li class="para">Increase In Sells And Traffic</li>
                  <li class="para">Content Creation</li>
                  <li class="para">80+ Keyword Research</li>
                  <li class="para">Account Management</li>
                  <li class="para">Paid Promotion</li>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "85%",
                      paddingTop: "40px",
                    }}
                  >
                    <p class="para1">$800</p>
                  </div>
                </ul>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
