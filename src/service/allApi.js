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

//add gaming highlights api
export const addGamingHighlightsAPI = async(reqbody)=>{
    return await commonAPI(`POST`,`${serverURL}/gamingHighlights`, reqbody)
}

//get gaming highlights api
export const getGamingHighlightsAPI = async()=>{
    return await commonAPI(`GET`,`${serverURL}/gamingHighlights`, "")
}

//add travel and lifestyle api
export const addTravelAndLifestyleAPI = async(reqbody)=>{
    return await commonAPI(`POST`,`${serverURL}/travelAndLifestyle`,reqbody)
}

//get travel and lifestyle api
export const getTravelAndLifestyleAPI = async()=>{
    return await commonAPI(`GET`,`${serverURL}/travelAndLifestyle`,"")
}

//add anime contents api
export const addAnimeContentsAPI = async(reqbody)=>{
    return await commonAPI(`POST`, `${serverURL}/animeContents`, reqbody)
}

//get anime contents api
export const getAnimeContentAPI = async()=>{
return await commonAPI(`GET`,`${serverURL}/animeContents`,"")
}

//add education tutorial api
export const addEducationTutorialAPI = async(reqbody)=>{
    return await commonAPI(`POST`,`${serverURL}/educationAndTutorial`,reqbody)
}

//get education tutorial api
export const getEducationTutorialAPI = async()=>{
    return await commonAPI(`GET`,`${serverURL}/educationAndTutorial`,"")
}

//add other videos api
export const addOtherVideoAPI = async(reqbody)=>{
    return await commonAPI(`POST`,`${serverURL}/otherVideos`, reqbody)
}

//get other videos api
export const getOtherVideoAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/otherVideos`,"")
}