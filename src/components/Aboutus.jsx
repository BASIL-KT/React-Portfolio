import React from 'react'

function Aboutus() {
  return (
    <>
    <div className='p-5 mt-5 row container-fluid'>
        <div className='col-8'>
            <h1>About Us</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, suscipit iste soluta cum eos rerum praesentium officia id tenetur ipsam, culpa ut itaque porro provident, consequatur odit doloremque explicabo voluptas!</p>
        </div>
        <div className='col-4'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/OqyURAoQ4NQ?si=q6P_rmeBmkkXUwXh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    </>
  )
}

export default Aboutus