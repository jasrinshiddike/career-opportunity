import React from 'react';
import './JobFeatureList.css';
import { Link, useNavigate } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const JobFeatureList = ({job}) => {
    const {logo, job_title, company_name, address, salary, workplace, time, id} = job;

    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate(`/${id}`);
    }
    return (
        <div className='job-feature-list'>
            <img src={logo} alt="" />
            <h6>{job_title}</h6>
            <p>{company_name}</p>
            <div className='job-workplace'>
                <button className='border-blue'>{workplace}</button>
                <button className='border-blue'>{time}</button>
            </div>
            <p>
                <span><MapPinIcon className="icon" /> Location: {address}</span>
                <br></br>
                <span><CurrencyDollarIcon className="icon" />Salary: {salary}</span>
            </p>
            <button onClick={handleNavigation} className='btn-apply'>View Details</button>
            
        </div>
    );
};

export default JobFeatureList;