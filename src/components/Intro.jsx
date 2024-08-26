import React from 'react'

function Intro() {
  return (
    <>
    <div className='row container-fluid align-items-center' style={{height:'90vh'}}>
        <div className='col p-4'>
            <h1>portfolio Webpage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad amet, vitae quos facilis, odio minus ab repellat maxime consectetur at dignissimos aspernatur error quia earum, doloribus corrupti incidunt animi.</p>
            <a href="" className='btn btn-success'>Visit</a>
        </div>
        <div className='col'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/portfolio-illustration-download-in-svg-png-gif-file-formats--actress-making-multimedia-industry-pack-illustrations-5624195.png" alt="" className='img-fluid' />
        </div>

    </div>
    </>
  )
}

export default Intro