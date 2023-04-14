import React, { FC } from "react";
import styles from './commentList.module.css';
import { Comment } from "./Comment/Comment";
import { ICommentData } from "../../../../utils/types";

export interface ICommentList {
  data: ICommentData[]
}

export const CommentList: FC<ICommentList> = ({ data }) => {
  return (
    <>
      <ul className={styles.commentList}>
        { data && data.map((comment: ICommentData) => (
            <Comment key={comment.id} {...comment}/>
            )
          ) 
        }
      </ul>
    </>
  )
}