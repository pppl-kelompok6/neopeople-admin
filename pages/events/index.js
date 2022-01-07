import Layout from '../../src/components/MainLayout'
import CreateEvent from '../../src/components/Events/createEvent'
import ListEvents from '../../src/components/Events/listEvent'
import CONFIG from '../../src/services/CONFIG';

import ReactCloudinaryUploader from '@app-masters/react-cloudinary-uploader'
import { useEffect, useState } from 'react';

export const getServerSideProps = async context =>{
  const {req} = context
  const { cookies} = req
  const res = await fetch(`${CONFIG.BASE_URL}/events`,{
    headers:{
      "Token": cookies.Token
    }
  });
  
  const data = await res.json();
  
  return{
    props: {eventData : data}
  }
}


export default function Events(eventData) {
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

      

  return (
      <>

      <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
          <CreateEvent setWidget={setWidget} widget={widget} cover={cover}/>
          <ListEvents eventData= {eventData}/>
        </div>
      </Layout>
      <script 
      src="https://widget.cloudinary.com/v2.0/global/all.js" 
      type="text/javascript">
      </script>
      </>
  )
}