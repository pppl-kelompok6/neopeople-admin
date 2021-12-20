import DataTable from "react-data-table-component"

export default function TableCounseling(){

    // const ExpandedComponent = ({ data }) => 
    //         <pre>
    //             <div className="w-full h-[100px]">

    //             </div>
    //         </pre>;
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
            name: 'patient',
            selector: row => row.patient,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Session 1',
            date: '2000-02-30',
            time: '14:10-15:10',
            mentor: 'Lala',
            patient: 'Ridho'
        },
        {
            id: 2,
            title: 'Session 2',
            date: '2000-10-30',
            time: '14:10-15:10',
            mentor: 'Lala',
            patient: 'Kevin'
        },
        {
            id: 3,
            title: 'Session 3',
            date: '2000-10-30',
            time: '14:10-15:10',
            mentor: 'Doni',
            patient: 'Samuel'
        },
        {
            id: 4,
            title: 'Session 3',
            date: '2000-11-31',
            time: '12:10-15:10',
            mentor: 'Ridho',
            patient: 'Lala'
        },

    ]
    return(
        <div className="h-full w-full bg-red-100 flex flex-col items-center justify-center">
            <DataTable
                title="Counseling Schedule"
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