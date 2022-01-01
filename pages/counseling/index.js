import Calender from '../../src/components/konselingProps/calender'
import ListCounseler from '../../src/components/konselingProps/ListCounseler'
import Layout from '../../src/components/MainLayout'

export default function Counseling() {
  return (
      <Layout>
          <div className="bg-white rounded shadow-lg p-8 m-8 px-4 ">
                <div className="text-gray-600 mb-8">
                    <p className="font-medium text-lg">Counseling Manager</p>
                    <p>Please fill out all the fields.</p>
                </div>
            <div className="grid grid-cols-3 gap-8  ">
              
              <div className="sm:col-span-1 col-span-3">
                <ListCounseler/>
              </div>
              <div className="sm:col-span-2 col-span-3">
                <Calender/>
              </div>
                
            </div>
          </div>
      </Layout>
  )
}