import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'

export default function Chart(){
    const data = [
        {
          name: 'Senin',
          uv: 3000,
          pv: 1400,
          amt: 2400,
        },
        {
          name: 'Selasa',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Rabu',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Kamis',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Jumat',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sabtu',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Minggu',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return(
        <div className='w-full h-[90%]'>
          <h3 className='font-normal text-[22px] ml-4 mb-1'>Visitor chart</h3>
          <ResponsiveContainer 
            width="100%" height= "100%">
            <LineChart
                width={500}
                height={250}
                data={data}
                margin={{ top: 5, right: 40, left: 5, bottom: 5 }}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend/>
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            </LineChart>
          </ResponsiveContainer>
        </div>
    )
}