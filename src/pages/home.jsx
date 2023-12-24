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
            <div>
              <div>
                <div>
                  <div><span>80</span></div>
                  <div><span>60</span></div>
                  <div><span>40</span></div>
                  <div><span>20</span></div>
                </div>
                <div>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div>
                    <Bar />
                  </div>
                </div>
              </div>
              <div>
                <div>0</div>
                <div>
                  <div>2023-09-16 </div>
                  <div>2023-09-17</div>
                  <div>2023-09-18</div>
                  <div>2023-09-19</div>
                  <div>2023-09-20</div>
                  <div>2023-09-21</div>
                  <div>2023-09-22</div>
                </div>
              </div>
            </div>
            <h2>Top Industries:</h2>
            <div className='flex flex-wrap justify-between'>
              <div>
                <span></span>
                <p>Industry Name</p>
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