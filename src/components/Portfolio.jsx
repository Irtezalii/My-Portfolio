import React from "react";
import img from '../assets/img.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: img
        },
        {
            id: 2,
            src: img
        },
        {
            id: 3,
            src: img
        },
        {
            id: 4,
            src: img
        },
        {
            id: 5,
            src: img
        },
        {
            id: 6,
            src: img
        },
    ]

    return <div name="portfolio" className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 "> 
                    Portfolio
                </p>
                <p className="py-6">
                    Check out some of my work right here!
                </p>
            </div>

            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                portfolios.map(({id, src}) => ( 
                <div key={id} className="shadow-lg  shadow-cyan-700 rounded-2xl   ">
                    <img src={src} alt="" className=" rounded-3xl duration-200 hover:scale-105 " />
                    <div className="flex items-center justify-center">
                        <button className="rounded-lg shadow-sm shadow-gray-800   w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  " >Demo</button>
                        <button className="rounded-lg shadow-sm shadow-gray-800 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>            
                    ))      
                    
            }

            </div>
        </div>
    </div>
};

export default Portfolio;