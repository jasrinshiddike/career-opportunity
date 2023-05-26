import React from 'react';
import './JobList.css';

const JobList = ({job}) => {
    const {img, job_title, vacancies} = job;
    return (
        <div className='job-category'>
            <div>
                <img src={img} alt="" />
                <h6>{job_title}</h6>
                <p>{vacancies}</p>
            </div>
        </div>
    );
};

export default JobList;