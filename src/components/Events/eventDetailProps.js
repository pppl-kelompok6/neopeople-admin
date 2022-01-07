import Image from "next/image"
import { useState } from "react"
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
export default function EventDetailProps({eventData}){
    
    // const [eventState, SetEventState] = useState(eventData)
    console.log(eventData[0])

    return(
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 m-8">
            <Link href={'/events'}>
                <div className="p-2 mb-4 rounded-full bg-gray-100 flex justify-around items-center w-24 h-10 hover:bg-gray-200 cursor-pointer">
                    <ChevronDoubleLeftIcon className="w-8 text-blue-500 hover:text-blue-600"/>
                    <p className="text-base font-medium text-blue-500 select-none hover:text-blue-600">Back</p>
                </div>
            </Link>
            <div className="text-gray-600">
                <p className="font-medium text-lg">Create New Event</p>
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
                            <input  type="text" name="title" id="title" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                    placeholder="Event Title"
                                    disabled
                                    value={eventData[0].event_name}
                                    disabled    
                            />
                        </div>

                        <div className="md:col-span-5">
                            <label for="email">Description</label>
                            <textarea   name="description" id="description" 
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                        placeholder="New Description"
                                        value={eventData[0].description}
                                        disabled            
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label for="address">Speaker Name</label>
                            <input  type="text" name="speakerName" id="speakerName" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                    placeholder="Name of the speaker"
                                    value={eventData[0].speaker}
                                    disabled        
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label for="city">Speaker Company</label>
                            <input  type="text" name="speakerCompany" id="speakerCompany" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                    placeholder="Company name"
                                    value={eventData[0].speaker_company}
                                    disabled
                            />
                        </div>
                        <div className="md:col-span-1">
                            <label for="city">Speaker Role</label>
                            <input  type="text" name="speakerRole" id="speakerRole" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                    placeholder="Proffesion"
                                    value={eventData[0].speaker_job}
                                    disabled
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label for="address">Date </label>
                            <input  type="text" name="price" id="price" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                    placeholder="0"
                                    value={eventData[0].date.slice(0,10).replaceAll("-"," ")}
                                    disabled
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label for="address">Time </label>
                            <input  type="text" name="price" id="price" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                    placeholder="0"
                                    value={`${eventData[0].started_at.slice(11,16)} - ${eventData[0].finish_at.slice(11,16)} WIB`}
                                    disabled
                                    />
                        </div>
                        <div className="md:col-span-1">
                            <label for="address">Price </label>
                            <input  type="number" name="price" id="price" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                                    placeholder="0"
                                    value={eventData[0].price}
                                    disabled
                                    />
                        </div>
    
                        </div>
                </div>
            </div>
        </div>
    )
}