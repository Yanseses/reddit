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
import { IUserData } from "../../utils/types";

interface IAuthState {
  user: {
    request: boolean,
    failed: boolean,
    error: string,
    data: null | IUserData,
    authorized: boolean
  },
  token: {
    request: boolean,
    failed: boolean,
    error: string,
    data: string
  }
}

export const authState = {
  user: {
    request: false,
    failed: false,
    error: '',
    data: null,
    authorized: false
  },
  token: {
    request: false,
    failed: false,
    error: '',
    data: ''
  }
}

export const authStore: Reducer = (state: IAuthState = authState, action: TAuthActions) => {
  switch(action.type){
    case GET_TOKEN_REQUEST: {
      return {
        ...state,
        token: {
          ...state.token,
          request: true
        }
      }
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state,
        token: {
          ...state.token,
          request: false,
          failed: true,
          error: ''
        }
      }
    }
    case GET_TOKEN_SUCCESS: {
      return {
        ...state,
        token: {
          request: false,
          failed: false,
          error: '',
          data: action.payload
        },
        user: {
          ...state.user,
          authorized: true
        }
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        user: {
          ...state.user,
          request: true
        }
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        user: {
          ...state.user,
          request: false,
          failed: true,
          error: ''
        }
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          request: false,
          failed: false,
          error: '',
          data: action.payload
        }
      }
    }
    default: {
      return state
    }
  }
}