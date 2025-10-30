import React from 'react'
import { Divider, Button } from '@mui/material'

function Preview() {
  return (
    <div style={{ margin: '70px' }} className='shadow p-5  w-100 rounded text-center'>
      <h3>Name</h3>
      <h5>Job Title</h5>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>Email</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-2'>
        <a href="" target='_blank'>GITHUB</a>|
        <a href="" target='_blank'>LINKEDIN</a>|
        <a href="" target='_blank'>PORTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ut est porro. Molestiae ad, animi quia ipsa, atque quo eum quis ducimus eligendi rem totam iure! Praesentium adipisci vel aspernatur?</p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
      <h5>Course Name</h5>
      <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout Year</span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
      <h5>Job or Internship</h5>
      <p><span className='mx-2'>Company Name</span>|<span className='mx-2'>Company Location</span>|<span className='mx-2'>Duration </span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between">
        <Button className='m-1' variant="contained">Node JS</Button>
      </div>

    </div>
  )
}

export default Preview