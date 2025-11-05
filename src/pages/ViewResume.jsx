import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { useParams } from 'react-router-dom'
import { getResumeApi } from '../services/allAPI'
function ViewResume() {
    const { id } = useParams();
    console.log(id);
    
    const [resume, setResume] = useState({})
    useEffect(() => {
        getResumeDetails()
    }, [])

    const getResumeDetails = async () => {
        const result = await getResumeApi(id)
        console.log(result);
        if (result.status == 200) {
            setResume(result.data)
        }

    }
    return (
        <>

            <div className="container my-3">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <Preview resumeDetails={resume} />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

        </>
    )
}

export default ViewResume