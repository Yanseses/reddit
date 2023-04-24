import React, { FC } from "react";
import { useSelector } from "../../../services/hooks";
import { CommentList } from "./CommentList/CommentList";
import { Loader } from "../../Loader/Loader";

export const Comments: FC = () => {
  const comments = useSelector(store => store.main.comments.data);
  const request = useSelector(store => store.main.comments.request);
  const failed = useSelector(store => store.main.comments.failed);
  const error = useSelector(store => store.main.comments.error);

  return (
    <>
      <CommentList data={comments} />

      { request && (
        <Loader 
          text="Loading..." 
          position="center" 
          height="150px"/> 
        ) 
      }

      { !request && !failed && comments.length < 1 && (
        <Loader 
          text="Comment list is empty" 
          position="center" 
          height="inherit"/>
        ) 
      }

      { failed && error.length > 0 && (
          <Loader 
          text={error} 
          position="center" 
          height="inherit"/>
        ) 
      }
    </>
    )
}