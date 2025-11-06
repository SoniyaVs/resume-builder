import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { getResumeApi } from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";

import { IoMdRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa6";
import Edit from '../components/Edit';
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
                    <div className="col-md-8 col-12">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <button className='btn text-primary fs-4'><FaFileDownload /></button>
                            <Edit resumeDetails={resume} setResumeDetails={setResume} />
                            <Link to={'/history'} className='btn text-primary fs-3'><IoMdRefreshCircle /></Link>
                            <Link to={'/resume'} className='btn text-success fs-4'><FaBackward /></Link>
                        </div>
                        <Preview resumeDetails={resume} />
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewResume