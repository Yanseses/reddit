import { Reducer } from "redux"
import { ICommentData, IPostData } from "../../utils/types"
import { 
  ADD_POST_MODAL,
  CLEAR_COMMENTS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_POSTS_FAILED, 
  GET_POSTS_REQUEST, 
  GET_POSTS_SUCCESS
} from "../actionTypes/main"
import { TMainActions } from "../actions/main"

export interface IPosts {
  before: string,
  after: string,
  postData: Array<IPostData>,
  counter: number
}

type TMainState = {
  postRequest: boolean,
  postFailed: boolean,
  posts: IPosts,
  postModal: null | IPostData,
  commentsRequest: boolean,
  commetsFailed: boolean,
  comments: Array<ICommentData>
}

export const mainState = {
  postRequest: false,
  postFailed: false,
  posts: {
    postData: [],
    before: '',
    after: '',
    counter: 0
  },
  postModal: null,
  commentsRequest: false,
  commetsFailed: false,
  comments: []
}

export const mainStore: Reducer = (state: TMainState = mainState, action: TMainActions) => {
  switch(action.type){
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        postRequest: true,
      }
    }
    case GET_POSTS_FAILED: {
      return {
        ...state,
        postRequest: false,
        postFailed: true
      }
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        postRequest: false,
        postFailed: false,
        posts: {
          counter: action.payload.counter,
          after: action.payload.after,
          before: action.payload.before,
          postData: state.posts.postData.length > 0 
            ? state.posts.postData.concat(action.payload.postData)
            : action.payload.postData
        }
      }
    }
    case ADD_POST_MODAL: {
      return {
        ...state,
        postModal: state.posts.postData.find((el: IPostData) => action.payload === el.id)
      }
    }
    case CLEAR_COMMENTS: {
      return {
        ...state,
        comments: []
      }
    }
    case GET_COMMENTS_REQUEST: {
      return {
        ...state,
        commentsRequest: true,
      }
    }
    case GET_COMMENTS_FAILED: {
      return {
        ...state,
        commentsRequest: false,
        commetsFailed: true
      }
    }
    case GET_COMMENTS_SUCCESS: {
      return {
        ...state,
        commentsRequest: false,
        commetsFailed: false,
        comments: action.payload
      }
    }
    default: {
      return state
    }
  }
}