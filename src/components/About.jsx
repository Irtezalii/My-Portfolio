import React from "react";

const About = () => {
    return  <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white">

        <div className="max-w-screen-lg  p-20   mx-auto flex flex-col    ">

            <div className=" pb-8 mt-24   ">

                <p className=" text-6xl font-bold md:mt-12 inline border-b-4 border-gray-500">
                    About
                </p>
            </div>

            <p className=" text-2xl mt-20 text-gray-300  ">
            I am a highly motivated individual with a strong team player mindset, complemented by excellent oral and written communication skills. My passion for continuous learning drives me to seek and adopt new knowledge actively. I am determined to build a career in a reputable organization that provides a professional environment and opportunities for career development, where I can apply my diverse skill set effectively.

            </p>
            <br/>
            <p className="text-2xl  text-gray-300">
            Over the past three years, I have gained valuable experience as a Chatbot Developer at <b>Proxima.ai</b> while also exploring the field of frontend development. My ultimate goal is to evolve into a MERN stack developer. I am currently pursuing my education at Karachi University's UBIT Department, where I am in my third year of the BSCS program, eager to further enhance my skills and knowledge.
            </p>
        </div>

    </div>
};

export default About;