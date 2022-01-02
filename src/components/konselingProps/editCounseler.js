import Link from "next/link"
import { useState } from "react"

export default function CounselerEditProps({mentorData}){
    
    const [eventState, setEventState] = useState(mentorData)

    async function putEvent(e) {
        e.preventDefault()
        // console.log(eventState)
        await fetch(`https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/events/${eventState.id}`,{
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
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
                    <div className="mt-2 border-dashed border rounded w-fit h-[150px] ">
                    </div>

                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                        <label for="full_name">Full Name</label>
                        <input  defaultValue={eventState.name} type="text" name="title" id="title" 
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
                        <label for="email">email</label>
                        <input   defaultValue={eventState.email} name="description" id="description" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="New Description"
                                    onChange={(e)=>{
                                        setEventState({
                                            ...eventState,
                                            Description: e.target.value
                                        })
                                    }}
                                    />
                    </div>

                    <div className="md:col-span-2">
                        <label for="address">Phone Number (WA)</label>
                        <input  defaultValue={eventState.phone_number} type="text" name="speakerName" id="speakerName" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Name of the speaker"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        speaker: e.target.value
                                    })
                                }}
                                />
                    </div>

                    <div className="md:col-span-3">
                        <label for="city">Occupation</label>
                        <input  defaultValue={eventState.occupation} type="text" name="speakerCompany" id="speakerCompany" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Company name"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        speaker_company: e.target.value
                                    })
                                }}
                                />
                    </div>
                    <div className="md:col-span-2">
                        <label for="city">Company</label>
                        <input  defaultValue={eventState.position} type="text" name="speakerRole" id="speakerRole" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Proffesion"
                                onChange={(e)=>{
                                    setEventState({
                                        ...eventState,
                                        speaker_job: e.target.value
                                    })
                                }}
                                />
                    </div>
                    <div className="md:col-span-3">
                        <label for="city">Position</label>
                        <input  defaultValue={eventState.position} type="text" name="speakerRole" id="speakerRole" 
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
                        <Link href={'/counseling'}>
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