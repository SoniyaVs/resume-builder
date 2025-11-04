import React from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'
function UserForm() {
  const [resumeDetails, setResumeDetails] = React.useState({
    username: "",
    jobTitle: "",
    location: "",
    email: "",
    mobile: "",
    gitHub: "",
    linkedIn: "",
    portfolio: "",
    course: "",
    college: "",
    university: "",
    passoutYear: "",
    jobtype: "",
    company: "",
    clocation: "",
    duration: "",
    userDeatils: [],
    summary: ""

  })
  return (
    <div>
      <div className='row p-5'>
        <div className="col-lg-6">
          <UserInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-lg-6">
         {resumeDetails.username && <Preview  resumeDetails={resumeDetails}/>}
        </div>
      </div>
    </div>
  )
}

export default UserForm