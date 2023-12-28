import React, { useState } from 'react'
import { ArrowDownIcon, ChevDownIcon, EmailStatusIcon, IndustryIcon, InputSearchIcon, JobListIcon, LinkIcon, LocationIcon, LockColorIcon, PeopleIcon, RevenueIcon, SingleCompanyIcon, TechIcon, UserMakerIcon } from '../assets/icons'
import userImg from "../assets/user.png";
import companyImg from "../assets/company.png";

const Contact = () => {
  const [filterTab, setFilterTab] = useState("search")
  return (
    <div className='max-w-full'>
      <div className='flex gap-x-3'>
        <div className='font-roboto flex flex-col gap-y-3'>
          <div className='bg-white rounded-md border-b border-[#EEEEEF]'>
            <div className='flex items-center justify-between font-medium max-w-[310px] min-w-[310px] p-4 border-b border-[#E3E3E5]'>
              <button className={`${filterTab === "search" ? "text-primary" : ""} text-sm`} onClick={() => setFilterTab("search")}>Search</button>
              <button className={`${filterTab === "saved-searches" ? "text-primary" : ""} text-sm`} onClick={() => setFilterTab("saved-searches")}>Saved Searches</button>
              <button className={`${filterTab === "history" ? "text-primary" : ""} text-sm`} onClick={() => setFilterTab("history")}>History</button>
            </div>
            <div className='h-[45px] border-b border-[#EEEEEF] flex px-3 gap-x-2 items-center'>
              <button className='text-[#737373]'>
                <InputSearchIcon />
              </button>
              <input type="text" className='h-full font-roboto text-sm font-medium flex-1 outline-none' placeholder='Search By Name' />
            </div>
            <div className='h-[45px] border-b border-[#EEEEEF] flex items-center px-3'>
              <h3 className='text-[#1a1a1a] font-semibold'>Criteria</h3>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <SingleCompanyIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Company</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <RevenueIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Revenue</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <LocationIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Location</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <PeopleIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'># Employees</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <TechIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Technologies</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <IndustryIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Industry &amp; Keywords</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <LinkIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>By Website</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-pointer'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <UserMakerIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Verified Decision Maker</p>
                <ArrowDownIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] cursor-not-allowed bg-[#F0F0F2]'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <JobListIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Job Postings</p>
                <LockColorIcon />
              </div>
            </div>
            <div className='px-3 border-b border-[#EEEEEF] bg-[#F0F0F2] cursor-not-allowed'>
              <div className='py-3 flex items-center gap-x-2 h-[45px] text-[#737373]'>
                <EmailStatusIcon />
                <p className='flex-1 text-[#1A1A1A] text-sm font-medium font-roboto'>Email Status</p>
                <LockColorIcon />
              </div>
            </div>
            <div className='p-[10px]'>
              <button className='bg-primary h-8 w-full rounded font-medium font-roboto text-white text-sm'>Save Search</button>
            </div>
          </div>
          <div className='bg-white rounded-md border border-[#EEEEEF] p-[10px]'>
            <button className='h-8 w-full rounded border border-[#E3E3E5] font-medium font-roboto text-[#797979] text-sm'>All Filters</button>
          </div>
        </div>
        <div className='flex-1 max-w-[calc(100%-320px)]'>
          <div className='bg-white rounded-md border border-[#EEEEEF] overflow-y-visible overflow-x-scroll max-w-full'>
            <table className='w-full'>
              <thead>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <th className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Contact</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Company</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Title</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Phone</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Email</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Location</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Industry</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] text-sm flex-1 max-w-[120px] min-w-[120px] justify-between'>
                    <p className='text-[#151619]'>Actions</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Bender James</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
                <tr className='shadow-inset flex h-[45px] items-center'>
                  <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className='size-[14px] rounded-sm bg-[#F3F5F8] border border-[#D3D5DB]'></button>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                    <img src={companyImg} alt="cimg" style={{ height: "20px", width: "20px" }}/>
                    <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Northeast Agri Systems Inc</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Estimating Manager</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock Mobile</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#24075C]'>Unlock</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049]'>Lititz, PA</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                    <p className='text-[#3D4049] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Agricultural Production Livestock And Animal Specialties, Farming</p>
                  </td>
                  <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                    <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-between items-center py-3'>
            <button className='h-8 px-4 rounded bg-[#E2E2E2] text-sm font-roboto font-medium text-white'>Export Selected</button>
            <div className='flex gap-x-2'>
              <button className='text-[#0E1445] font-roboto'>1</button>
              <button className='text-[#0E1445] font-roboto'>2</button>
              <button className='text-[#0E1445] font-roboto'>3</button>
              <button className='text-[#0E1445] font-roboto'>4</button>
              <button className='text-[#0E1445] font-roboto'>5</button>
              <button className='text-[#0E1445] font-roboto'>...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact