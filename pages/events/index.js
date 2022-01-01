import Layout from '../../src/components/MainLayout'
import CreateEvent from '../../src/components/Events/createEvent'
import ListEvents from '../../src/components/Events/listEvent'

export const getServerSideProps = async context =>{
  const res = await fetch('https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/events');
  
  const data = await res.json();
  
  return{
    props: {eventData : data}
  }
}


export default function Events(eventData) {
  console.log(eventData)
  return (
      <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
          <CreateEvent/>
          <ListEvents eventData= {eventData}/>
        </div>
      </Layout>
  )
}