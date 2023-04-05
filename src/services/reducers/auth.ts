import { Reducer } from "redux";
import { 
  GET_TOKEN_FAILED,
  GET_TOKEN_REQUEST,
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
  tokenRequest: boolean,
  tokenFailed: boolean,
  token: string
}

export const authState = {
  userRequest: false,
  userFailed: false,
  user: null,
  tokenRequest: false,
  tokenFailed: false,
  token: ''
}

export const authStore: Reducer = (state: IAuthState = authState, action: TAuthActions) => {
  switch(action.type){
    case GET_TOKEN_REQUEST: {
      return {
        ...state,
        tokenRequest: true
      }
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: true
      }
    }
    case GET_TOKEN_SUCCESS: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: false,
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