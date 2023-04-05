import { IUserData } from "../../utils/types";
import { 
  GET_TOKEN_FAILED,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_USER_FAILED, 
  GET_USER_REQUEST,
  GET_USER_SUCCESS
} from "../actionTypes/auth";

interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST
}

interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED
}

interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS,
  payload: IUserData
}

interface IGetTokenRequest {
  readonly type: typeof GET_TOKEN_REQUEST
}

interface IGetTokenFailed {
  readonly type: typeof GET_TOKEN_FAILED
}

interface IGetTokenSuccess {
  readonly type: typeof GET_TOKEN_SUCCESS,
  payload: string
}

export type TAuthActions = IGetUserRequest
  | IGetUserFailed
  | IGetUserSuccess
  | IGetTokenRequest
  | IGetTokenFailed
  | IGetTokenSuccess

export const getUserRequest = (): IGetUserRequest => {
  return {
    type: GET_USER_REQUEST
  }
}

export const getUserFailed = (): IGetUserFailed => {
  return {
    type: GET_USER_FAILED
  }
}

export const getUserSuccess = (user: IUserData): IGetUserSuccess => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
}

export const getTokenRequest = (): IGetTokenRequest => {
  return {
    type: GET_TOKEN_REQUEST
  }
}

export const getTokenFailed = (): IGetTokenFailed => {
  return {
    type: GET_TOKEN_FAILED
  }
}

export const getTokenSuccess = (token: string): IGetTokenSuccess => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload: token
  }
}