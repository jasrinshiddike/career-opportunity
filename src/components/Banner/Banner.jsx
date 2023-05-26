import React from 'react';
import './Banner.css';
import img from '../../../assets/All Images/man.png';

const Banner = () => {
    return (
        <div className='banner'>
                <div>
                    <h1>One Step Closer To Your <span className='text-blue'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-apply'>Get Started</button>
                </div>
                <div className='picture'>
                    <img src={img} alt="" />
                </div>
        </div>
    );
};

export default Banner;