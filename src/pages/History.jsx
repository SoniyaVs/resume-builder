import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { MdDelete } from "react-icons/md";


function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded  Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-80px' }}>Back</Link>
      <Box component="section" className='container-fluid'>
       <div className="row">
        <div className="col-4">
          <Paper elevation={3} sx={{my:2,p:5,textAlign:'center'}}>
            <div className="d-flex justify-content-center align-items-center">
              <h6>Review At:date&time</h6>
              <button className='btn text-danger text-center fs-5'><MdDelete/></button>
            </div>
            <div className="border rounded p-3">
              <img  style={{width:'200px',height:'200px'}} src="https://i.pinimg.com/736x/3f/de/2c/3fde2c23ebf3759c436a971aa77266d0.jpg" alt="resume" />
            </div>
          </Paper>
        </div>
       </div>
      </Box>
    </div>
  )
}

export default History