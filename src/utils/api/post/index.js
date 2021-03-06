import axios from "axios"
import * as URL from "../../../constants"


export default async function post(body,config){
  const response = await axios
  .post(URL.TaskUrl,body,config)
  .then(res => res)
  .catch(err =>err.response)
  return response
}
