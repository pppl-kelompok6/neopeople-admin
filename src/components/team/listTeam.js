
import DataTable from 'react-data-table-component';
import Link from 'next/link';

export default function TeamList({teamData}){

    async function deleteEvent(id) {
        await fetch(`https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/team/${id}`,{
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
            name: "avatar",
            // selector: (row) => row.event_name
            cell: (row)=>(
                <div className="justify-items-start">
                    <img src={row.photo} className='w-24'></img>
                </div>
            )

            
        },
        {
            name: "Name",
            selector: (row) => row.name
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Phone number",
            selector: (row) => row.phone_number
        },
        {
            name: "Position",
            selector: (row) => row.position
        },
        {
            name: "Occupation",
            selector: (row) => row.occupation
        },
        {
            name: "Action",
            width: "200px",
            button: true,
            maxWidth: "15%",
            center: true,
            cell: (row) => (
              <div className="justify-items-start">
                <Link href={`/team/staffedit/${row.id}`}>
                  <button className="m-1 w-[44px] h-[22px] border border-[#4FE34E] rounded-sm bg-[#eaf4e8] hover:bg-[#ADC6FF] text-[#3CC13B] ">Edit</button>
                </Link>
                <Link href={`/team/staffdetail/${row.id}`}>
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
                title="Team List"
                columns={columns}
                data={teamData}
                direction="auto"
                pointerOnHover
                responsive
                highlightOnHover
                pagination
            />
        </div>
    )
}