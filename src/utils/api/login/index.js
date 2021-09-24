import axios from "axios"
import * as URL from "../../../constants"


export default async function login(body){
  const response = await axios
  .post(URL.LoginUrl, body)
  .then(response => response)
  .catch(err =>err.response)

  return response
}
