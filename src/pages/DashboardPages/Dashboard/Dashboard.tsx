import React, { Fragment, useState, useEffect } from 'react';
import { FaUserEdit, FaChartLine, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/Store';
import { useQuery } from 'react-query';
import { getCollector } from '../../../services/api/profile';
import Spinner from '../../../component/Spinner';

const Dashboard: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const { id } = useAppSelector((state) => state.Auth);
  const { data, isLoading } = useQuery(['profile', id], () => getCollector(id || ''));

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Africa/Lagos'
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(date);
      setTime(timeString);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
                      <Spinner />
      </div>
    );
  }

  return (
    <Fragment>
      <main className='flex h-screen justify-center gap-7 items-center flex-col'>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold capitalize text-gray-800 text-center">Welcome back! {`${data?.payload?.personalProfile?.firstName || ""}`}  {`${data?.payload?.personalProfile?.lastName || ""}`}</p>
          <p className="text-lg mt-2 text-gray-600 text-center">Click the button below to update your profile.</p>
          <Link to="/profile">
            <button className="mt-5 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex items-center">
              <FaUserEdit className="mr-2" /> Update Profile
            </button>
          </Link>
        </div>
        <div className=" w-full md:max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold text-gray-800">Profile Views</p>
                  <p className="text-gray-600">1,234</p>
                </div>
                <FaChartLine className="text-3xl text-blue-500" />
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold text-gray-800">Settings</p>
                  <p className="text-gray-600">Customize your account</p>
                </div>
                <FaCog className="text-3xl text-green-500" />
              </div>
            </div>
            <div className="bg-black shadow-md h-24 rounded-lg p-3 flex flex-col items-center justify-center text-white">
              <div className="flex space-x-2">
                {time.split('').map((char, index) => (
                  <span key={index} className="text-3xl font-mono">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Dashboard;
