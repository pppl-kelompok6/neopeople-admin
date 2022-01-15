import CONFIG from './CONFIG';
import Cookies from 'js-cookie'

async function detailEventsGet(params) {
    const res = await fetch(`${CONFIG.BASE_URL}/events/${params.id}`,{
        headers:{
          "Token" : Cookies.get("Token")
        }
      });
    
    const data = await res.json();
    console.log(data)
}

async function NewEventCreate(params) {
  const res = await fetch(`${CONFIG.BASE_URL}/events`, {
    method:"POST",
    headers:{
      "Token": Cookies.get("Token"),
      "Content-Type": "application/json"
    },
    body: params
  })
  const data = await res.json();
  return data
}

export {detailEventsGet, NewEventCreate}