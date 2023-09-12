import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const SocialLinks = () => {

    const links = [
        {
          id: 1,
          child: (
            <> Linkedin <FaLinkedin size={25}/>
            </> 
          ),
          href: 'https://www.linkedin.com',
          style: 'rounded-tr-md'
        },

        {
            id: 2,
            child: (
              <> GitHub <FaGithub size={25}/>
              </> 
            ),
            href: 'https://www.github.com/..',
          },

          {
            id: 3,
            child: (
              <> Mail <HiOutlineMail size={25}/>
              </> 
            ),
            href: 'mailto:Irteza_alii@Outlook.com',
          },
          
          {
            id: 4,
            child: (
              <> Resume <BsFillPersonLinesFill size={25}/>
              </> 
            ),
            href: '/My Resume.pdf',
            style: 'rounded-br-md',
            download: true,
          }  
    ]
    return( <div className='hidden lg:flex flex-col top-[35%] left-2 fixed '>
        <ul>
            {links.map(({id,child,href,style,download}) =>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300  bg-gradient-to-r from-blue-400 via-blue-600 to-purple-500 ' + '' + style}> 
                    <a 
                      href = {href}
                      className='flex justify-between items-center w-full text-white'
                      download={download}
                      target='_blank'
                    > 
                    {child}
                    </a>              
                </li>
                ))}
        </ul>
    </div>
    )
};

export default SocialLinks;