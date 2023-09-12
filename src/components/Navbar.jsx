import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

export default function Navbar() {

  const [nav, setnav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 border text-white bg-black border-black px-4 fixed" >
      <div>
        <h1 className='text-5xl ml-2 font-serif   bg-gradient-to-r from-blue-500  to-purple-500 bg-clip-text text-transparent  '>Irteza</h1> 
      </div>


      <ul className='hidden md:flex text-2xl '>

        {links.map(({id, link}) => (
          <li 
          key={id} 
          className='px-4 cursor-pointer  font-medium  capitalize text-gray-500 hover:scale-90  duration-200'>

          <Link to ={link} spy={true} smooth={true} offset={-60} duration={500}> {link} </Link> 
          </li>

        ))}
        
      </ul>
      <div onClick={() => setnav(!nav)} 
        className='cursor-pointer pr-3 z-30  text-gray-500 md:hidden'>
          {nav ? <FaTimes className=" text-red-700 " size={30} /> : <FaBars size={30}/>}
      </div>

      { nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500'>
          {links.map(({id, link}) => (
            <li 
            key={id} 
            className='px-4 cursor-pointer capitalize  py-6 text-4xl hover:scale-90 duration-100'>
              <Link onClick={() => setnav(!nav)} to ={link} smooth offset={-70} duration={500}> {link} </Link>
            </li>
          ))}       
        </ul>
      )} 
      
    </div>
  )
}
