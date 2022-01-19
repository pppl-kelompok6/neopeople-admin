import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui';
import { useEffect } from 'react';
import { useState } from 'react';
import { EditingState, IntegratedEditing, ViewState } from '@devexpress/dx-react-scheduler';
import { NewSessionCreate, SessionEdit } from '../../services/session';

const currentDate = Date.now();
const schedulerData = [
  { startDate: '2022-01-11T09:45:00', endDate: '2022-01-11T11:00:00', title: 'Meeting' },
  { startDate: '2022-01-13T12:00:00', endDate: '2022-01-13T13:30:01', title: 'Go to a gym' },
];

export default function Calender({sessionData}){
  const [counselor, setCounselor] = useState([]);
  const [editId, setEditId] = useState(null);
  const [putSession, setPutSession] = useState({})

  
  const mappingAp = (appointment) =>{
    return({
      id: appointment.ID,
      startDate: appointment.start,
      endDate: appointment.end,
      title: appointment.title,
      notes: appointment.note
    })
  }
  
  const mappingData = (data) =>{
    const startStr= data.startDate.toString().split(" ");
    const endStr= data.endDate.toString().split(" ");
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const monthStart = []
    const monthEnd = []
    months.map((month, i = 0)=>{
      i = i + 1;
      if(month === startStr[1]){
        if(i<10){
          monthStart.push(`0${i}`)
        }else{
          monthStart.push(i.toString())
        }
      }
    })

    months.map((month, i = 0)=>{
      i++;
      if(month == endStr[1]){
        if(i<10){
          monthEnd.push(`0${i}`)
        }else{
          monthEnd.push(i.toString())
        }
      }
    }) 
    const start = `${startStr[3]}-${monthStart[0]}-${startStr[2]} ${startStr[4]}`
    const end = `${endStr[3]}-${monthEnd[0]}-${endStr[2]} ${endStr[4]}`
    return({
      start: start,
      end: end,
      title: data.title,
      note: "https://meet.google.com/eak-caaa-aot"
    })
  }

  useEffect(()=>{
    const dataArr = []
    sessionData.map(event=>{
        dataArr.push(mappingAp(event))
    })
    console.log(dataArr)
    setCounselor(dataArr)
  },[])


  async function AddNew(added) {
    const payload = mappingData(added);
    console.log(payload)
    await NewSessionCreate(payload);

  }
  
  async function EditEvent(id, params) {
    const payload = params;
    const data = await SessionEdit(id, payload)
    console.log(data)  
  }

  return(
    <Paper>
    <Scheduler data={counselor} height={660}>
      <ViewState
        currentDate="2022-01-12"/>
      <WeekView/>
      {/* <DayView/> */}
      <EditingState
        onCommitChanges={({added, changed, deleted})=>{
          if(added){
            AddNew(added)
            console.log(added)
          }else if(changed){
            const editCounselor = {
              end: "",
              note: "",
              start: "",
              title: ""
            }
            counselor.map(event=>{
              if(changed[event.id]){
                // console.log(event.id)
                setEditId(event.id)
                const newEdit = changed[event.id]
                const keys = ["startDate", "endDate", "title", "notes"]
                const keysFinal = ["start", "end", "title", "note"]

                for(let i = 0; i<keys.length; i++){
                  event["startDate"] = event["startDate"].replace("T", " ");
                  event["endDate"] = event["endDate"].replace("T", " ");
                  
                  if(newEdit[keys[i]]){
                    editCounselor[keysFinal[i]] = newEdit[keys[i]]
                  }else{
                    editCounselor[keysFinal[i]] = event[keys[i]]
                  }
                  // console.log(editCounselor[keysFinal[i]])
                }
                console.log(editCounselor)
                setPutSession(editCounselor)
                // console.log(editId)
                // setEditCounselor({
                //   ...editCounselor,
                //   newEdit
                // })
              }
            })
            console.log(putSession)
            console.log(editId)
            EditEvent(editId, putSession)
          }
        }}/>
        <IntegratedEditing/>
        <ConfirmationDialog/>
      <Appointments />
      <AppointmentTooltip
          showCloseButton
          showDeleteButton
          showOpenButton
      />
      <AppointmentForm/>
    </Scheduler>
  </Paper>
  );
}
