import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';

import JobFeature from '../JobFeature/JobFeature';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import Banner from '../Banner/Banner';

const Home = () => {
    const jobList = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <JobFeature></JobFeature>
        </div>
    );
};

export default Home;