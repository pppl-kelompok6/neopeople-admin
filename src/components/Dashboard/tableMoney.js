import DataTable from "react-data-table-component"

export default function TableMoney(){

    const ExpandedComponent = ({ data }) => 
            <pre>
                <div className="w-full h-[100px]">

                </div>
            </pre>;
    const columns = [
        {
            name: 'title',
            selector: row => row.title,
        },
        {
            name: 'date',
            selector: row => row.date,
        },
        {
            name: 'time',
            selector: row => row.time,
        },
        {
            name: 'speaker',
            selector: row => row.speaker,
        },
        {
            name: 'status',
            selector: row => row.status,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            date: '2000-02-30',
            time: '14:10-15:10',
            speaker: 'Lala',
            status: 'Upcomming'
        },
        {
            id: 2,
            title: 'Last Day',
            date: '2000-10-30',
            time: '14:10-15:10',
            speaker: 'Lala',
            status: 'Upcomming'
        },
        {
            id: 3,
            title: 'Capital Building',
            date: '2000-10-30',
            time: '14:10-15:10',
            speaker: 'Doni',
            status: 'Upcomming'
        },

    ]
    return(
        <div className="h-full w-full bg-white flex flex-col items-center justify-center">
            <DataTable
                title="All events"
                columns={columns}
                data={data}
                direction="auto"
                fixedHeader
                fixedHeaderScrollHeight="300px"
                pointerOnHover
                responsive
                highlightOnHover
            />
        </div>       
    )
}