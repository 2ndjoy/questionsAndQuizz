import { useLoaderData } from 'react-router-dom';
import React from 'react';
import Topic from '../Topic/Topic';
import './Topics.css'
const Topics = () => {
    const datas = useLoaderData();
    // console.log(datas);
    const { data } = datas;


    return (
        <div>
            <img className='img-fluid' src={require('./body-picture.png')} />
            <div className='d-md-flex d-sm-grid card-container'>
                {
                    data.map(dt => <Topic
                        key={dt.id}
                        dt={dt}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;