import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobFeatureList from '../JobFeatureList/JobFeatureList';
import './JobFeature.css';

const JobFeature = () => {
    const allJobData = useLoaderData();
    const [jobs, setJobs] = useState(allJobData);
    const [showAll, setShowAll] = useState(false);


    return (
        <div>
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-feature-container'>
                {
                    showAll
                    ?
                    jobs.map(job => <JobFeatureList
                        key={job.id}
                        job={job}
                    ></JobFeatureList>)
                    : jobs
                    .slice(0, 4)
                    .map(job => <JobFeatureList
                        key={job.id}
                        job={job}
                    ></JobFeatureList>)
                }
            </div>
            <div>
                {!showAll && ( 
                    <button 
                        onClick={() => setShowAll(true)} className='btn-apply'>
                            See All Jobs
                    </button>
                )}
            </div>
            
        </div>
    );
};

export default JobFeature;