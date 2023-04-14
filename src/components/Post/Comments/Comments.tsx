import React, { FC } from "react";
import { useSelector } from "../../../services/hooks";
import { CommentList } from "./CommentList/CommentList";
import { Loader } from "../../Loader/Loader";

export const Comments: FC = () => {
  const comments = useSelector(store => store.main.comments);
  const commentsRequest = useSelector(store => store.main.commentsRequest);
  
  return (
    <>
      <CommentList data={comments} />

      { commentsRequest && (
        <Loader 
          text="Loading..." 
          position="center" 
          height="150px"/> 
        ) 
      }

      { !commentsRequest && comments.length < 1 && (
        <Loader 
          text="Comment list is empty" 
          position="center" 
          height="inherit"/>
        ) 
      }
    </>
    )
}