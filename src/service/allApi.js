import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//add audio/video song api
export const addAudioVideoAPI = async(reqbody)=>{
    return await commonAPI(`POST`, `${serverURL}/videos`, reqbody)
} 

//get audio/video song api
export const getAudioVideoAPI = async()=>{
    return await commonAPI(`GET`,`${serverURL}/videos`,"")
}