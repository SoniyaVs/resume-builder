import React from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import { FaXmark } from "react-icons/fa6";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Edit({ resumeDetails, setResumeDetails }) {
    const skillRef = useRef();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addSkills = (skill) => {
        if (resumeDetails.userDeatils.includes(skill)) {
            alert("The given skills are already added,Please add another")
        } else {
            setResumeDetails({ ...resumeDetails, userDeatils: [...resumeDetails.userDeatils, skill] })
            skillRef.current.value = ""
        }
    };

    const removeSkill = (skill) => {
        setResumeDetails({ ...resumeDetails, userDeatils: resumeDetails.userDeatils.filter(item => item != skill) })
    }
    return (
        <div>
            <button onClick={handleOpen} className='btn text-warning fs-3'><MdEditDocument /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal details */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className=" row p-5">
                                <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} id="standard-basic-name" label="Fullname" variant="standard" />
                                <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} id="standard-basic-job" label="Job Title" variant="standard" />
                                <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-location" label="Location" variant="standard" />
                            </div>
                        </div>
                        {/* contact */}
                        <div>
                            <h3>Contact Details</h3>
                            <div className=" row p-5">
                                <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" />
                                <TextField value={resumeDetails.mobile} onChange={e => setResumeDetails({ ...resumeDetails, mobile: e.target.value })} id="standard-basic.number" label="Phone Number" variant="standard" />
                                <TextField value={resumeDetails.gitHub} onChange={e => setResumeDetails({ ...resumeDetails, gitHub: e.target.value })} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                                <TextField value={resumeDetails.linkedIn} onChange={e => setResumeDetails({ ...resumeDetails, linkedIn: e.target.value })} id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" />
                                <TextField value={resumeDetails.portfolio} onChange={e => setResumeDetails({ ...resumeDetails, portfolio: e.target.value })} id="standard-basic-portfolio" label=" Portfolio Link" variant="standard" />

                            </div>
                        </div>
                        {/* education */}
                        <div>
                            <h3>Educational Details</h3>
                            <div className=" row p-5">
                                <TextField value={resumeDetails.course} onChange={e => setResumeDetails({ ...resumeDetails, course: e.target.value })} id="standard-basic-course" label="Course Name" variant="standard" />
                                <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} id="standard-basic-college" label="College Name" variant="standard" />
                                <TextField value={resumeDetails.university} onChange={e => setResumeDetails({ ...resumeDetails, university: e.target.value })} id="standard-basic-university" label="University" variant="standard" />
                                <TextField value={resumeDetails.passoutYear} onChange={e => setResumeDetails({ ...resumeDetails, passoutYear: e.target.value })} id="standard-basic-year" label="Year Of Passout" variant="standard" />
                            </div>
                        </div>
                        {/* work */}
                        <div>
                            <h3>Professional Details</h3>
                            <div className=" row p-5">
                                <TextField value={resumeDetails.jobtype} onChange={e => setResumeDetails({ ...resumeDetails, jobtype: e.target.value })} id="standard-basic-internship" label="Job or Internship" variant="standard" />
                                <TextField value={resumeDetails.company} onChange={e => setResumeDetails({ ...resumeDetails, company: e.target.value })} id="standard-basic-company" label="Company Name" variant="standard" />
                                <TextField value={resumeDetails.clocation} onChange={e => setResumeDetails({ ...resumeDetails, clocation: e.target.value })} id="standard-basic-clocation" label="Company Location" variant="standard" />
                                <TextField value={resumeDetails.duration} onChange={e => setResumeDetails({ ...resumeDetails, duration: e.target.value })} id="standard-basic-duration" label="Duration" variant="standard" />
                            </div>
                        </div>
                        {/* skill */}
                        <div>
                            <h3>Skills</h3>
                            <div className="d-flex align-items-center justify-content-between p-5">
                                <input ref={skillRef} type="text" className="form-control" placeholder='Add Skills' />
                                <Button onClick={() => addSkills(skillRef.current.value)} variant='text'>ADD</Button>
                            </div>
                            <h5>Added Skills:</h5>
                            <div className="d-flex flex-wrap justify-content-between my-3">
                                {
                                    resumeDetails.userDeatils?.length > 0 ?
                                        resumeDetails.userDeatils?.map((skill, index) => (
                                            <Button className='m-1' key={index} variant="contained">{skill} <FaXmark onClick={() => removeSkill(skill)} className='ms-2 cursor-pointer' /></Button>

                                        ))
                                        : <p className='fw-bolder'>"No skills are added yet!!!"</p>
                                }
                            </div>
                        </div>

                        {/* summary */}
                        <div>
                            <h3>Summary </h3>
                            <div className="p-3 row">
                                <TextField onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={5} defaultValue={"Highly motivated MERN Stack Developer with a strong foundation in web development. Skilled in creating responsive web applications using MongoDB, Express.js, React, and Node.js. Passionate about solving complex technical challenges and delivering innovative software solutions"} />
                            </div>
                        </div>
                        {/* update btn */}
                        <div className='my-5'>
                            <button className='btn btn-warning text-light'>Update</button>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit