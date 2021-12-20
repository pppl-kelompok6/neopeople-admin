import Layout from '../src/components/MainLayout'
import Chart from '../src/components/Dashboard/chart'
import TableMoney from '../src/components/Dashboard/tableMoney'

export default function App() {
  return (
    <Layout>
      <div className='w-full flex flex-col'>
        <div className='w-full h-[52%] flex flex-row gap-8'>
          <div className='w-[50%] bg-gray-100 m-4 rounded-md drop-shadow-xl border-2 flex flex-col justify-center items-start overflow-hidden'>
              <p className='h-[10%]'>Money Chart</p>
              <Chart/>
          </div>
          <div className='w-[50%] bg-gray-100 m-4 rounded-md drop-shadow-xl border-2 overflow-scroll overflow-x-hidden'>
              <TableMoney/>
          </div>
        </div>
        <div className='w-full h-[18%] flex flex-row items-center justify-around gap-4 '>
          {/*  */}
            <div class="bg-gray-100 rounded-md drop-shadow-xl border-2 p-4 sm:p-6 xl:p-8 ">
               <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
                      <h3 class="text-base font-normal text-gray-500">New products this week</h3>
                  </div>
                    <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                     14.6%
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
             </div>
            </div>

          <div class="bg-gray-100 rounded-md drop-shadow-xl border-2 p-4 sm:p-6 xl:p-8 ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                  <h3 class="text-base font-normal text-gray-500">User signups this week</h3>
              </div>
              <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                -2.7%
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 rounded-md drop-shadow-xl border-2 p-4 sm:p-6 xl:p-8 ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                  <h3 class="text-base font-normal text-gray-500">User signups this week</h3>
              </div>
              <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                -2.7%
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 rounded-md drop-shadow-xl border-2 p-4 sm:p-6 xl:p-8 ">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                  <h3 class="text-base font-normal text-gray-500">User signups this week</h3>
              </div>
              <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                -2.7%
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className='w-full h-[30%]'>
        </div>
      </div>
  </Layout>
  )
}