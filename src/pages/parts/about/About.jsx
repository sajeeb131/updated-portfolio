import React from 'react'
import './about.css'
import profileImage from '../../../assets/pp.jpg'
const About = () => {
  return (
    <section className='flex flex-row gap-32 about-container'>
        <div className='flex flex-col items-start about-left about-part'>
            <header className='flex flex-row items-center gap-2 mb-2 about-header'>
                <div className='about-icon'>⚡</div>
                <span className='ubuntu-bold about-header-title'>About Me</span>
            </header>
            <article className='flex flex-col items-start gap-4 about-para'>
                <p>Hi, I'm a <span className='text-highlight-green'>software engineer</span> with a passion for building scalable and efficient systems. I'm always looking for ways to improve my skills and learn new technologies.</p>
                <p>I started coding since my college days. In my early coding days i was very much invovled in<span className='text-highlight-green'> problem solving</span>. Now, I am more passionate about building <span className='text-highlight-green'>robust and user-centric websites,</span> but still have a knack for problem-solving.
                </p>
                <p>
                I'm also big fan of movies, tv-series and animations. I love to play games in my free times. I'm a big fan of chess.
                </p>
            </article>
        </div>
        <div className='flex flex-row items-center justify-center about-right about-part'>
            <img src={profileImage} alt="profile-photo"  className='profile-image'/>
        </div>
    </section>
  )
}

export default About