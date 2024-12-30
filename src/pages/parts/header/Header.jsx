import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './header.css'
const Header = () => {
  return (
    <div className='flex flex-col items-start gap-10 header-container'>
        <header className=' flex flex-col items-start gap-0 header'>
            <span className='header-span'>Hi there! I am- </span>
            <span className='header-span-2'>Sajeeb Sarkar.</span>
        </header>
        <article className='header-bio'>
            <span className='bio-title'>Software Engineer. </span>
            A full-stack web development enthusiast who loves problem solving.
        </article>
        <article className='flex flex-col items-start header-list'>
            <div className="header-list-item">
                🚀
                <span className="header-list-item-span">
                    MERN stack developer, currently learning DevOps
                </span>
            </div>
            <div className="header-list-item">
                ⚡
                <span className="header-list-item-span">
                    Jr. Software Developer at Clarex ltd.
                </span>
            </div>
        </article>
        <div className='flex flex-row gap-6 header-buttons'>
            <button className='header-button'>
                <FaGithub className='header-social-icon'/>
                Github
            </button>
            <button className='header-button'>
                <FaLinkedin className='header-social-icon'/>
                LinkedIn
            </button>
            <button className='header-button'>
                <MdEmail className='header-social-icon'/>
                Email
            </button>
        </div>
    </div>
    );
}

export default Header