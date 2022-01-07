import Layout from "../../../src/components/MainLayout"
import TeamEditProps from "../../../src/components/team/editTeam";
// import { useRouter } from 'next/router'

export const getServerSideProps = async context =>{
    // const router = useRouter()
    // const { id } = router.query
    const {params} = context
    const res = await fetch(`https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/team/${params.id}`);
  
    const data = await res.json();
    
    return{
      props: {teamData : data}
    }
}

export default function TeamEdit(teamData){
    console.log(teamData.teamData)
    return(
        <Layout>
        <div className='h-fit flex flex-col items-center justify-center gap-4'>
          <TeamEditProps teamData={teamData.teamData}/>
        </div>
        </Layout>
    )
}
