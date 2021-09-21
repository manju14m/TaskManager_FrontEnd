import axios from "axios"
import * as URL from "../../../constants"

const header= {
  "Content-Type" : "application/json"
}
export default async function deleteTaskById(id){
  const response = await axios.delete(`${URL.TaskUrl}/${id}`,header)
  .then((res)=> res)
  .catch(err => console.log(err.response))
  return response
}