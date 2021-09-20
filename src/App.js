import './App.css';
import TakPage from "./pages/Task"
import get from "./utils/api/post"
import {useEffect} from "react"
import store from "./store"
import {Provider} from "react-redux"

function App(){

  useEffect(()=>{
    get()
  },[])

return(
  <Provider store={store}>
    <TakPage/>
  </Provider>
)}

export default App;