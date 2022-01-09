import Calender from '../../src/components/konselingProps/calender'
import Caldata from '../../src/components/konselingProps/calenderData'
import ListCounseler from '../../src/components/konselingProps/ListCounseler'
import Layout from '../../src/components/MainLayout'
import CONFIG from '../../src/services/CONFIG'

export const getServerSideProps = async context =>{
  const {req} = context
  const {cookies} = req

  const [counselorRes, sessionRes] = await Promise.all([
    fetch(`${CONFIG.BASE_URL}/counselor`,{
      headers:{
        "Token": cookies.Token
      }
    }),
    fetch(`${CONFIG.BASE_URL}/session`,{
      headers:{
        "Token": cookies.Token
      }
    })
  ])

  var sessionData, counselorData = ""

  if(counselorRes.status == 200 && sessionRes.status == 200){
    [counselorData, sessionData] = await Promise.all([
      counselorRes.json(), sessionRes.json()
    ])
  }
  return{
    props:{
      sessionData, counselorData
    }
  }
}

export default function Counseling(props) {
  console.log(props)
  const appoints = Caldata(props.sessionData)
  console.log(typeof(appoints))
  return (
      <Layout>
          <div className="bg-white rounded shadow-lg p-8 m-8 px-4 ">
                <div className="text-gray-600 mb-8">
                    <p className="font-medium text-lg">Counseling Manager</p>
                    <p>Please fill out all the fields.</p>
                </div>
            <div className="grid grid-cols-3 gap-8  ">
              
              <div className="sm:col-span-1 col-span-3">
                <ListCounseler counselorData={props.counselorData}/>
              </div>
              <div className="sm:col-span-2 col-span-3 overflow-hidden">
                <Calender sessionData = {appoints}/>
              </div>
                
            </div>
          </div>
      </Layout>
  )
}