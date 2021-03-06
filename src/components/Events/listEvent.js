import DataTable from 'react-data-table-component';
import Link from 'next/link';
import CONFIG from '../../services/CONFIG';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
export default function ListEvents({eventData}){

    async function deleteEvent(id) {
        await fetch(`${CONFIG.BASE_URL}/events/${id}`,{
            method: "DELETE",
            headers: {
                "Token" : Cookies.get("Token")
            }
        }).then(()=>{
            // location.reload();
            Swal.fire(
                'Good job!',
                'Event has been deleted!',
                'success'
              ).then(()=>{
                  location.reload()
              })
        }).catch(err=>console.log(err))
    }

    const columns=[
        {
            name: "Id",
            selector: (row) => row.ID,
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
            selector: (row) => {
                return row.date.slice(0,10).replaceAll("-"," ")
            }
        },
        {
            name: "Start At",
            selector: (row) => {
                return `${row.started_at.slice(11,16)} WIB`
            }
        },
        {
            name: "End At",
            selector: (row) => {
                return `${row.finish_at.slice(11,16)} WIB`
            }
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
                <Link href={`/events/edit/${row.ID}`}>
                  <button className="m-1 w-[44px] h-[22px] border border-[#4FE34E] rounded-sm bg-[#eaf4e8] hover:bg-[#ADC6FF] text-[#3CC13B] ">Edit</button>
                </Link>
                <Link href={`/events/details/${row.ID}`}>
                  <button className="m-1 w-[44px] h-[22px] border border-[#ADC6FF] rounded-sm bg-[#F0F5FF] hover:bg-[#ADC6FF] text-[#2F54EB] ">Detail</button>
                </Link>
                  <button onClick={()=>{
                    deleteEvent(row.ID);
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