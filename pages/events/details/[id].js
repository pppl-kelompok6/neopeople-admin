import Cookies from "js-cookie"
import EventDetailProps from "../../../src/components/Events/eventDetailProps"
import Layout from "../../../src/components/MainLayout"
import CONFIG from "../../../src/services/CONFIG"
// import { useRouter } from 'next/router'


export default function EventDetail(eventData){
    // console.log(eventData)
    return(
        <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
          <EventDetailProps eventData={eventData.eventData} />
        </div>
        </Layout>
    )
}
export const getServerSideProps = async context =>{

    const {params, req} = context
    const { cookies }  = req
    const res = await fetch(`${CONFIG.BASE_URL}/events/${params.id}`,{
      headers:{
        "Token": cookies.Token
      }
    });
    var data = ""
    if(res.status == 200){
      data = await res.json()
    }
    
    return{
      props: {eventData : data}
    }
}