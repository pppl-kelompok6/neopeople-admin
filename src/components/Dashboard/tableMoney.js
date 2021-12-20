import DataTable from "react-data-table-component"

export default function TableMoney(){

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 3,
            title: 'Spiderman',
            year: '2001',
        },
        {
            id: 4,
            title: 'UP',
            year: '2014',
        },
        {
            id: 5,
            title: 'No-Way-Home',
            year: '2021',
        },
        {
            id: 5,
            title: 'No-Way-Home',
            year: '2021',
        },
    ]
    return(
        <div>
            <DataTable
                columns={columns}
                data={data}
                expandableRows
                expandableRowsComponent={ExpandedComponent}

            />
        </div>       
    )
}