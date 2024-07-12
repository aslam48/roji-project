import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import UploadImgIcon from "../../../assets/uploadInage.svg";
import CustomInput from "../../../component/Frominput/CustomInput";

const Profile: React.FC = () => {
    const handleSubmit = () => { };

    return (

        <main className="flex justify-between w-full flex-1">
            <div className="flex flex-col w-full flex-grow">
                <div className="bg-white rounded-lg my-10 w-full p-5">
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            middleName: "",
                            gender: "",
                            phoneNumber: "",
                            address: "",
                            DOB: ""
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="flex md:gap-64">
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
                                        <img
                                            src="https://www.kenjap.co.ke/wp-content/uploads/2018/11/Neik-431x428.png"
                                            alt="Profile"
                                            className="w-[120px] h-[120px] rounded-full object-cover"
                                        />
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept=".jpg, .png, .jpeg"
                                            className="hidden"
                                        />
                                    </div>
                                </div>

                                <div className="border-t p-4 mt-5 border-[#E4E7EC] flex flex-col md:flex-row items-start md:items-center justify-between w-full">
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
                                                className="text-[#5F9A3A] border border-[#5F9A3A] font-semibold rounded-md p-2 w-[8rem]"
                                            >
                                                {/* <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[#5F9A3A] mr-2"></div>
                            <span className="sr-only">Loading...</span>
                          </div> */}

                                                <p className="font-semibold">Save</p>
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
                                                    name="Address"
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
                </div>
            </div>
        </main>
    );
};

export default Profile;
