import React from 'react';
import { Link } from 'react-router-dom';
import {NavBar} from '../../component/navigation/NavBar';
import {Footer} from "../../component/footer/Footer";
import "./Homepage.css"
import HomepageWatch from "../../assets/homepage/HomepageWatch.jpg"
import abc from "../../assets/homepage/abc.webp"
import luxuryWatch from "../../assets/homepage/luxuryWatch.png";
import digitWatch from "../../assets/homepage/digitWatch.jpeg";
import fitbit from "../../assets/homepage/fitbit.jpg";
import oculusVR from "../../assets/homepage/oculusVR.jpg";
import smartRing from "../../assets/homepage/smartRing.jpg";
const Homepage =()=>{
    return(
        <div className="homeContainer">
            <NavBar />
            
            <div className="hero-img">
            <Link to="/product"><img class="img-responsive" src={HomepageWatch} alt="Homepagewatch" /></Link>
            <Link to="/product" className='btn-overlay hero-text'><button className='hero-btn '>Shop Now</button></Link>
            </div>
            <div className="watchSubHeading"><div className='txt-underline'>OUR COLLECTIONS</div></div> 
            <div className="watchCollection">
                <div className="bestWatch">
                    <div className="watchWrapper">
                        <Link to="/"><img src={abc} alt="luxWatch"/></Link>
                        <div className='watchWrapperText'>Mid-range Watch</div>
                    </div>
                    <div className="watchWrapper">
                        <Link to="/"><img src={luxuryWatch} alt="luxuryWatch"/></Link>
                        <div className='watchWrapperText'>Luxury Watch</div>
                    </div>
                    <div className="watchWrapper">
                        <Link to="/"><img src={digitWatch} alt="digitWatch"/></Link>
                        <div className='watchWrapperText'>Smart Watch</div>
                    </div>
                    <div className="watchWrapper">
                        <Link to="/"><img src={fitbit} alt="fitbit"/></Link>
                        <div className='watchWrapperText'>Fit-bit</div>
                    </div>
                    <div className="watchWrapper">
                        <Link to="/"><img src={oculusVR} alt="oculusVR"/></Link>
                        <div className='watchWrapperText'>VR Headset</div>
                    </div>
                    <div className="watchWrapper">
                        <Link to="/"><img src={smartRing} alt="smartRing"/></Link>
                        <div className='watchWrapperText'>Smart Ring</div>
                    </div>
                </div>
            </div>    
            <Footer />         
        </div>
        
    );
}

export {Homepage};