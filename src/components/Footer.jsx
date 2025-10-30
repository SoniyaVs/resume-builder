import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{height:'300px' ,backgroundColor:'purple' ,color:'white'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
            <h3>Contact Us</h3>
            <h5 className='fw-bolder'><MdOutlineAttachEmail /> resumebuilder@gmail.com</h5>
            <h5 className='fw-bolder'><FaPhoneAlt />1234567890</h5>
              <h3>Connect With Us</h3>
            <div className='d-flex justify-content-center fs-4 my-3 '>
                <FaWhatsapp className='me-3'/>
                <FaInstagram className='me-3'/>
                <FaFacebookF />
            </div>
            <h4>Design & Built with 💗 using react</h4>
        </div>
    )
}

export default Footer