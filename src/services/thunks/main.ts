import axios from "axios"
import { 
  getCommentsFailed, 
  getCommentsRequest, 
  getCommentsSucces, 
  getPostsFailed, 
  getPostsRequest, 
  getPostsSuccess
} from "../actions/main"
import { API_URL } from "../../utils/constants";
import { AppDispatch } from "../types/types"
import { getPostCommentList } from "../../utils/js/getPostCommentList";
import { store } from '../../App';
import { IPostsList } from "../reducers/main";

export function getPosts(token: string){
  return function(dispatch: AppDispatch){
    dispatch(getPostsRequest())
    axios.get(API_URL + '/best.json?sr_detail=true', {
      headers: { 
        Authorization: `bearer ` + token
      },
      params: {
        after: store.getState().main.posts.data.after
      }
    }).then(req => {
      if(req && req.status === 200){
        const data: IPostsList = {
          before: req.data.data.before,
          after: req.data.data.after,
          list: req.data.data.children.map((el: any) => ({
            id: el.data.id, 
            subreddit: el.data.subreddit,
            author: el.data.author, 
            title: el.data.title, 
            banner: el.data.thumbnail, 
            avatar: el.data.sr_detail.icon_img,
            content: el.data.selftext ? el.data.selftext : el.data.url,
            score: el.data.score,
            commentsCount: el.data.num_comments,
            upvoteRatio: el.data.upvote_ratio,
            created: el.data.created,
            likes: el.data.likes
          })),
          counter: store.getState().main.posts.data.counter + 1
        }
        dispatch(getPostsSuccess(data))
      } else {
        return Promise.reject('Error: ' + req.statusText)
      }
    }).catch(err => {
      console.log(err)
      dispatch(getPostsFailed(err))
    })
  }
}

export function getComments(id: string, token: string){
  return function(dispatch: AppDispatch){
    dispatch(getCommentsRequest())
    axios.get(API_URL + `/comments/${id}`, {
        headers: { Authorization: 'bearer ' + token }
      }).then((req) => {
      if(req && req.status === 200){
        if(req.data[1].data){
          const postComments = getPostCommentList(req.data[1].data.children);
          dispatch(getCommentsSucces(postComments))
        } else {
          return Promise.reject('You are not authorized')
        }
      } else {
        return Promise.reject('Error: ' + req.statusText)
      }
    }).catch((err) => {
      console.log(err)
      dispatch(getCommentsFailed(err))
    })
  }
}