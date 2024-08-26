import React from 'react'

function Contact() {
  return (
    <>
    <div className='p-3 mb-3'>
        <h1>Contact</h1>
        <textarea name="" className='form-control' id="" placeholder='Enter your message'></textarea>
        <input type="text" className='form-control mt-4' placeholder='Enter Your Email ID' />
        <button className='btn btn-info mt-3'>Click Here</button>
    </div>
    </>
  )
}

export default Contact