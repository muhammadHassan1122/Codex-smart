import React from 'react';
import Allservices from '../component/Allservices';
import Navbar from '../component/Navbar';
import Carousel from '../component/Carousel';
import Footer from '../component/Footer';

function Development(props) {
    return (
        <div>
            <Navbar/>
            <Carousel/>

            <Allservices/>
            <Footer/>
        </div>
    );
}

export default Development;