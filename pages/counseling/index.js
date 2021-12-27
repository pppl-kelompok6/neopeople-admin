import Calender from '../../src/components/konselingProps/calender'
import ListCounseler from '../../src/components/konselingProps/ListCounseler'
import Layout from '../../src/components/MainLayout'

export default function Counseling() {
  return (
      <Layout>
          <div className="h-fit lg:grid grid-cols-3 md:grid-rows-2 gap-8 p-8">
            <div className="">
              <ListCounseler/>
            </div>
            <div className="col-span-2">
              <Calender/>
            </div>
              
          </div>
      </Layout>
  )
}