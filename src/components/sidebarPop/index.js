import { useEffect, useState } from 'react'

export default function SideBarPop({toggle, dataBar, menu}){
    const [menuData, setMenuData] = useState("")

    useEffect(()=>{
        dataBar.map((data)=>{
            if(menu===data.id){
                setMenuData(data)
            }
        })
    },[toggle])

    return(
        <div class={`absolute ${menuData.position} left-[70px] 
                        ${toggle ? "opacity-100":"opacity-0"}
                        transition-all duration-200 ease-in-out
                        sm:flex hidden max-w-md bg-white drop-shadow-lg rounded-lg overflow-hidden `}>
            <div class="w-2 bg-gray-800"></div>
                <div class="flex items-center px-2 py-3">
                <div class="mx-3">
                    <h2 class="text-xl font-semibold text-gray-800">{menuData.name}</h2>
                    <p class="text-gray-600">Sara was replied on the.</p>
                </div>
            </div>
        </div>
    )
}