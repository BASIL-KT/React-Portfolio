import React from 'react'

function Works() {
  return (
   <>
   
   <h1 className='text-center mt-3'>Our Works</h1>

   <div className='d-flex justify-content-around flex-wrap p-3'>

    <div className='card' style={{width:'18rem'}}>
        <img src="https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149220443.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid" height={'200px'} className='card-img-top' alt="" />
        <div className='card-body'>
            <h5 className='card-title'>Work1</h5>
        </div>
    </div>
    <div className='card' style={{width:'18rem'}}>
        <img src="https://www.shutterstock.com/image-photo/text-portfolio-on-brown-paper-260nw-387456811.jpg" height={'200px'}  className='card-img-top' alt="" />
        <div className='card-body'>
            <h5 className='card-title'>Work2</h5>
        </div>
    </div>
    <div className='card' style={{width:'18rem'}}>
        <img src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/robinson-169hero-portfolio-shutterstock.jpg?w=2880&quality=85" height={'200px'}  className='card-img-top' alt="" />
        <div className='card-body'>
            <h5 className='card-title'>Work3</h5>
        </div>
    </div>
    <div className='card' style={{width:'18rem'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEIXVrIGqyC5hEYiA7r9z4vaBSDNxmtvMAQ2iyrSLuGRBo0uZne9GfUcYPpcllvqD6EQ&usqp=CAU" height={'200px'}  className='card-img-top' alt="" />
        <div className='card-body'>
            <h5 className='card-title'>Work4</h5>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Works