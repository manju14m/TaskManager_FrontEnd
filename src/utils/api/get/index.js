import axios from "axios"
import * as URL from "../../../constants"

export default async function get(){
  const response = await axios.get(URL.TaskUrl)
  .then((res)=> res)
  .catch(err => console.log(err.response))
  return response
}