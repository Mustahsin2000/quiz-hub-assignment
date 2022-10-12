import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'
const Topics = () => {
    const elements = useLoaderData();
    // console.log(elements);
    return (
        <div className='grid gap-9 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-1 sm:grid-cols-2 w-3/4 m-auto'>
            {
              elements.data.map(tools=><Topic
                tools={tools}
                ></Topic>)
            }
            
        </div>
    );
};

export default Topics;