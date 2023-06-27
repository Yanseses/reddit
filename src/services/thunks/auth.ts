import axios from "axios";
import { AppDispatch } from "../types/types";
import { API_URL } from "../../utils/constants";
import { 
  getTokenFailed, 
  getTokenRequest, 
  getTokenSuccess, 
  getUserFailed, 
  getUserRequest,
  getUserSuccess 
} from "../actions/auth";

export function getToken(secretCode: string){
  return function(dispatch: AppDispatch){
    dispatch(getTokenRequest())
    axios.post('https://www.reddit.com/api/v1/access_token', 
    `grant_type=authorization_code&code=${secretCode}&redirect_uri=https://yanseses.github.io/reddit/#/`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: { 
        username: 'zOePDJJVFTX_fUa0eeVhng', 
        password: 'hqVuli8RVw2oRezgo3oMCkbcAj0reQ'
      }
    }).then((req) => {
      if(req && req.status === 200){
        dispatch(getTokenSuccess(req.data.access_token))
      }
    }).catch((err) => {
      console.log(err)
      dispatch(getTokenFailed())
    })
  }
}
// refresh token https://stateful.com/blog/reddit-oauth

export function getUser(token: string){
  return function(dispatch: AppDispatch){
    dispatch(getUserRequest())
    axios.get(API_URL + `/api/v1/me?sr_detail=true`, {
      headers: { Authorization: 'bearer ' + token },
      }).then((req) => {
      if(req && req.status === 200){
        const user = {
          avatarSrc: req.data.icon_img,
          name: req.data.name,
          messages: req.data.inbox_count
        }
        dispatch(getUserSuccess(user))
      } else {
        throw Promise.reject('Ошибка: ' + req.statusText)
      }
    }).catch((err) => {
      console.log(err)
      dispatch(getUserFailed())
    })
  }
}