import React, { useState } from 'react'
import { ChevDownIcon, PhoneIcon, WebIcon } from '../assets/icons'
import userImg from "../assets/user.png";
import companyImg from "../assets/comp.jpg";

const data = [1,2,3,4,5,6,7,8,9,10];

const CompanyDetails = () => {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const handleSelectAll = () => {
    if(selectedAll) {
      setSelectedList([]);
      setSelectedAll(false);
    } else {
      setSelectedList(data);
      setSelectedAll(true);
    }
  }
  const toggleRow = (e, val) => {
    e.stopPropagation();
    if(selectedList.indexOf(val) > -1) {
      setSelectedList((prev) => {
        const copy = [...prev];
        copy.splice(copy.indexOf(val), 1);
        setSelectedAll(false)
        return copy;
      });
    } else {
      if((selectedList.length + 1) === data.length) {
        setSelectedAll(true);
      }
      setSelectedList([...selectedList, val])
    }
  }
  return (
    <div className='max-w-full'>
      <div className='flex gap-3 flex-col md:flex-row'>
        <div className='font-medium h-max w-full md:max-w-[550px] md:min-w-[550px] p-5 bg-white border border-[#EEEEEF] rounded-md'>
          <div className='flex gap-x-[17px] mb-5'>
            <img src={companyImg} alt="company img" className='size-[80px]' />
            <div>
              <h3 className='text-dark-gray text-base font-semibold'>Northeast Agri Systems Inc</h3>
              <p className='pt-[12px] text-sm text-light-gray font-normal'>Northeast Agri Systems is a leading provider of advanced production technologies for poultry and hog farming throughout the northeast, including Pennsylvania.</p>
            </div>
          </div>
          <p className='text-primary text-sm font-medium'>Contacts Available: 19</p>
          <div className='flex gap-x-3 mt-2'>
            <button className='h-8 px-5 rounded bg-primary text-sm font-roboto font-medium text-white'>Save Contacts Available</button>
            <button className='h-8 px-5 rounded bg-primary text-sm font-roboto font-medium text-white'>Save Company</button>
          </div>
          <div className='mt-6 pt-6 border-t border-[#DEE0E6]'>
            <h3 className='uppercase text-sm text-dark-gray'>Details</h3>
            <div className='my-5 flex'>
              <div className='flex gap-x-3 items-center flex-1'>
                <PhoneIcon />
                <a href="tel:+1(717) 569-2702" className='text-sm text-[#6D23FF]'>(717) 569-2702</a>
              </div>
              <div className='flex gap-x-3 items-center flex-1'>
                <WebIcon />
                <a href="http://www.neagri.com" target='_blank' rel='noreferrer' className='text-sm text-[#6D23FF]'>www.neagri.com</a>
              </div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <div className='flex text-sm gap-x-2'>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Industry Tags:</span> Agricultural Product of</p>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Type:</span> Private</p>
              </div>
              <div className='flex text-sm gap-x-2'>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>SIC Code:</span> 02</p>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>SIC6 Code:</span> 508303</p>
              </div>
              <div className='flex text-sm gap-x-2'>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Ticker:</span> -</p>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>NAICS Code:</span> 1123</p>
              </div>
              <div className='flex text-sm gap-x-2'>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Revenue:</span> $1M-$10M</p>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Fortune Ranking:</span> -</p>
              </div>
              <div className='flex text-sm gap-x-2'>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Employees:</span> 11-50</p>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Year Founded:</span> 1982</p>
              </div>
              <div className='flex text-sm gap-x-2'>
                <p className='flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-normal text-light-gray'><span className='text-dark-gray font-medium'>Total Funding:</span> -</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 w-full md:max-w-[calc(100%-550px)]'>
          <div className='bg-white rounded-md border border-[#EEEEEF] overflow-y-visible overflow-x-scroll max-w-full'>
            <table className='w-full'>
              <thead>
                <tr className='shadow-inset flex h-[45px] items-center uppercase'>
                  <th className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                    <button className={`size-[14px] rounded-sm ${selectedAll ? "bg-[#181818]" : "bg-[#F3F5F8]"} border border-[#D3D5DB]`}  onClick={handleSelectAll}></button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Contact</p>
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
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 max-w-[170px] min-w-[170px] justify-between'>
                    <p className='text-[#151619]'>Phone</p>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[170px] justify-between'>
                    <p className='text-[#151619]'>Email</p>
                  </th>
                  <th className='flex items-center font-medium px-[10px] border-r border-[#F3F5F8] text-sm flex-1 min-w-[200px] justify-between'>
                    <p className='text-[#151619]'>Location</p>
                    <button className='size-[20px] bg-[#F7F7FC] items-center justify-center inline-flex rounded-[5px]'>
                      <ChevDownIcon />
                    </button>
                  </th>
                  <th className='flex items-center font-medium px-[10px] text-sm flex-1 max-w-[120px] min-w-[120px] justify-between'>
                    <p className='text-[#151619] text-center w-full'>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody>
              {
                  data.map((val) => (
                    <tr className='shadow-inset flex h-[45px] items-center' key={val}>
                      <td className='flex w-[50px] min-w-[50px] max-w-[50px] items-center justify-center'>
                        <button className={`size-[14px] rounded-sm ${selectedList.includes(val) ? "bg-[#181818]" : "bg-[#F3F5F8]"} border border-[#D3D5DB]`} onClick={(e) => toggleRow(e, val)}></button>
                      </td>
                      <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px] gap-x-3'>
                        <img src={userImg} alt="uimg" style={{ height: "20px", width: "20px" }}/>
                        <p className='text-[#24075C] max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>Jonathan Christopher</p>
                      </td>
                      <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                        <p className='text-[#3D4049]'>Estimating Manager</p>
                      </td>
                      <td className='flex items-center px-[10px] text-xs flex-1 max-w-[170px] min-w-[170px]'>
                        <p className='text-[#24075C]'>Unlock Mobile</p>
                      </td>
                      <td className='flex items-center px-[10px] text-xs flex-1 min-w-[170px]'>
                        <p className='text-[#24075C]'>Unlock</p>
                      </td>
                      <td className='flex items-center px-[10px] text-xs flex-1 min-w-[200px]'>
                        <p className='text-[#3D4049]'>Lititz, PA</p>
                      </td>
                      <td className='flex items-center px-[10px] text-xs flex-1 max-w-[120px] min-w-[120px]'>
                        <p className='text-[#24075C] font-semibold text-center w-full'>Save</p>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className='flex flex-col gap-y-3 items-start lg:flex-row justify-between lg:items-center py-3'>
            <button className={`h-8 px-4 rounded ${selectedList.length > 0 ? "bg-primary" : "bg-[#E2E2E2]"} text-sm font-roboto font-medium text-white`}>Export Selected {(selectedList.length > 0) && (`(${selectedList.length})`)}</button>
            <div className='flex gap-x-4'> 
              <div className='flex gap-x-2'>
                <button className='text-[#0E1445] font-dmsans'>1</button>
                <button className='text-[#0E1445] font-dmsans'>2</button>
                <button className='text-[#0E1445] font-dmsans'>3</button>
                <button className='text-[#0E1445] font-dmsans'>4</button>
                <button className='text-[#0E1445] font-dmsans'>5</button>
                <button className='text-[#0E1445] font-dmsans'>...</button>
              </div>
              <div className='flex gap-x-2 items-center text-sm font-dmsans'>
                <p className='font-dmsans rounded-sm'>Showing</p>
                <input type="text" placeholder='10' className='border border-[#D9DBE6] w-12 h-7 px-2 outline-none font-dmsans' />
                <p className='font-dmsans'>of 125 results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails