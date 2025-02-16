import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './style.css'
import { Link } from 'react-router-dom';

const Button = ({prop}) => {
  return (
    <div className='flex flex-row gap-6 header-buttons'>
        <Link to="https://github.com/sajeeb131" className='header-button'>
            <FaGithub className='header-social-icon'/>
            Github
        </Link>
        <Link to='https://www.linkedin.com/in/sajeeb-sarkar-094a61311/' className='header-button'>
            <FaLinkedin className='header-social-icon'/>
            LinkedIn
        </Link> 
        <Link className='header-button'>
            <MdEmail className='header-social-icon'/>
            Email
        </Link>
    </div>
    )
}

export default Button