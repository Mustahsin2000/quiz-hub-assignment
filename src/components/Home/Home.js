import React from 'react';
import { Link } from 'react-router-dom';
import Topics from '../Topics/Topics';



const Home = () => {
    return (
        <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
            Welcome To Smart Quiz Hub
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Best quiz crackers platform for high quality Smart quiz 
            Appliances at extremely interesting price.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/topics">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
              >
                start quiz
              </button>
            </Link>
            <Link to="/statistics">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
              >
                statistics
              </button>
            </Link>
            <Link to="/blog">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
              >
                blog
              </button>
            </Link>
          </div>
   
        </div>
      </div>
     <section>
     </section>
    </section>
   
    );
};

export default Home;