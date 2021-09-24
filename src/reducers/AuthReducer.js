import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS,LOGOUT} from '../actions/Types'


const initialState = {
    userInfo:{},
    authenticating: false,
    isAuthenticated: false,
    error: null
}

const authReducer = (state= initialState, action ) => {
    switch(action.type){
        case LOGIN_REQUEST :
            return {
                ...state ,
                authenticating:true
            }
        
        case LOGIN_SUCCESS  :
            return {
                ...state ,
                userInfo:{...action.payload},
                authenticating:false,
                isAuthenticated :true,
            }

        case LOGIN_FAILURE:
            return{
                ...state,
                isAuthenticated: false,
                authenticating: false,
                error: action.payload
            }

            case REGISTER_REQUEST :
              return {
                  ...state ,
                  authenticating:true
              }
          
          case REGISTER_SUCCESS  :
              return {
                  ...state ,
                  userInfo:{...action.payload.user},
                  authenticating:false,
                  isAuthenticated :true,
              }
  
              case REGISTER_FAILURE:
                  return{
                      ...state,
                      isAuthenticated: false,
                      authenticating: false,
                      error: action.payload
                  }    
                

            case LOGOUT:
                return{
                  userInfo:{},
                  isAuthenticated: false,
                }

            default:
                return state
    }
}

export default authReducer;