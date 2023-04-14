import { EIcons } from "../components/Icon/Icon"
import { EColors } from "../components/Text/Text"

export interface IPostData {
  id: string,
  author: string,
  avatar: string,
  banner: string,
  commentsCount: number,
  upvoteRatio: number,
  content: string,
  score: number,
  title: string,
  subreddit: string,
  created: number,
  likes: null | boolean
}

export interface IUserData {
  name?: string,
  iconImg?: string,
  messages: number
}

export interface ICommentData {
  id: string,
  author: string,
  title: string,
  created: number,
  replies?: Array<ICommentData>,
  likes: null | boolean
}

export interface IItem {
  As?: 'a' | 'li' | 'div' | 'button',
  id: string,
  text: string,
  onClick: (event: any) => void,
  widthIcon?: number,
  heightIcon?: number,
  nameIcon: EIcons,
  className?: string,
  href?: string,
  textColor?: EColors
}