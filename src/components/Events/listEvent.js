import DataTable from 'react-data-table-component';
import Link from 'next/link';
export default function ListEvents({eventData}){

    async function deleteEvent(id) {
        await fetch(`https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/events/${id}`,{
            method: "DELETE"
        }).then(()=>{
            location.reload();
        })
    }

    const columns=[
        {
            name: "Id",
            selector: (row) => row.id,
            maxWidth:"1%"
        },
        {
            name: "Title",
            selector: (row) => row.event_name
        },
        {
            name: "Speaker",
            selector: (row) => row.speaker
        },
        {
            name: "Date",
            selector: (row) => row.date
        },
        {
            name: "Start At",
            selector: (row) => row.start_time
        },
        {
            name: "End At",
            selector: (row) => row.end_time
        },
        {
            name: "Price",
            selector: (row) => row.price
        },
        {
            name: "Action",
            width: "200px",
            button: true,
            maxWidth: "15%",
            center: true,
            cell: (row) => (
              <div className="justify-items-start">
                <Link href={`/events/edit/${row.id}`}>
                  <button className="m-1 w-[44px] h-[22px] border border-[#4FE34E] rounded-sm bg-[#eaf4e8] hover:bg-[#ADC6FF] text-[#3CC13B] ">Edit</button>
                </Link>
                <Link href={`/events/details/${row.id}`}>
                  <button className="m-1 w-[44px] h-[22px] border border-[#ADC6FF] rounded-sm bg-[#F0F5FF] hover:bg-[#ADC6FF] text-[#2F54EB] ">Detail</button>
                </Link>
                  <button onClick={()=>{
                    deleteEvent(row.id);
                  }} className="m-1 w-[44px] h-[22px] border border-[#FFA39E] rounded-sm bg-[#FFF1F0] hover:bg-[#ADC6FF] text-[#F5222D] ">Delete</button>
              </div>
            ),
          },
    ]
    return(
        <div className='w-full h-full p-8'>
            <DataTable
                title="Event List"
                columns={columns}
                data={eventData.eventData}
                direction="auto"
                pointerOnHover
                responsive
                highlightOnHover
                pagination
            />
        </div>
    )
}