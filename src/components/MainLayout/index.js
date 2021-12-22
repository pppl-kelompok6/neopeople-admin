import SideBar from "../sidebar"
import Navbar from "../navbar"
import SideBarPop from "../sidebarPop"
import { useEffect, useState } from 'react'

export default function Layout(props) {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(0);
    const [Burger, setBurger] = useState(false);

    const sidebarData = [
        {
            id: 1,
            name: "Dashboard",
            desc: "Sara was replied on the.",
            position:"top-[160px]"
        },
        {
            id: 2,
            name: "Event",
            desc: "Sara was replied on the.",
            position: "top-[240px]"
        },
        {
            id: 3,
            name: "Counseling",
            desc: "Sara was replied on the.",
            position: "top-[325px]"
        },
        {
            id: 4,
            name: "Money",
            desc: "Sara was replied on the.",
            position: "top-[405px]"
        },
        {
            id: 5,
            name: "Team",
            desc: "Sara was replied on the.",
            position: "top-[485px]"
        }
      ]
      
    const { children } = props;

    return (
            <div className="h-screen w-screen bg-white relative flex">
                <SideBar setToggle={setOpen} setMenu={setMenu} />
                <div class="w-full h-full flex flex-col justify-between">
                    <Navbar/>
                    <div className="max-w-full h-full relative overflow-y-scroll overflow-x-hidden">{children}</div>
                    <SideBarPop toggle={open} dataBar={sidebarData} menu={menu} />
                </div>
            </div>
    )
}


