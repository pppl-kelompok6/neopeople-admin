import {DotsVerticalIcon} from '@heroicons/react/solid/'
import Link from 'next/link'

export default function ListCounseler({counselorData}){

    const comps = []

    counselorData.map((value, key)=>{
        comps.push(
            <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border hover:bg-gray-100 cursor-pointer relative">
                <div class="relative flex items-center space-x-4">
                    <img src={value.cover} alt="My profile" class="w-16 h-16 rounded-full"/>
                    
                    <span class= {`absolute h-4 w-4 ${value.activity ? "bg-green-400" : "bg-gray-400"} rounded-full bottom-0 right-0 border-2 border-white`} ></span>
                </div>
                <div class="flex-grow p-3">
                    <div class="font-semibold text-gray-700">
                        {value.name}
                    </div>
                    <div class="text-sm text-gray-500">
                        You: Thanks, sounds good! . 8hr
                    </div>
                </div>
                <div    onMouseOver={()=>{
                            document.getElementById(`pop_${value.id}`).style.display = "initial"
                        }}
                        onMouseLeave={()=>{
                            document.getElementById(`pop_${value.id}`).style.display = "none"
                        }}                
                    className="p-2 hover:bg-gray-200 rounded-full">
                    <DotsVerticalIcon className='w-5 h-5 text-gray-800 '/>
                </div>
                <div id={`pop_${value.id}`} 
                        onMouseOver={()=>{
                            document.getElementById(`pop_${value.id}`).style.display = "initial"
                        }}
                        onMouseLeave={()=>{
                            document.getElementById(`pop_${value.id}`).style.display = "none"
                        }}
                        class="absolute right-0 top-10 mt-2 py-2 w-40 bg-white rounded-md shadow-xl z-20 hidden">
                    <Link href={`/counseling/mentoredit/${value.id}`}>
                        <a class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Edit
                        </a>
                    </Link>
                    <Link href={`/counseling/mentordetail/${value.id}`}>
                        <a class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                        Detail
                        </a>
                    </Link>                    
                    <a  onClick={()=>{

                    }}
                        class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                    Delete
                    </a>
                </div>
            </div>
        )
    })


    return(
        <div class="container flex flex-col space-y-4 justify-start items-center h-[650px] overflow-y-scroll">
            {comps}
        </div>
    )
}