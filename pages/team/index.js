import Layout from '../../src/components/MainLayout'
import TeamList from '../../src/components/team/listTeam'


export const getServerSideProps = async context =>{
  const res = await fetch('https://61cf0c2865c32600170c7e9e.mockapi.io/neopeople/team');
  
  const data = await res.json();
  
  return{
    props: {teamData : data}
  }
}


export default function Team(teamData) {
  console.log(teamData)
  return (
    <Layout>
      <div className='h-fit flex flex-col items-center justify-center gap-4'>
        <TeamList teamData={teamData.teamData}/>
      </div>
  </Layout>
  )
}