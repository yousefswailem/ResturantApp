import React, { useState } from 'react'
import './Map.scss'
import Footer from '../Footer/Footer';
import GoogleMapsLoader from '../mapApi/GoogleMapsLoader';
 


function Map() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    // const toggleFooterVisibility = () => {
    //     setIsFooterVisible((prevVisibility) => !prevVisibility);
    // };
    return (
        <>
            <div className='map-space' >
                <GoogleMapsLoader />
                {isFooterVisible && <Footer />} </div>
           
        </>

    )
}

export default Map