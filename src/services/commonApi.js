import axios from "axios"
const commonApi= async (url,httoMethod,reqBody)=>{
    const requestConfig={
       url,
       method:httoMethod,
       data:reqBody
    }
   return await axios(requestConfig).then(res=>res).catch(err=>err)
}
export default commonApi