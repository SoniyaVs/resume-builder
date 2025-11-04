import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";
import { addResumeApi } from "../services/allAPI"

const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function UserInput({ resumeDetails, setResumeDetails }) {
    const skillSuggestionArray = ['Node JS', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Angular', 'Express', 'Java', 'Python']
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    // resumeDetails get from props
    // const [resumeDetails, setResumeDetails] = React.useState({
    //     username: "",
    //     jobTitle: "",
    //     location: "",
    //     email: "",
    //     mobile: "",
    //     gitHub: "",
    //     linkedIn: "",
    //     portfolio: "",
    //     course: "",
    //     college: "",
    //     university: "",
    //     passoutYear: "",
    //     jobtype: "",
    //     company: "",
    //     clocation: "",
    //     duration: "",
    //     userDeatils: [],
    //     summary: ""

    // })

    console.log(resumeDetails);
    const skillRef = React.useRef();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
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
    const renderStep = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h3>Personal Details</h3>
                    <div className=" row p-5">
                        <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} id="standard-basic-name" label="Fullname" variant="standard" />
                        <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} id="standard-basic-job" label="Job Title" variant="standard" />
                        <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-location" label="Location" variant="standard" />
                    </div>
                </div>
            )
            case 1: return (
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
            )
            case 2: return (
                <div>
                    <h3>Educational Details</h3>
                    <div className=" row p-5">
                        <TextField value={resumeDetails.course} onChange={e => setResumeDetails({ ...resumeDetails, course: e.target.value })} id="standard-basic-course" label="Course Name" variant="standard" />
                        <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} id="standard-basic-college" label="College Name" variant="standard" />
                        <TextField value={resumeDetails.university} onChange={e => setResumeDetails({ ...resumeDetails, university: e.target.value })} id="standard-basic-university" label="University" variant="standard" />
                        <TextField value={resumeDetails.passoutYear} onChange={e => setResumeDetails({ ...resumeDetails, passoutYear: e.target.value })} id="standard-basic-year" label="Year Of Passout" variant="standard" />
                    </div>
                </div>
            )
            case 3: return (
                <div>
                    <h3>Professional Details</h3>
                    <div className=" row p-5">
                        <TextField value={resumeDetails.jobtype} onChange={e => setResumeDetails({ ...resumeDetails, jobtype: e.target.value })} id="standard-basic-internship" label="Job or Internship" variant="standard" />
                        <TextField value={resumeDetails.company} onChange={e => setResumeDetails({ ...resumeDetails, company: e.target.value })} id="standard-basic-company" label="Company Name" variant="standard" />
                        <TextField value={resumeDetails.clocation} onChange={e => setResumeDetails({ ...resumeDetails, clocation: e.target.value })} id="standard-basic-clocation" label="Company Location" variant="standard" />
                        <TextField value={resumeDetails.duration} onChange={e => setResumeDetails({ ...resumeDetails, duration: e.target.value })} id="standard-basic-duration" label="Duration" variant="standard" />
                    </div>
                </div>
            )
            case 4: return (
                <div>
                    <h3>Skills</h3>
                    <div className="d-flex align-items-center justify-content-between p-5">
                        <input ref={skillRef} type="text" className="form-control" placeholder='Add Skills' />
                        <Button onClick={() => addSkills(skillRef.current.value)} variant='text'>ADD</Button>
                    </div>
                    <h5>Suggestions</h5>
                    <div className="d-flex flex-wrap justify-content-between">
                        {skillSuggestionArray.map((item, index) => (
                            <Button className='m-2' onClick={() => addSkills(item)} key={index} variant='outlined'>{item}</Button>
                        ))}
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
            )
            case 5: return (
                <div>
                    <h3>Summary </h3>
                    <div className="p-3 row">
                        <TextField onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={5} defaultValue={"Highly motivated MERN Stack Developer with a strong foundation in web development. Skilled in creating responsive web applications using MongoDB, Express.js, React, and Node.js. Passionate about solving complex technical challenges and delivering innovative software solutions"} />
                    </div>
                </div>
            )
            default: return null
        }
    }

    const handleAddResumeApi = async () => {
        const { username, jobTitle, location } = resumeDetails
        if (!username && !jobTitle && !location) {
            alert("Please Fill the form")

        } else {
            console.log("Api Call...");
           try{
             const result=await addResumeApi()
           }
           catch(err){
            console.log(err);
            
           }
            //    api call
            // success
        }

    }
    return (
        <Box sx={{ width: '100%' }} >
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {/* render content accoring to their steps */}
                    <Box>
                        {renderStep(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        {activeStep === steps.length - 1 ? <Button onClick={handleAddResumeApi}>Finish</Button> : <Button onClick={handleNext}>Next</Button>}


                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default UserInput