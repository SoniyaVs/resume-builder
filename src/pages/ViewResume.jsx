import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { addHistoryApi, getResumeApi } from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";

import { IoMdRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa6";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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

    const handleDownloadResume = async () => {
        // create pdf document
        const doc = new jsPDF();
        const preview = document.getElementById("preview")
        // screenshot of preview html2canvas
        const canvas = await html2canvas(preview, { scale: 2 })
        console.log(canvas);
        // convert canvas to img
        const resumeImg = canvas.toDataURL('image/png')

        const pageWidth = doc.internal.pageSize.getWidth()
        const resumeWidth = pageWidth - 20
        const resumeHeight = canvas.height * resumeWidth / canvas.width
        // add to pdf
        doc.addImage(resumeImg, 'PNG', 0, 0, resumeWidth, resumeHeight)
        // download pdf
        doc.save(`${resume.username}-resume.pdf`)

        // getdate
        const localDateTime = new Date()
        const timeStamp = `${localDateTime.toLocaleDateString()},${localDateTime.toLocaleTimeString()}`
        try {
            await addHistoryApi({ timeStamp, resumeImg })
        } catch (err) {
            console.log(err);

        }
    }
    return (
        <>

            <div className="container my-3">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-12">
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <button onClick={handleDownloadResume} className='btn text-primary fs-4'><FaFileDownload /></button>
                            <Edit resumeDetails={resume} setResumeDetails={setResume} />
                            <Link to={'/history'} className='btn text-primary fs-3'><IoMdRefreshCircle /></Link>
                            <Link to={'/resume'} className='btn text-success fs-4'><FaBackward /></Link>
                        </div>
                        <div id='preview'>  <Preview resumeDetails={resume} /></div>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewResume