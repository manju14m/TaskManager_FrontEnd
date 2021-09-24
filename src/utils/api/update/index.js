import axios from "axios"
import * as URL from "../../../constants"



export default async function update(id,body, config){
  const response = await axios.put(`${URL.TaskUrl}/${id}`,body,config)
  .then((res)=> res)
  .catch(err => console.log(err.response))
  return response
}