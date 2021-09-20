import axios from "axios"
import * as URL from "../../../constants"

const header= {
  "Content-Type" : "application/json"
}
export default async function post(body){
  const response = await axios
  .post(URL.TaskUrl,body,header)
  .then(response => response)
  .catch(err =>err.response)

  console.log(response)
  return response
}
