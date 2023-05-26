import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './Statistics.css';



const Statistics = () => {
    const data = [
        {
            id: 1,
            name: "Assignment-1",
            marks: 29
        },
        {
            id: 2,
            name: "Assignment-2",
            marks: 29
        },
        {
            id: 3,
            name: "Assignment-3",
            marks: 25
        },
        {
            id: 4,
            name: "Assignment-4",
            marks: 60
        },
        {
            id: 5,
            name: "Assignment-5",
            marks: 60
        },
        {
            id: 6,
            name: "Assignment-6",
            marks: 60
        },
        {
            id: 7,
            name: "Assignment-7",
            marks: 60
        }
    ]
    return (
        <div>
            <h1>Assignment Marks History</h1>
            <div className='statistics'>
                <PieChart 
                    width={400} 
                    height={400}
                    data={data}
                >
                <Pie
                    dataKey="marks"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;