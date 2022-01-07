import Layout from "../../../src/components/MainLayout"
import EventEditProps from "../../../src/components/Events/eventEditProps"
import CONFIG from "../../../src/services/CONFIG";
import Cookies from "js-cookie";
import ReactCloudinaryUploader from '@app-masters/react-cloudinary-uploader'
import { useState, useEffect } from "react";
export const getServerSideProps = async context =>{

    const {params} = context
    const res = await fetch(`${CONFIG.BASE_URL}/events/${params.id}`,{
      headers:{
        "Token" : Cookies.get("Token")
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

export default function EventUpdate(eventData){
    console.log(eventData.eventData)
      let options = {
        cloud_name: "p3l-neopeople",
        upload_preset: "j8gryi2c",
        multiple: true,
        returnJustUrl: true
    };
    const [widget, setWidget] = useState(false)
    const [cover, setCover] = useState(""); 
    useEffect(()=>{
      if(widget){
        ReactCloudinaryUploader.open(options).then(image=>{
          // if (this.props.returnJustUrl)
          // image = image.url;
          console.log("image",image[0]);
          setCover(image[0])
        }).catch(err=>{
            console.error(err);
        });
      }
    },[widget])

    
    return(
        <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
          <EventEditProps eventData={eventData.eventData} cover={cover}/>
        </div>
        </Layout>
    )
}
