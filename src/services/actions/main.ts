import { ICommentData } from "../../utils/types"
import { 
  ADD_POST_MODAL,
  GET_POSTS_FAILED,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_SUCCESS,
  CLEAR_COMMENTS,
  CHANGE_CARMA,
} from "../actionTypes/main"
import { IPosts } from "../reducers/main"

interface IGetPostsRequest {
  readonly type: typeof GET_POSTS_REQUEST
}

interface IGetPostsFailed {
  readonly type: typeof GET_POSTS_FAILED
}

interface IGetPostsSuccess {
  readonly type: typeof GET_POSTS_SUCCESS,
  payload: IPosts
}

interface IAddPostModal {
  readonly type: typeof ADD_POST_MODAL,
  payload: string
}

interface IClearComments {
  readonly type: typeof CLEAR_COMMENTS,
}

interface IGetCommentsRequest {
  readonly type: typeof GET_COMMENTS_REQUEST
}

interface IGetCommentsFailed {
  readonly type: typeof GET_COMMENTS_FAILED,
}

interface IGetCommentsSucces {
  readonly type: typeof GET_COMMENTS_SUCCESS
  payload: ICommentData
}

interface IChangeCarma {
  readonly type: typeof CHANGE_CARMA,
  payload: {
    id: string,
    carma: boolean | null
  }
}

export type TMainActions = IGetPostsRequest
  | IGetPostsFailed
  | IGetPostsSuccess
  | IAddPostModal
  | IGetCommentsRequest
  | IGetCommentsFailed
  | IGetCommentsSucces
  | IClearComments
  | IChangeCarma

export const getPostsRequest = (): IGetPostsRequest => {
  return {
    type: GET_POSTS_REQUEST
  }
}

export const getPostsFailed = (): IGetPostsFailed => {
  return {
    type: GET_POSTS_FAILED
  }
}

export const getPostsSuccess = (data: IPosts): IGetPostsSuccess => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: data
  }
}

export const addPostModal = (id: string): IAddPostModal => {
  return {
    type: ADD_POST_MODAL,
    payload: id
  }
}

export const clearComments = (): IClearComments => {
  return {
    type: CLEAR_COMMENTS
  }
}

export const getCommentsRequest = (): IGetCommentsRequest => {
  return {
    type: GET_COMMENTS_REQUEST
  }
}

export const getCommentsFailed = (): IGetCommentsFailed => {
  return {
    type: GET_COMMENTS_FAILED,
  }
}

export const getCommentsSucces = (comments: ICommentData): IGetCommentsSucces => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments
  }
}

export const changeCarma = (id: string, carma: boolean | null): IChangeCarma => {
  return {
    type: CHANGE_CARMA,
    payload: {
      id: id,
      carma: carma
    }
  }
}