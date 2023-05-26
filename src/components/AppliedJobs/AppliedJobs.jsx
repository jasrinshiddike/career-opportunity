import React, { useEffect, useState } from 'react';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';
import JobFeatureList from '../JobFeatureList/JobFeatureList';
import './AppliedJobs.css';


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect( () => {
        const storedData = JSON.parse(localStorage.getItem('applied'));
        if(storedData){
            setAppliedJobs(storedData);
            setFilteredJobs(storedData);
        }
    }, [])

    const handleFilter = (event) => {
        const value = event.target.value;
        const filterData = appliedJobs.filter((item) => item.workplace == value );
        setFilteredJobs(filterData)
      }
    return (
        <div>
            <h2>Applied Jobs</h2>
            <div className='filter-job'>
                <label htmlFor="">Filter Job: </label>
                <select onChange={handleFilter} className="select-job">
                    <option disabled selected>
                         Choose Here
                    </option>
                    <option value="Onsite">Onsite</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>
            
            
            {
                filteredJobs.length> 0 ?
                filteredJobs?.map(job => <div className='job-applied'><SingleAppliedJob
                key={job.id}
                job={job}
                ></SingleAppliedJob>
                </div>)
                :
                <h2>No Applied Job Found</h2>
            }
            
        </div>
    );
};

export default AppliedJobs;