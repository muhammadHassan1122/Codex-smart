import React from 'react';
import Navbar from '../component/Navbar';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Carousel from '../component/Carousel';

function Contacts(props) {
    return (
        <>
         <Navbar/>
         <Carousel/>
         <Contact/>
         <Footer/>
        </>
    );
}

export default Contacts;