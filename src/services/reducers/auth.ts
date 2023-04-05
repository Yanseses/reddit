import { Reducer } from "redux";
import { 
  GET_TOKEN_SUCCESS,
  GET_USER_FAILED, 
  GET_USER_REQUEST, 
  GET_USER_SUCCESS 
} from "../actionTypes/auth";
import { TAuthActions } from "../actions/auth";

interface IAuthState {
  userRequest: boolean,
  userFailed: boolean,
  user: null,
  token: string
}

export const authState = {
  userRequest: false,
  userFailed: false,
  user: null,
  token: ''
}

export const authStore: Reducer = (state: IAuthState = authState, action: TAuthActions) => {
  switch(action.type){
    case GET_TOKEN_SUCCESS: {
      return {
        ...state,
        token: action.payload
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        userRequest: true
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        userRequest: false,
        userFailed: true
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userRequest: false,
        userFailed: false,
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
}