import Calender from '../../src/components/konselingProps/calender'
import ListCounseler from '../../src/components/konselingProps/ListCounseler'
import Layout from '../../src/components/MainLayout'
import CONFIG from '../../src/services/CONFIG'

export const getServerSideProps = async context =>{
  const {req} = context
  const {cookies} = req
  const res = await fetch(`${CONFIG.BASE_URL}/counselor`,{
    headers:{
      "Token": cookies.Token
    }
  })
  var data = ""
  if(res.status == 200){
    data = await res.json()
  }
  return{
    props:{
      counselorData: data
    }
  }
}

export default function Counseling(counselorData) {

  return (
      <Layout>
          <div className="bg-white rounded shadow-lg p-8 m-8 px-4 ">
                <div className="text-gray-600 mb-8">
                    <p className="font-medium text-lg">Counseling Manager</p>
                    <p>Please fill out all the fields.</p>
                </div>
            <div className="grid grid-cols-3 gap-8  ">
              
              <div className="sm:col-span-1 col-span-3">
                <ListCounseler counselorData={counselorData.counselorData}/>
              </div>
              <div className="sm:col-span-2 col-span-3 overflow-hidden">
                <Calender/>
              </div>
                
            </div>
          </div>
      </Layout>
  )
}