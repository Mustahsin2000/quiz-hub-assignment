import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({tools}) => {
    const {name,logo,total} = tools;
    // console.log(tools);
    return (
         <div className="component max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100 drop-shadow-2xl " >
	<img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-left font-semibold tracking-wide">{name}</h2>
			<p className="text-gray-100 text-left">Total:{total}</p>
		</div>
		<Link to={`../Topic/${tools.id}`}>
        <button
        
        type="button" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Start Practice</button>
        </Link>
	</div>
</div>
       );

    
};

export default Topic;