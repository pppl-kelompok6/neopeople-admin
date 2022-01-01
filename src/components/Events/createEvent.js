
export default function CreateEvent(){

    return(
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 m-8">
                <div className="text-gray-600">
                    <p className="font-medium text-lg">Create New Event</p>
                    <p>Please fill out all the fields.</p>
                </div>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="mt-2 border-dashed border rounded w-fit h-[150px] ">
                    </div>

                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                        <label for="full_name">Title</label>
                        <input type="text" name="title" id="title" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Event Title" />
                    </div>

                    <div className="md:col-span-5">
                        <label for="email">Description</label>
                        <textarea name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="New Description"/>
                    </div>

                    <div className="md:col-span-2">
                        <label for="address">Speaker Name</label>
                        <input type="text" name="speakerName" id="speakerName" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Name of the speaker"/>
                    </div>

                    <div className="md:col-span-2">
                        <label for="city">Speaker Company</label>
                        <input type="text" name="speakerCompany" id="speakerCompany" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Company name"/>
                    </div>
                    <div className="md:col-span-1">
                        <label for="city">Speaker Role</label>
                        <input type="text" name="speakerRole" id="speakerRole" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="Proffesion"/>
                    </div>
                    <div className="md:col-span-2">
                        <label for="address">Date </label>
                        <input type="date" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0"/>
                    </div>
                    <div className="md:col-span-2">
                        <label for="address">Time </label>
                        <input type="time" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0"/>
                    </div>
                    <div className="md:col-span-1">
                        <label for="address">Price </label>
                        <input type="number" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="0"/>
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




                    <div className="md:col-span-5">
                        <div className="inline-flex items-center">
                        <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox"/>
                        <label for="billing_same" className="ml-2">My billing address is different than above.</label>
                        </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
    )
}