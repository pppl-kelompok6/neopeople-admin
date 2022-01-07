import Link from "next/link"
import { useState } from "react"
import CONFIG from "../../services/CONFIG"
import Cookies from "js-cookie"

export default function EventEditProps({eventData, cover}){
    
    const [eventState, setEventState] = useState(eventData[0])
    async function putEvent(e) {
        e.preventDefault()
        eventState.cover = cover
        // console.log(eventState)
        await fetch(`${CONFIG.BASE_URL}/events/${eventState.ID}`,{
            method: "PUT",
            headers: {
                "Token": Cookies.get("Token"),                
            },
            body: JSON.stringify(eventState)
        }).then(()=>{
            console.log("berhasil")
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <form onSubmit={(e)=>{putEvent(e)}} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 m-8">
                <div className="text-gray-600">
                    <p className="font-medium text-lg">Edit Event</p>
                    <p>Please fill out all the fields.</p>
                </div>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="mt-2 border-dashed border rounded w-fit ">
                    <img className="w-140" src={eventData[0].cover}></img>
                </div>
                

                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                        <label for="full_name">Title</label>
                        <input  defaultValue={eventData[0].event_name} type="text" name="title" id="title" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Event Title" 
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        event_name: e.target.value
                                    })
                                }}
                                />
                    </div>

                    <div className="md:col-span-5">
                        <label for="email">Description</label>
                        <textarea   defaultValue={eventData[0].description} name="description" id="description" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="New Description"
                                    onChange={(e)=>{
                                        setEventState({
                                            ...eventState,
                                            description: e.target.value
                                        })
                                    }}
                                    />
                    </div>

                    <div className="md:col-span-2">
                        <label for="address">Speaker Name</label>
                        <input  defaultValue={eventData[0].speaker} type="text" name="speakerName" id="speakerName" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Name of the speaker"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        speaker: e.target.value
                                    })
                                }}
                                />
                    </div>

                    <div className="md:col-span-2">
                        <label for="city">Speaker Company</label>
                        <input  defaultValue={eventData[0].speaker_company} type="text" name="speakerCompany" id="speakerCompany" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Company name"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        speaker_company: e.target.value
                                    })
                                }}
                                />
                    </div>
                    <div className="md:col-span-1">
                        <label for="city">Speaker Role</label>
                        <input  defaultValue={eventData[0].speaker_job} type="text" name="speakerRole" id="speakerRole" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Proffesion"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        speaker_job: e.target.value
                                    })
                                }}
                                />
                    </div>
                    <div className="md:col-span-2">
                        <label for="address">Date </label>
                        <input type="date" name="price" value={eventData[0].date.slice(0,10)} id="price" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        date: e.target.value
                                    })
                                }}
                                />
                    </div>
                    <div className="md:col-span-2">
                        <label for="address">Time </label>
                        <input type="time" name="price" id="price" value={eventData[0].started_at.slice(11,16)} 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        date: `${data.date} ${e.target.value}`
                                    })
                                }} 

                                />
                        <input type="time" name="price" id="price" value={eventData[0].finish_at.slice(11,16)}
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        date: `${data.date} ${e.target.value}`
                                    })
                                }} 
                                />
                    </div>
                    <div className="md:col-span-1">
                        <label for="address">Price </label>
                        <input  defaultValue={eventData[0].price} type="number" name="price" id="price" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        price: parseInt(e.target.value)
                                    })
                                }}
                                />
                    </div>
                    <div className="md:col-span-2">
                        <label for="address">Cover </label>
                            <label className="w-30 lg:w-64 flex mt-1 flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-blue-400 hover:text-white">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="mt-2 text-base leading-normal">Select a file</span>
                                <input type='file' className="hidden" />
                            </label>
                    </div>




                    <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                        <Link href={'/events'}>
                            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded select-none cursor-pointer">Cancel</div>
                        </Link>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-6">Submit</button>
                          
                    </div>
                        
                    </div>

                    </div>
                </div>
                </div>
            </form>
    )
}