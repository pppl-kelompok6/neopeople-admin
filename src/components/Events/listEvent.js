import DataTable from 'react-data-table-component';

export default function ListEvents({eventData}){
    const columns=[
        {
            name: "id",
            selector: (row) => row.id
        },
        {
            name: "name",
            selector: (row) => row.name
        },
        {
            name: "phone",
            selector: (row) => row.phone
        },
        {
            name: "username",
            selector: (row) => row.username
        },
        {
            name: "website",
            selector: (row) => row.website
        },
    ]
    return(
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
    )
}