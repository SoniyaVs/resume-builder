import React from 'react'
import { Link } from 'react-router-dom'
Link

function Pnf() {
  return (
    <div className='d-flex justify-content-center align-items-center p-5 my-3 flex-column'>
      <img className='img-fluid ' style={{width:'700px'}} src="https://img.freepik.com/premium-vector/404-page-site-with-text-page-found-icon-danger-isolated-illustration-lost-page_456605-343.jpg" alt="pnf" />
       <Link to={'/'} className='btn text-light ' style={{backgroundColor:'purple'}}>Go to Home</Link>
    </div>
  )
}

export default Pnf