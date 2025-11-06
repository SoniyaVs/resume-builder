import commonApi from "./commonApi"
import ServerUrl from "./SERVERURL"


// add api
export const addResumeApi=async (resume)=>{
  return await commonApi(`${ServerUrl}/resumes`,"POST",resume)
} 
// update api
export const updateResumeApi=async (id,resume)=>{
  return await commonApi(`${ServerUrl}/resumes/${id}`,"PUT",resume)
} 
// get api
export const getResumeApi=async (id)=>{
  return await commonApi(`${ServerUrl}/resumes/${id}`,"GET",{})
} 
// delete api
export const deleteResumeApi=async (id)=>{
  return await commonApi(`${ServerUrl}/resumes/${id}`,"DELETE",{})
} 