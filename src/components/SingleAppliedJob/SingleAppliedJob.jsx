import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleAppliedJob.css';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const SingleAppliedJob = ({job}) => {
    const {logo, job_title, company_name, address, salary, workplace, time, id} = job;

    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate(`/${id}`);
    }
    return (
        <div className='single-job'>
            <img src={logo} alt="" />
            <div>
                <h6>{job_title}</h6>
                <p>{company_name}</p>
                <div className=''>
                    <button className='border-blue'>{workplace}</button>
                    <button className='border-blue'>{time}</button>
                </div>
                <p>
                    <span><MapPinIcon className="icon" /> {address} </span>
                    <span><CurrencyDollarIcon className="icon" /> {salary}</span>
                </p>
                
            </div>
            <button onClick={handleNavigation} className='btn-apply'>View Details</button>
            
            
        </div>
    );
};

export default SingleAppliedJob;