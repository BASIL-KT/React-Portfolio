import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='row p-4 mt-5 bg-info'>
        <div className='col-4'>
            <h1>portfolio</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, hic aspernatur. Quam nostrum dolorum aperiam minima at totam commodi. Quaerat, sit! Officia magni quaerat harum commodi velit modi aperiam. Accusantium.</p>
        </div>
        <div className='col-4'>
            <h3>Links</h3>
            <a href="">Link1</a>
            <a href="">Link2</a>
            <a href="">Link3</a>
        </div>
        <div className='col-4'>
            <h2>Message Us</h2>
            <textarea name="" className='form-control mt-3' id="" placeholder='Enter your message'></textarea>
            <button className='btn btn-success mt-3'>Send</button>
        </div>
     <h3 className='text-center mt-4'>Porfolio &copy; Reserved</h3>
    </div>
    
    </>
  )
}

export default Footer