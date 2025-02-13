import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import CustomInput from "../../../component/Frominput/CustomInput";
import { useAppSelector } from "../../../redux/Store";
import { getCollector, personalProfile } from "../../../services/api/profile";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { UpdateProfileForm } from "../../../interfaces/postinterface";
import Spinner from "../../../component/Spinner";
import { toast } from "react-toastify";
import { CustomError } from "../../../interfaces/errormessage";
import { isAxiosError } from 'axios'
import { Link } from "react-router-dom";



const Profile: React.FC = () => {
    const [isSaving, setIsSaving] = useState(false);
    const { id } = useAppSelector((state) => state.Auth);
    const queryClient = useQueryClient();
    // const [avatar, setAvatar] = useState<File | null>(null);

    const { data, isLoading, isError } = useQuery(['profile', id], () => getCollector(id || ''));

    const mutation = useMutation((updatedProfile: UpdateProfileForm) => personalProfile(updatedProfile), {
        onSuccess: () => {
            queryClient.invalidateQueries(['profile', id]);
            toast.success('Profile updated successfully');
            setIsSaving(false);
        },
        onError: (error: any) => {
            setIsSaving(false);
            if (isAxiosError(error) && error.response && error.response.data && (error.response.data as CustomError).message) {
                toast.error((error.response.data as CustomError).message);
            } else {
                toast.error('Network Error, please try again');
            }
        }
    });

    const handleSubmit = (values: UpdateProfileForm) => {
        setIsSaving(true);
        mutation.mutate(values);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        );
    }

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files && event.target.files[0]) {
    //         setAvatar(event.target.files[0]);
    //     }
    // };


    // const handleSubmitData = async (values: UpdateProfileForm) => {
    //     setIsSaving(true);
    //     if (avatar) {
    //         const formData = new FormData();
    //         formData.append('avatar', avatar);

    //         try {
    //             await profilePic(formData);
    //         } catch (error) {
    //             console.error('Failed to upload avatar:', error);
    //             toast.error('Failed to upload avatar');
    //             setIsSaving(false);
    //             return;
    //         }
    //     }

    //     // Then proceed to update profile details
    //     mutation.mutate(values);
    // };


    if (isError) return <div>Error loading profile data</div>;

    const initialValues: UpdateProfileForm = {
        firstName: data?.payload?.personalProfile?.firstName || "",
        lastName: data?.payload?.personalProfile?.lastName || "",
        middleName: data?.payload?.personalProfile?.middleName || "",
        gender: data?.payload?.personalProfile?.gender || "",
        phoneNumber: data?.payload?.phoneNumber || "",
        address: data?.payload?.address || "",
        DOB: data?.payload?.personalProfile?.DOB || ""
    };

    return (
        <main className="flex justify-between w-full flex-1 md:p-10">
            <div className="flex flex-col w-full flex-grow">
                <div className="bg-white rounded-lg my-10 w-full p-3">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                {/* <div className="flex md:gap-64">
                                    <div className="flex gap-1 items-start">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-lg md:text-[22px] font-semibold">
                                                Profile photo
                                            </p>
                                            <small className="text-[#98A2B3] font-semibold">
                                                A brief description of what to expect here
                                            </small>
                                            <div className="flex gap-2 items-center border-2 cursor-pointer rounded-md border-[#5F9A3A] py-1 text-center px-1 bg-transparent w-fit">
                                                <img src={UploadImgIcon} alt="Upload Icon" />
                                                <label
                                                    htmlFor="image"
                                                    className="text-[#5F9A3A] font-semibold"
                                                >
                                                    Change Photo
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                  
                                     <div className="flex justify-center items-center flex-grow">
                                        {avatar ? (
                                            <img
                                                src={URL.createObjectURL(avatar)}
                                                alt="Selected Avatar"
                                                className="w-[120px] h-[120px] rounded-full object-cover"
                                            />
                                        ) : (
                                            <img
                                                src="https://www.kenjap.co.ke/wp-content/uploads/2018/11/Neik-431x428.png"
                                                alt="Profile"
                                                className="w-[120px] h-[120px] rounded-full object-cover"
                                            />
                                        )}
                                          <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept=".jpg, .png, .jpeg"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div> */}

                                <div className="p-1 border-[#E4E7EC] flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                                    <div className="flex flex-col gap-2 mb-5 md:mb-0">
                                        <p className="text-lg md:text-[22px] font-semibold">
                                            Personal Information
                                        </p>
                                        <small className="text-[#98A2B3] font-semibold">
                                            Update your personal details here.
                                        </small>
                                        <div className="flex gap-2 items-center py-1 text-center px-2">
                                            <button
                                                type="submit"
                                                className="text-[#5F9A3A] border border-[#5F9A3A] font-semibold rounded-md p-2 w-[8rem] relative"
                                                disabled={isSaving}
                                            >
                                                {isSaving && (
                                                    <div className="absolute top-[50%] left-[50%] transform translate[-50%,-50%]">
                                                        <div className="spinner-border spinner-border-sm text-light" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </div>
                                                )}
                                                <p className="font-semibold">{isSaving ? 'Saving...' : 'Save'}</p>
                                            </button>
                                        </div>

                                    </div>

                                    <div className="w-full md:w-[50%]">
                                        <div className="flex flex-col md:flex-row md:gap-5">
                                            <div className="w-full">
                                                <CustomInput
                                                    label="First Name"
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                />
                                                <ErrorMessage
                                                    name="firstName"
                                                    component="div"
                                                    className="text-red-500"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <CustomInput
                                                    label="Last Name"
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                />
                                                <ErrorMessage
                                                    name="lastName"
                                                    component="div"
                                                    className="text-red-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <CustomInput
                                                label="Middle Name"
                                                type="text"
                                                id="middleName"
                                                name="middleName"
                                                placeholder="Middle Name"
                                                value={values.middleName}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage
                                                name="middleName"
                                                component="div"
                                                className="text-red-500"
                                            />
                                        </div>

                                        <div className="flex flex-col md:flex-row md:gap-5">
                                            <div className="w-full">
                                                <CustomInput
                                                    label="Gender"
                                                    type="select"
                                                    id="gender"
                                                    name="gender"
                                                    placeholder="Gender"
                                                    value={values.gender}
                                                    onChange={handleChange}
                                                    options={[
                                                        { value: 'male', label: 'Male' },
                                                        { value: 'female', label: 'Female' }
                                                    ]}
                                                />
                                                <ErrorMessage
                                                    name="gender"
                                                    component="div"
                                                    className="text-red-500"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <CustomInput
                                                    label="Date Of Birth"
                                                    type="date"
                                                    id="DOB"
                                                    name="DOB"
                                                    placeholder="Date Of Birth"
                                                    value={values.DOB}
                                                    onChange={handleChange}
                                                />
                                                <ErrorMessage
                                                    name="DOB"
                                                    component="div"
                                                    className="text-red-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row md:gap-5">
                                            <div className="w-full">
                                                <CustomInput
                                                    label="Address"
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    placeholder="Address"
                                                    value={values.address}
                                                    onChange={handleChange}
                                                />
                                                <ErrorMessage
                                                    name="address"
                                                    component="div"
                                                    className="text-red-500"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <CustomInput
                                                    label="Phone Number"
                                                    type="text"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    placeholder="Phone Number"
                                                    value={values.phoneNumber}
                                                    onChange={handleChange}
                                                />
                                                <ErrorMessage
                                                    name="phoneNumber"
                                                    component="div"
                                                    className="text-red-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="flex justify-center items-center mt-10 md:mt-20">
                <Link to="/dashboard">
                    <button className="mt-5 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex items-center">
                        {/* Back arrow icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 4.293a1 1 0 011.414 0L14 10.586V7a1 1 0 112 0v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-3a1 1 0 112 0v2.586L14.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Back To Dashboard
                    </button>
                </Link>
            </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;
