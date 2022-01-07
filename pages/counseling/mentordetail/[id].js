import CounselerDetailProps from "../../../src/components/konselingProps/detailCounseler";
import Layout from "../../../src/components/MainLayout"
import CONFIG from "../../../src/services/CONFIG";

// import { useRouter } from 'next/router'
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
    console.log(mentorData)
    return(
        <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
            <CounselerDetailProps mentorData={mentorData.mentorData[0]}/>
        </div>
        </Layout>
    )
}
