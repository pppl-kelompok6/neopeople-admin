import CONFIG from './CONFIG';
import Cookies from 'js-cookie'

async function NewSessionCreate(params) {
  const res = await fetch(`${CONFIG.BASE_URL}/session`, {
    method:"POST",
    headers:{
      "Token": Cookies.get("Token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
  const data = await res.json();
  return data
}

async function SessionEdit(id, params) {
  const res = await fetch(`${CONFIG.BASE_URL}/session/${parseInt(id)}`, {
    method:"PUT",
    headers:{
      "Token": Cookies.get("Token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
  const data = await res.json();
  return data
}

export {NewSessionCreate, SessionEdit}