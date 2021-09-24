import axios from "axios"
import * as URL from "../../../constants"

export default async function get(config){
  const response = await axios.get(URL.TaskUrl,config)
  .then((res)=> res)
  .catch(err => err.response)
  return response
}