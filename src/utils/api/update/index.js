import axios from "axios"
import * as URL from "../../../constants"

const header= {
  "Content-Type" : "application/json"
}

export default async function update(id,body){
  const response = await axios.put(`${URL.TaskUrl}/${id}`,body,header)
  .then((res)=> res)
  .catch(err => console.log(err.response))
  return response
}