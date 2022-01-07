import Link from "next/link"
import { useState } from "react"
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"

export default function CounselerEditProps({mentorData}){
    
    const [mentorState, setmentorState] = useState(mentorData)
    console.log(mentorState)

    return(
        <form onSubmit={(e)=>{putEvent(e)}} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 m-8">
            <Link href={'/counseling'}>
                <div className="p-2 mb-4 rounded-full bg-gray-100 flex justify-around items-center w-24 h-10 hover:bg-gray-200 cursor-pointer">
                    <ChevronDoubleLeftIcon className="w-8 text-blue-500 hover:text-blue-600"/>
                    <p className="text-base font-medium text-blue-500 select-none hover:text-blue-600">Back</p>
                </div>
            </Link>
                <div className="text-gray-600">
                    <p className="font-medium text-lg">Edit Counselor</p>
                    <p>Please fill out all the fields.</p>
                </div>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="mt-2 border-dashed border rounded w-fit ">
                    <img className="w-140" src={mentorState.photo}></img>
                </div>

                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                        <label for="full_name">Full Name</label>
                        <input  defaultValue={mentorState.name} type="text" name="title" id="title" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Event Title" 
                                disabled
                                />
                    </div>

                    <div className="md:col-span-5">
                        <label for="email">email</label>
                        <input   defaultValue={mentorState.email} name="description" id="description" 
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="New Description"
                                    disabled
                                    />
                    </div>

                    <div className="md:col-span-2">
                        <label for="address">Phone Number (WA)</label>
                        <input  defaultValue={mentorState.phone_number} type="text" name="speakerName" id="speakerName" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Name of the speaker"
                                disabled
                                />
                    </div>

                    <div className="md:col-span-3">
                        <label for="city">Occupation</label>
                        <input  defaultValue={mentorState.occupation} type="text" name="speakerCompany" id="speakerCompany" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Company name"
                                disabled
                                />
                    </div>
                    <div className="md:col-span-2">
                        <label for="city">Company</label>
                        <input  defaultValue={mentorState.company} type="text" name="speakerRole" id="speakerRole" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Proffesion"
                                disabled
                                />
                    </div>
                    <div className="md:col-span-3">
                        <label for="city">Position</label>
                        <input  defaultValue={mentorState.position} type="text" name="speakerRole" id="speakerRole" 
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Proffesion"
                                disabled
                                />
                    </div>



                    </div>
                </div>
                </div>
            </form>
    )
}