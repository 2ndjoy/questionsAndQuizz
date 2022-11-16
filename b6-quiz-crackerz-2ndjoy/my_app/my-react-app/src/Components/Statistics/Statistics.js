// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import './Statistics.css';

// import Statistic from '../Statistic/Statistic';
const Statistics = () => {
    const datas = useLoaderData();
    const { data } = datas;
    // console.log(data)
    return (
        <div>
            <h2>This is statistics</h2>
            <div className='stats-container'>
                <LineChart width={250} height={250} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <XAxis dataKey='name' />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;