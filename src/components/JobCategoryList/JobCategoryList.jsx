import React, { useEffect, useState } from 'react';
import './JobCategoryList.css';
import JobList from '../JobList/JobList';

const JobCategoryList = () => {
    const [jobCategory, setJobCategory] = useState([]);

    useEffect(() => {
        fetch('jobcategorylist.json')
        .then(res => res.json())
        .then(data => setJobCategory(data));
    }, [])
    return (
        <div>
            <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='job-list-container'>
                {
                    jobCategory.map(job => <JobList
                        key={job.id}
                        job={job}
                    ></JobList>)
                }
                </div>
        </div>
    );
};

export default JobCategoryList;