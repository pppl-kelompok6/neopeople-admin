import Layout from "../../../src/components/MainLayout"
import EventEditProps from "../../../src/components/Events/eventEditProps"
// import { useRouter } from 'next/router'
export const getServerSideProps = async context =>{
    // const router = useRouter()
    // const { id } = router.query
    const {params} = context
    const res = await fetch(`https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/events/${params.id}`);
  
    const data = await res.json();
    
    return{
      props: {eventData : data}
    }
}

export default function EventUpdate(eventData){
    console.log(eventData.eventData)
    return(
        <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
          <EventEditProps eventData={eventData.eventData}/>
        </div>
        </Layout>
    )
}
