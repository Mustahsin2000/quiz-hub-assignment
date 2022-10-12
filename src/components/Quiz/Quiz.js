import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Quiz = () => {
    const quizelement = useLoaderData();
    console.log(quizelement.data.questions)
 
    // const {id} = quizelement;
    // console.log(quizelement)
    return (
        <div>
            <h2 className='text-4xl font-bold'>Quizes</h2>
           {
            quizelement.data.questions.map(toli =><Quizes
            
            toli={toli}
            ></Quizes>)

           }
         
        </div>
    );
};

export default Quiz;