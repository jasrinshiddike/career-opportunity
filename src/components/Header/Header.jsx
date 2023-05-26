import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h3>Career_Opportunity</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/jobs">Applied Jobs</Link>
                <Link to="/blogs">Blog</Link>
            </div>
            <button className='btn-apply'>Start Applying</button>
            
        </nav>
    );
};

export default Header;