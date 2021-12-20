import SideBar from "../sidebar"
import Navbar from "../navbar"

export default function Layout(props) {
    const { children } = props
    return (
            <div className="h-screen w-screen bg-white relative flex">
                <SideBar/>
                <div class="w-full h-full flex flex-col justify-between">
                    <Navbar/>
                    <div className="max-w-full h-full relative overflow-y-scroll overflow-x-hidden">{children}</div>
                    
                </div>

            </div>
    )
}


