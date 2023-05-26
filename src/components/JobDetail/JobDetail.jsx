import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetail.css';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/solid';


const JobDetail = () => {
    const jobDetail = useLoaderData();
    //console.log(jobDetail);
    const {id, address, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email} = jobDetail;

    const handleAppliedJob = () =>{
        const storedData = JSON.parse(localStorage.getItem("applied"));
        if(storedData){
            localStorage.setItem("applied", JSON.stringify([...storedData, jobDetail]))
        }
        else{
            localStorage.setItem("applied", JSON.stringify([jobDetail]))
        }
    }
    return (
        <div>
            <h2>Job Details</h2>
            <div className='job-detail-info'>
                <div className='job-info'>
                    <p><strong>Job Description: </strong><small>{job_description}</small></p>
                    <p><strong>Job Description: </strong><small>{job_responsibility}</small></p>
                    <h5>Educational Requirements:</h5>
                    <p>{educational_requirements}</p>
                    <h5>Experiences:</h5>
                    <p>{experiences}</p>
                </div>
                <div className='contact-info'>
                    <h4>Job Details</h4>
                    <hr className='horizontal' />
                    <p><CurrencyDollarIcon className="icon" /> <b>Salary: </b>{salary}</p>
                    <p><BriefcaseIcon className="icon" /> <b>Job Title: </b>{job_title}</p>
                    <h4>Contact Information</h4>
                    <hr className='horizontal' />
                    <p><PhoneIcon className="icon" /> <b>Phone: </b>{phone}</p>
                    <p><EnvelopeIcon className="icon" /> <b>Email: </b>{email}</p>
                    <p><MapPinIcon className="icon" /> <b>Location: </b>{address}</p>
                    <button onClick ={handleAppliedJob} className='btn-job-apply'>Apply Now</button>
                </div>
                
            </div>
            

            
            
        </div>
    );
};

export default JobDetail;