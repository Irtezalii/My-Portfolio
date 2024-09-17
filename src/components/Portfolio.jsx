import React from "react";
import Project1 from '../assets/Project1.jpg'
import Project8 from '../assets/Project8.jpeg'
import Project3 from '../assets/Project3.jpeg'
import Project4 from '../assets/Project4.jpeg'
import Project5 from '../assets/Project5.jpeg'
import Project6 from '../assets/Project6.jpeg'
// Project2, Project3, Project4, Project5, Project6, Project7

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Project1
        },
        {
            id: 2,
            src: Project8
        },
        {
            id: 3,
            src: Project3
        },
        {
            id: 4,
            src: Project4
        },
        {
            id: 5,
            src: Project5
        },
        {
            id: 6,
            src: Project6
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

            <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-16 sm:px-13">

            {
                portfolios.map(({id, src}) => ( 
                <div key={id} className="shadow-lg  shadow-cyan-700 rounded-2xl   ">
                    <img src={src} alt="" className=" rounded-3xl duration-200 hover:scale-105 object-fill h-80 w-80 "  />
                    {/* className="object-cover w-full h-full rounded-3xl duration-200 hover:scale-105" style={{ aspectRatio: '1/1' }}  */}
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