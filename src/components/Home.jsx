import React, {useState} from 'react';
import {BsArrowRight} from 'react-icons/bs';
import heroImage from '../assets/heroImage.png';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name ='home' className ='h-screen w-full bg-gradient-to-b from-black via-black  to-gray-700    '>
            <div className =' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white '>
                <div className =' sm:-ml-80 md:ml-5   flex flex-col  justify-center h-full '>
                    <h2 className ='sm:text-5xl sm:mt-5  md:text-6xl  font-bold text-white' >
                        I'm a New Developer
                    </h2>
                    <p className ='text-gray-500 py-4 max-w-md sm:text-2xl'>
                        I'm a student and learning React & This is my Portfolio.
                    </p>
                    <div>
                        <Link to='portfolio' smooth offset={-60} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-blue-500  to-purple-500'  >
                            Portfolio
                            <span className = 'ml-1 group-hover:rotate-180     duration-300'>
                                <BsArrowRight size={15}/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt = 'my profile' className = 'mb-10   rounded-full   mx-auto w-2/3 md:   hover:-translate-y-1 hover:scale-110  shadow-2xl   shadow-purple-800     ' ></img>
                </div>
            </div>
        </div>
    );
};

export default Home;