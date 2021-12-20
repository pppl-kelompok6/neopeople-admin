import { useState } from "react"

export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
            {/* <!-- Informação --> */}
            <div class="flex flex-shrink-0 items-center space-x-4 text-white">

                {/* <!-- Texto --> */}
                <div class="flex flex-col items-end ">
                {/* <!-- Nome --> */}
                <div class="text-md font-medium ">Ridho Muhammad</div>
                {/* <!-- Título --> */}
                <div class="text-sm font-regular">Admin</div>
                </div>
                
                {/* <!-- Foto --> */}
                <div onClick={()=>{setOpen(!open)}} 
                        class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400 hover:bg-gray-400">
                </div>
                <div className={` ${open ? "right-10 top-12 opacity-100" : "opacity-0 right-10 top-10 "} 
                                    absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20
                                    transition-all duration-200 ease-in-out`}>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                    Profile
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                    Help
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                    Settings
                    </a>
                    <a href="#" class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                    Sign Out
                    </a>
                </div>
            </div>
        </header>
    )
}