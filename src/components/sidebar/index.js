import {CalendarIcon, HomeIcon, ChatAltIcon, CashIcon, UserGroupIcon} from '@heroicons/react/solid'

export default function SideBar({setToggle, setMenu}) {

  return (
    <>
    <section class="float-left h-full w-16 hidden sm:flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
    {/* <!-- Profile --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/'
          onMouseLeave={()=>{
            setToggle(false)
            setMenu(0)
          }} 
          onMouseOver={()=>{
            setToggle(true)
            setMenu(1)
            
          }}> 
        <HomeIcon
              width={30}
              height={30}
          />
      </a>
    </div>

    {/* <!-- Courses --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/events'
          onMouseLeave={()=>{
            setToggle(false)
            setMenu(0)
          }} 
          onMouseOver={()=>{
            setToggle(true)
            setMenu(2)
            
          }}
      >
        <CalendarIcon
            width={30}
            height={30}
        />
      </a>
    </div>

    {/* <!-- Theme --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/counseling'
          onMouseLeave={()=>{
            setToggle(false)
            setMenu(0)
          }} 
          onMouseOver={()=>{
            setToggle(true)
            setMenu(3)
            
          }}
      >
        <ChatAltIcon
              width={30}
              height={30}
          />
      </a>
    </div>

    {/* <!-- Configuration --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/inventory'
          onMouseLeave={()=>{
            setToggle(false)
            setMenu(0)
          }} 
          onMouseOver={()=>{
            setToggle(true)
            setMenu(4)
            
          }}
      >
        <CashIcon
                width={30}
                height={30}
            />
      </a>
    </div>

    {/* <!-- Configuration --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/team'
          onMouseLeave={()=>{
            setToggle(false)
            setMenu(0)
          }} 
          onMouseOver={()=>{
            setToggle(true)
            setMenu(5)
            
          }}
      >
        <UserGroupIcon
                width={30}
                height={30}
            />
      </a>
    </div>
    </section>

    </>


  )
}