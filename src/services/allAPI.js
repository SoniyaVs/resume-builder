import commonApi from "./commonApi"
import ServerUrl from "./SERVERURL"


// add api
export const addResumeApi=async (resume)=>{
  return await commonApi(`${ServerUrl}`/resumes,"POST",resume)
} 
// update api
// get api
// delete api