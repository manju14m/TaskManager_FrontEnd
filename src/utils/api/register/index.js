import axios from "axios"
import * as URL from "../../../constants"


export default async function register(body){
  const response = await axios
  .post(URL.RegisterUrl, body)
  .then(response => response)
  .catch(err =>err.response)

  return response
}
