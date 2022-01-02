import CounselerEditProps from "../../../src/components/konselingProps/editCounseler";
import Layout from "../../../src/components/MainLayout"

// import { useRouter } from 'next/router'
export const getServerSideProps = async context =>{
    // const router = useRouter()
    // const { id } = router.query
    const {params} = context
    const res = await fetch(`https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/counselor/${params.id}`);
  
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
            <CounselerEditProps mentorData={mentorData.mentorData}/>
        </div>
        </Layout>
    )
}
