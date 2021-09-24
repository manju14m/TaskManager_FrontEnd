import axios from "axios"
import * as URL from "../../../constants"


export default async function deleteTaskById(id, config){
  const response = await axios.delete(`${URL.TaskUrl}/${id}`,config)
  .then((res)=> res)
  .catch(err => console.log(err.response))
  return response
}