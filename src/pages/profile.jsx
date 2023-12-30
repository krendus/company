import React, { useState } from 'react'
import { ExportFileIcon, LockDotIcon } from '../assets/icons';

const Profile = () => {
  const [receiveNotification, setReceiveNotification] = useState(false);
  const [receiveNotificationT, setReceiveNotificationT] = useState(false);
  return (
    <div>
      <div className='flex-col gap-y-5 md:flex-row flex gap-x-[16px]'>
        <div className='w-full md:w-[calc(50%-8px)] flex flex-col'>
          <h2 className='text-lg text-dark-gray font-roboto'>Account Information</h2>
          <div className='mt-5 shadow-box bg-white rounded flex-1'>
            <div className='px-5 py-3 border-b border-[#E3E3E5]'>
              <h3 className='text-black font-semibold font-roboto'>Account Info</h3>
            </div>
            <div className='p-5'>
              <div className='flex gap-x-3 flex-wrap'>
                <div className='flex-1 min-w-[150px]'>
                  <label className='text-xs font-semibold pb-1 font-roboto'>First Name</label>
                  <input type="text" className='px-3 font-roboto w-full border border-[#CACACC] rounded h-[30px]' />
                </div>
                <div className='flex-1 min-w-[150px]'>
                  <label className='text-xs font-semibold pb-1 font-roboto'>Last Name</label>
                  <input type="text" className='px-3 font-roboto w-full border border-[#CACACC] rounded h-[30px]' />
                </div>
                <div className='flex-1 min-w-[150px]'>
                  <label className='text-xs font-semibold pb-1 font-roboto'>Title</label>
                  <input type="text" className='px-3 w-full border border-[#CACACC] rounded h-[30px] font-roboto' />
                </div>
              </div>
              <div className='my-3 gap-y-3 flex justify-between md:items-center flex-col md:flex-row'>
                <div>
                  <p className='text-xs font-semibold text-black font-roboto'>Email</p>
                  <p className='text-sm font-semibold text-black font-roboto'>bryce@axamo.co</p>
                </div>
                <button className='inline-flex w-max items-center gap-x-3 rounded border border-[#CACACC] py-1 px-3 h-[32px]'>
                  <LockDotIcon />
                  <span className='text-sm font-medium text-black font-roboto'>Change Email</span>
                </button>
              </div>
              <div>
                <p className='text-xs font-semibold text-black pb-1 font-roboto'>Password</p>
                <button className='inline-flex items-center gap-x-3 rounded border border-[#CACACC] py-1 px-3 h-[32px]'>
                  <LockDotIcon />
                  <span className='text-sm font-medium text-black font-roboto'>Change Password</span>
                </button>
              </div>
              <div className='my-3'>
                <p className='text-xs font-semibold text-black pb-1 font-roboto'>Profile</p>
                <select className='w-full border font-roboto border-[#CACACC] rounded h-[30px] px-2 bg-white text-sm font-medium text-black'>
                  <option value="Bryce Heyer">Bryce Heyer</option>
                  <option value="John Doe">John Doe</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[calc(50%-8px)] flex flex-col'>
          <h2 className='text-lg text-dark-gray font-roboto'>Notification Settings</h2>
          <div className='mt-5 shadow-box bg-white rounded flex-1'>
            <div className='px-5 py-3 border-b border-[#E3E3E5]'>
              <h3 className='text-black font-semibold font-roboto'>Notification Settings</h3>
            </div>
            <div className='p-5'>
              <div className='flex pb-4 border-b border-[#E3E3E5] items-center gap-x-3'>
                <button className={`h-[20px] w-[36px] max-w-[36px] min-w-[36px] font-roboto rounded-full inline-flex items-center ${receiveNotification ? "bg-primary justify-end" : "bg-[#ddd]"} px-[4px] transition ease-linear duration-500`} onClick={() => setReceiveNotification(!receiveNotification)}><span className='rounded-[7.5px] min-h-[14px] min-w-[14px] max-h-[14px] max-w-[14px] bg-white block'></span></button>
                <div>
                  <p className='text-xs font-semibold text-dark-gray mb-0.5 font-roboto'>Instant Notifications</p>
                  <p className='text-sm text-light-gray font-roboto'>Receive a notification email everytime a data request is completed</p>
                </div>
              </div>
              <div>
                <div className='py-4'>
                  <p className='text-xs font-semibold text-dark-gray mb-0.5 font-roboto'>Free Data Credit Reminder Notifications</p>
                  <p className='text-sm text-light-gray font-roboto'>Turn on toggle to receive credit usage updates in your inbox.</p>
                </div>
                <div className='flex gap-x-3 items-center'>
                  <button className={`h-[20px] w-[36px] max-w-[36px] min-w-[36px] font-roboto rounded-full inline-flex items-center ${receiveNotificationT ? "bg-primary justify-end" : "bg-[#ddd]"} px-[4px] transition ease-linear duration-500`} onClick={() => setReceiveNotificationT(!receiveNotificationT)}><span className='rounded-[7.5px] min-h-[14px] min-w-[14px] max-h-[14px] max-w-[14px] bg-white block'></span></button>
                  <p className='text-xs font-semibold text-dark-gray mb-0.5 font-roboto'>Receive free data credit reminder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-5'>
        <h2 className='text-lg text-dark-gray font-roboto'>Credits</h2>
        <div className='mt-5 shadow-box bg-white rounded flex-1'>
          <div className='px-5 py-3 border-b border-[#E3E3E5] flex flex-col gap-y-2 md:flex-row justify-between items-center'>
            <p><span className='text-base text-black font-semibold font-roboto'>Credits usage </span><span className='text-[#474747]'>|</span> <span className='text-sm text-[#474747]'>Aug 10, 2023 - Sep 10, 2023</span></p>
            <p className='text-sm text-black'><span className='font-semibold font-roboto'>Plan will renew: </span>Sep 10, 2023 3:00 AM</p>
          </div>
          <div className='p-5'>
            <div className='mb-3'>
              <ExportFileIcon />
            </div>
            <h2 className='text-xl font-semibold text-[#474747] font-roboto'>Export credits usage</h2>
            <p className='my-3 text-sm text-[#474747] font-roboto'><span className='text-xl font-semibold'>48</span><span className='font-semibold'> of 349</span> export credits / mo</p>
            <div className='flex gap-x-4 items-center'>
              <div className='flex-1 rounded-full h-[15px] bg-[#F0F0F2]'>
                <div className='h-full bg-primary w-[20%] rounded-full'></div>
              </div>
              <button className='h-8 px-4 rounded bg-primary text-sm font-roboto font-medium text-white'>Buy more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
