import { UpdateProfileForm } from "../../interfaces/postinterface"
import { AuthAxios } from "../../utils/axiosConfig/axiosConfig"




export const getCollector = async (Id:string) => {
    try {
      const response = await AuthAxios.get(`collector/${Id}`)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }


export const personalProfile = async (formData: UpdateProfileForm) => {
    try {
      const response = await AuthAxios.put('collector/personal-profile', formData)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }


  export const profilePic = async (formData: FormData) => {
    try {
        const response = await AuthAxios.put('collector/upload-avatar', formData); // Adjust endpoint as per your API
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
