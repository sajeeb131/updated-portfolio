import React from 'react'
import './contact.css'
import Button from '../../../components/Button'
const Contact = () => {
  return (
    <div className='flex flex-col items-center gap-6 contact-container'>
        <h1 className='text-5xl text-white ubuntu-bold'>Contact Me!</h1>
        <div className='flex flex-col contact-bio'>
            <span className='text-gray'>I'm currently specializing in
              <span className='text-highlight-green'> Full-stack development.</span>
            </span>
            <span className='text-gray'>Feel free to contact me if you have inquiry.</span>
        </div>
        <div className='contact-buttons'>
            <Button />
        </div>
    </div>
  )
}

export default Contact