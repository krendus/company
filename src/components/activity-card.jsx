import React from 'react'
import documentIcon from '../assets/document.svg'

const ActivityCard = ({ content, date }) => {
  return (
    <div className='flex gap-x-5'>
        <div className='min-w-[26px]'>
            <img src={documentIcon} alt="document" /> 
        </div>
        <div>   
            <h3 className='text-[#494D58] leading-none pb-1'>{content}</h3>
            <p className='text-[#71757D] text-sm'>{date}</p>
        </div>
    </div>
  )
}

export default ActivityCard