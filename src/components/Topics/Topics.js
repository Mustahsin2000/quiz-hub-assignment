import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'
const Topics = () => {
    const elements = useLoaderData();
    // console.log(elements);
    return (
        <div className='rafi'>
            {
              elements.data.map(tools=><Topic
                tools={tools}
                ></Topic>)
            }
            
        </div>
    );
};

export default Topics;