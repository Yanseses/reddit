import { Reducer } from "redux"
import { ICommentData, IPostData } from "../../utils/types"
import { 
  ADD_POST_MODAL,
  CHANGE_CARMA,
  CLEAR_COMMENTS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_POSTS_FAILED, 
  GET_POSTS_REQUEST, 
  GET_POSTS_SUCCESS
} from "../actionTypes/main"
import { TMainActions } from "../actions/main";

export interface IComments {
  request: boolean,
  failed: boolean,
  error: string,
  data: Array<ICommentData>
}

export interface IPostsList {
  list: Array<IPostData>
  before: string,
  after: string,
  counter: number
}

export interface IPosts {
  request: boolean,
  failed: boolean,
  error: string,
  data: IPostsList
}

type TMainState = {
  posts: IPosts,
  modal: null | IPostData,
  comments: IComments
}

export const mainState = {
  posts: {
    request: false,
    failed: false,
    error: '',
    data: {
      list: [],
      before: '',
      after: '',
      counter: 0
    }
  },
  modal: null,
  comments: {
    request: false,
    failed: false,
    error: '',
    data: []
  }
}

export const mainStore: Reducer = (state: TMainState = mainState, action: TMainActions) => {
  switch(action.type){
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        posts: {
          ...state.posts,
          request: true
        },
      }
    }
    case GET_POSTS_FAILED: {
      return {
        ...state,
        posts: {
          ...state.posts,
          request: false,
          failed: true,
          error: action.payload
        }
      }
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: {
          request: false,
          failed: false,
          error: '',
          data: {
            before: action.payload.before,
            after: action.payload.after,
            list: state.posts.data.list.length > 0
              ? state.posts.data.list.concat(action.payload.list)
              : action.payload.list
          }
        }
      }
    }
    case ADD_POST_MODAL: {
      return {
        ...state,
        modal: state.posts.data.list.find((el: IPostData) => action.payload === el.id)
      }
    }
    case CLEAR_COMMENTS: {
      return {
        ...state,
        comments: {
          ...state.comments,
          error: '',
          data: []
        }
      }
    }
    case GET_COMMENTS_REQUEST: {
      return {
        ...state,
        comments: {
          ...state.comments,
          request: true
        }
      }
    }
    case GET_COMMENTS_FAILED: {
      return {
        ...state,
        comments: {
          ...state.comments,
          request: false,
          failed: true,
          error: action.payload
        }
      }
    }
    case GET_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: {
          request: false,
          failed: false,
          error: '',
          data: action.payload
        }
      }
    }
    case CHANGE_CARMA: {
      return {
        ...state,
        posts: {
          ...state.posts,
          data: {
            ...state.posts.data,
            list: state.posts.data.list.map((el) => {
              if(el.id === action.payload.id) {
                el.likes = action.payload.carma
                return el;
              }
              return el;
            })
          }
        }
      }
    }
    default: {
      return state
    }
  }
}