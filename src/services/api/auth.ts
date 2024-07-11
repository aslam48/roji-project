import { setUser, setIsLoggedIn } from '../../redux/Slices/auth.slice.ts'
import { AuthAxios, PublicAxios } from '../../utils/axiosConfig/axiosConfig.ts'
import { Dispatch } from 'react'

const setToken = (token: string) => {
  localStorage.setItem('user_token', token)
  // localStorage.setItem("refreshToken", refreshToken);
  AuthAxios.defaults.headers.common.Authorization = `Bearer ${token}`
}


export const login = async (
  value: {
    email: string
    password: string
  },
  dispatch: Dispatch<unknown>
) => {
  try {
    const response = await PublicAxios.post('/auth/signin-generator', value)
    const { token, payload } = response.data
    setToken(token)
    dispatch(
      setUser({
        companyName: payload.companyName,
        email: payload.email,
        profileType: payload.profileType,
        wasteProfiles: payload.wasteProfiles,
        userToken: token,
        lastName: payload.lastName,
        firstName: payload.firstName,
        id: payload._id
      })
    )
    dispatch(setIsLoggedIn(true))
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
