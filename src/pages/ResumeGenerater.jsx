import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeGenerater() {
  return (
    <div className='container-fluid '>
      <h1 className='text-center my-5'>Create a Job-winning Resume in Mintues</h1>
      <div style={{ height: '60vh' }} className="row justify-content-center align-items-center">
        <div className="col-1"></div>
        <div className="col-4 border shadow rounded p-5 text-center">
          <IoDocumentText className='fs-1 text-primary mb-3' />
          <h4>Add your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step1</h5>
        </div>
        <div className="col-2"></div>
        <div className="col-4 border shadow rounded p-5 text-center">
          <FaFileDownload className='fs-1 text-danger mb-3' />
          <h4>Download your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step2</h5>
        </div>
        <div className="col-1"></div>
      </div>
      <div className='text-center mb-4 p-4'>
        <Link to={'/form'} className='btn text-white' style={{ backgroundColor: 'purple' }}>Let's Start </Link>
      </div>
    </div>
  )
}

export default ResumeGenerater