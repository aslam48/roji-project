import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../../../component/Frominput/FromInput'
import useLoginForm from '../../../component/Frominput/formik/useLoginForm'
import { isAxiosError } from 'axios'
import { CustomError } from '../../../interfaces/errormessage'
import { toast } from 'react-toastify'
import { login } from '../../../services/api/auth'
import AuthSubmitBtn from '../../../component/Buttons/AuthSubmitBtn'
import { useAppDispatch } from '../../../redux/Store'

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword] = useState(false)
    const dispatch = useAppDispatch()


    const handleLogin = async (values: { email: string; password: string }) => {
        try {
            setIsLoading(true)
            const response = await login({ email: values.email, password: values.password }, dispatch)
            // const response = await login({ email: values.email, password: values.password }, dispatch)

            if (response.statusCode === 200) {
                toast.success('Signin successful! Redirecting...')
                setTimeout(() => {
                    navigate('/dashboard')
                }, 2000)
            }
        } catch (error) {
            if (
                isAxiosError(error) &&
                error.response &&
                error.response.data &&
                (error.response.data as CustomError).message
            ) {
                toast.error((error.response.data as CustomError).message)
            } else {
                toast.error('Netowrk Error please Try Again')
            }
        } finally {
            setIsLoading(false)
        }
    }

    const { formik } = useLoginForm({ onSubmit: handleLogin })
    return (
        <main className='flex justify-center items-center h-screen md:p-0 p-4'>
            <div className=" w-full md:w-[33rem] flex justify-center items-center">
                <div className="bg-white w-full rounded-lg shadow-md p-10">
                    <div className="flex items-center gap-2 h-auto">
                        <span className="bg-[#55A96D] rounded-xl h-5 p-1"></span>
                        <p className="font-semibold text-xl">Welcome</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-[#98A2B3] font-semibold text-xs md:text-base">
                            Please Sign In to access your account
                        </p>
                    </div>

                    <div className="mt-5">
                        <form onSubmit={formik.handleSubmit} className="space-y-7">
                            <FormInput
                                label="Email"
                                type="email"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="e.g johndoe@example.com"
                                error={
                                    formik.touched.email
                                        ? formik.errors.email
                                        : undefined
                                }
                            />

                            <FormInput
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={(e) => formik.handleBlur(e)}
                                placeholder="********"
                                error={
                                    formik.touched.password ? formik.errors.password : undefined
                                }
                            />

                            <label className="flex items-end justify-end mb-4">
                                <Link to="/forgotPassword">
                                    <span className="text-sm text-gray-600 underline">
                                        Forgot Password?
                                    </span>
                                </Link>
                            </label>

                            {/* submit button */}
                            <div className="cursor-pointer">
                                <AuthSubmitBtn
                                    label="Sign In"
                                    onClick={formik.handleSubmit}
                                    isValid={formik.isValid}
                                    isLoading={isLoading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login