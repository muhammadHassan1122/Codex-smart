import React from "react";
import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
import Carousel from "../component/Carousel";
import Industries from "../component/Industries";
import Service from "../component/Service";
import Packages from "../component/Packages";
// import Mission from "../component/Mission";
// import Team from "../component/Team";
// import Contact from "../component/Contact";
// import Choose from "../component/Choose";

function Home(props) {
  return (
    <>
       <Navbar/>
       <Carousel/>
      <Industries/>
      <Service/>
      <Packages/>
      {/* <Mission/> */}
      {/* <Choose/> */}
      {/* <Team/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
      
    </>
  );
}

export default Home;
