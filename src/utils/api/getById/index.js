import axios from "axios"
import * as URL from "../../../constants"

export default async function getById(id){
  const response = await axios.get(`${URL.TaskUrl}/${id}`)
  .then((res)=> res)
  .catch(err => console.log(err.response))
  return response
}