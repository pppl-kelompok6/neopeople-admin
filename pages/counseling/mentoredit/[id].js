import CounselerEditProps from "../../../src/components/konselingProps/editCounseler";
import Layout from "../../../src/components/MainLayout"
import ReactCloudinaryUploader from '@app-masters/react-cloudinary-uploader'
import { useState, useEffect } from "react";
import CONFIG from "../../../src/services/CONFIG";

export const getServerSideProps = async context =>{
    // const router = useRouter()
    // const { id } = router.query
    const {params} = context
    const res = await fetch(`${CONFIG.BASE_URL}/counselor/${params.id}`);
  
    const data = await res.json();
    
    return{
      props: {mentorData : data}
    }
}

export default function MentorEdit(mentorData){
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
            }).
            catch(err=>{
                console.error(err);
            });
        }
        },[widget])
    return(
        <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
            <CounselerEditProps mentorData={mentorData.mentorData[0]} setWidget={setWidget} widget={widget} cover={cover}/>
        </div>
        <script 
        src="https://widget.cloudinary.com/v2.0/global/all.js" 
        type="text/javascript">
        </script>
        </Layout>
    )
}
