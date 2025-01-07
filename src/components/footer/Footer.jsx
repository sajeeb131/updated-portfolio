import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-content'>
            <div className='footer-left'>

            </div>
            <div className='flex flex-col text-gray footer-mid'>
                <span>Built with <span className='text-highlight-green'>React</span>, <span className='text-highlight-green'>Tailwind</span> and <span className='text-highlight-green'>Javascript</span>.
                </span>
                <span className=''>Developed by Sajeeb Sarkar. Special thanks to Abdul Rahman.</span>
                <span></span>
            </div>
            <div className='footer-right'></div>
        </div>
    </footer>
    )
}

export default Footer