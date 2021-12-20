import {CalendarIcon, HomeIcon, ChatAltIcon, CashIcon, UserGroupIcon} from '@heroicons/react/solid'

export default function SideBar() {
  return (
    <aside class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
    {/* <!-- Profile --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/'>
        <HomeIcon
              width={30}
              height={30}
          />
      </a>
    </div>

    {/* <!-- Courses --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/events'>
        <CalendarIcon
            width={30}
            height={30}
        />
      </a>
    </div>

    {/* <!-- Theme --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/counseling'>
        <ChatAltIcon
              width={30}
              height={30}
          />
      </a>
    </div>

    {/* <!-- Configuration --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/inventory'>
        <CashIcon
                width={30}
                height={30}
            />
      </a>
    </div>

    {/* <!-- Configuration --> */}
    <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <a href='/team'>
        <UserGroupIcon
                width={30}
                height={30}
            />
      </a>
    </div>
  </aside>

  )
}