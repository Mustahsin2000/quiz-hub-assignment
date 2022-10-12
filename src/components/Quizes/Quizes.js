import React from 'react';
import './Quizes.css'
const Quizes = ({toli}) => {
    return (
        <div className='bg-red-300  p-5 rounded w-3/4 m-auto mb-5 mt-3 drop-shadow-xl'>
              <div className='question'>
                <h2 className='text-3xl text-white'>Question:{toli.question}</h2>
                </div>
               <div className='answer'>
               {toli.options.map(kala=><li className='answer-element font-semibold'>{kala}</li>)
               }
               </div>
        </div>
    );
};

export default Quizes;