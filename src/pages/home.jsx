import React from 'react'
import ActivityCard from '../components/activity-card'
import Bar from '../components/bar'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-x-4 gap-y-6'>
        <div className='w-full md:w-[calc(50%-0.5rem)] flex flex-col'>
          <h2 className='text-dark-gray text-lg'>Credit Activity</h2>
          <div className='bg-white px-4 py-6 rounded mt-4 flex flex-col gap-y-5 flex-1 shadow-box'>
            <ActivityCard 
              content={"You used 350 credits on your most recent search."}
              date={"Sep 04th, 2023"}
            />
            <ActivityCard 
              content={"You used 350 credits on your most recent search."}
              date={"Sep 04th, 2023"}
            />
          </div>
        </div>
        <div className='w-full md:w-[calc(50%-0.5rem)]  flex flex-col'>
          <h2 className='text-dark-gray text-lg'>Activity</h2>
          <div className='bg-white px-4 py-6 rounded mt-4 flex-1 shadow-box'>
            <h3 className='text-center text-[15px] text-dark-gray'>You found 323 companies in the past 7 days.</h3>
            <div className='overflow-x-scroll overflow-y-hidden no-scrollbar mt-2'>
              <div className='h-[220px] flex flex-col pt-10 min-w-max'>
                <div className='flex flex-1 gap-x-[10px] w-full'>
                  <div className='text-xs text-center w-[20px]'>
                    <div className='h-1/4 relative -top-2'><span>80</span></div>
                    <div className='h-1/4 relative -top-2'><span>60</span></div>
                    <div className='h-1/4 relative -top-2'><span>40</span></div>
                    <div className='h-1/4 relative -top-2'><span>20</span></div>
                  </div>
                  <div className='relative h-full w-full flex-1'>
                    <div className='h-full'>
                      <div className='h-1/4 border-t border-[#ddd]'></div>
                      <div className='h-1/4 border-t border-[#ddd]'></div>
                      <div className='h-1/4 border-t border-[#ddd]'></div>
                      <div className='h-1/4 border-t border-[#ddd]'></div>
                    </div>
                    <div className='absolute w-full h-full left-0 top-0 flex gap-x-[6px] items-end'>
                      <Bar value={45} max={80}/>
                      <Bar value={22} max={80}/>
                      <Bar value={64} max={80}/>
                      <Bar value={85} max={80}/>
                      <Bar value={33} max={80}/>
                      <Bar value={40} max={80}/>
                      <Bar value={42} max={80}/>
                    </div>
                  </div>
                </div>
                <div className='flex gap-x-[10px] mt-2'>
                  <div className='text-xs text-[#031116] w-[20px] text-center'>0</div>
                  <div className='flex gap-x-[6px] flex-1 min-w-max'>
                    <div className='text-xs text-[#031116] w-[calc((100%-30px)/7)] text-center'>2023-09-16 </div>
                    <div className='text-xs text-[#031116] w-[calc((100%-30px)/7)] text-center'>2023-09-17</div>
                    <div className='text-xs text-[#031116] w-[calc((100%-30px)/7)] text-center'>2023-09-18</div>
                    <div className='text-xs text-[#031116] w-[calc((100%-30px)/7)] text-center'>2023-09-19</div>
                    <div className='text-xs text-[#031116] w-[calc((100%-30px)/7)] text-center'>2023-09-20</div>
                    <div className='text-xs text-[#031116] w-[calc((100%-30px)/7)] text-center'>2023-09-21</div>
                    <div className='text-xs text-[#031116] w-[calc((100%-30px)/7)] text-center'>2023-09-22</div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className='mt-5 text-lg font-bold text-[#494D58]'>Top Industries:</h2>
            <div className='flex flex-wrap justify-between mt-2 gap-3'>
              <div className='flex items-center gap-x-3'>
                <span className='h-[22px] w-[22px] rounded-[50%] bg-primary'></span>
                <p className='text-sm text-light-gray'>Industry Name</p>
              </div>
              <div className='flex items-center gap-x-3'>
                <span className='h-[22px] w-[22px] rounded-[50%] bg-primary'></span>
                <p className='text-sm text-light-gray'>Industry Name</p>
              </div>
              <div className='flex items-center gap-x-3'>
                <span className='h-[22px] w-[22px] rounded-[50%] bg-primary'></span>
                <p className='text-sm text-light-gray'>Industry Name</p>
              </div>
              <div className='flex items-center gap-x-3'>
                <span className='h-[22px] w-[22px] rounded-[50%] bg-primary'></span>
                <p className='text-sm text-light-gray'>Industry Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='text-dark-gray text-lg'>New Updates</h2>
        <div className='flex flex-col md:flex-row gap-x-4 gap-y-6 mt-2'>
          <div className='bg-white px-4 py-6 rounded shadow-box w-full md:w-[calc(50%-0.5rem)]'>
            <h1 className='text-lg text-[#494D58]'><span className='font-bold'>New Feature:</span> Buyer Intent Data</h1>
            <p className='py-1 text-light-gray text-sm'>Lorem ipsum dolor sit amet consectetur. Arcu etiam arcu libero est etiam. Lorem ipsum dolor sit amet consectetur. Arcu etiam arcu libero est etiam. </p>
            <button className='font-bold text-primary text-sm py-1 mt-1'>Read more</button>
          </div>
          <div className='bg-white px-4 py-6 rounded shadow-box w-full md:w-[calc(50%-0.5rem)]'>
            <h1 className='text-lg text-[#494D58]'><span className='font-bold'>New Feature:</span> Buyer Intent Data</h1>
            <p className='py-1 text-light-gray text-sm'>Lorem ipsum dolor sit amet consectetur. Arcu etiam arcu libero est etiam. Lorem ipsum dolor sit amet consectetur. Arcu etiam arcu libero est etiam. </p>
            <button className='font-bold text-primary text-sm py-1 mt-1'>Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home