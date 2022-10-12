import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Quizes.css'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Quizes = ({toli}) => {
    return (
        <div className='bg-red-300  p-5 rounded w-3/4 m-auto mb-5 mt-3 drop-shadow-xl relative'>
            <FontAwesomeIcon className='text-end absolute top-0 left-0 p-3' icon={faEye}></FontAwesomeIcon>
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