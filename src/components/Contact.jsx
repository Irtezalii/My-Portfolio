import React from 'react'

const Contact = () =>{
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
            <div className='flex flex-col p-4 justify center max-w-screen-lg mx-auto h-full'>
                <div className='pb-24 mt-20 -  '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to Get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/c3f78cde-5a36-478e-a6e5-f75c4a35b2a2' method='POST' className='flex flex-col w-full md:w-1/2' >
                        <input type='text' name='name' placeholder='Enter your Name Please' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input> 
                        <input type='text' name='email' placeholder='Enter your Email Please' className='p-2 my-6 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
                        <textarea name='message' rows='10'placeholder='Type your Message here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-9 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button> 
              
                    </form>
                </div>
            </div>
        </div>
    )

}


export default Contact