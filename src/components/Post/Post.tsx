import React, { FC, useEffect, useRef } from "react";
import styles from './post.module.css';
import ReactDOM  from "react-dom";
import { CarmaCounter } from "../Buttons";
import { TextContent } from "../CardList/Card/TextContent/TextContent";
import { IItem } from "../../utils/types";
import { EIcons, Icon } from "../Icon/Icon";
import { CommentForm } from "./CommentForm/CommentForm";
import { CommentList } from "./CommentList/CommentList";
import { PostContent } from "./PostContent/PostContent";
import { generateId } from "../../utils/react/generateRandomIndex";
import { Controls } from "../Controls/Controls";
import { getCorrectForm } from "../../utils/js/getCorrectForm";
import { Upvote } from "./Upvote/Upvote";
import { PostOverlay } from "./PostOverlay/PostOverlay";
import { useDispatch, useSelector } from "../../services/hooks";
import { getComments } from "../../services/thunks/main";
import { useNavigate } from "react-router";
import { clearComments } from "../../services/actions/main";

export const Post: FC = () => {
  const navigate = useNavigate();
  const node = document.querySelector('#post');
  const postRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const token = useSelector(store => store.auth.token);
  const postData = useSelector(store => store.main.postModal);  
  const comments = useSelector(store => store.main.comments);

  const handleHidePost = () => {
    console.log('Hide Post')
  }

  const handleSharePost = () => {
    console.log('Share Post')
  }

  const handleSavePost = () => {
    console.log('Save Post')
  }

  const handleReportPost = () => {
    console.log('Report Post')
  }

  const POST_CONTROLS = [
    { 
      As: 'li' as const, 
      text: `
        ${postData.commentsCount} 
        ${getCorrectForm(['comment', 'comments', 'comments'], postData.commentsCount)}
      `, 
      nameIcon: EIcons.comments
    },
    { 
      As: 'li' as const, 
      text: 'Share', 
      nameIcon: EIcons.share,
      onClick: handleSharePost
    },
    { 
      As: 'li' as const, 
      text: 'Hide', 
      nameIcon: EIcons.hide,
      onClick: handleHidePost
    },
    { 
      As: 'li' as const, 
      text: 'Save', 
      nameIcon: EIcons.save,
      onClick: handleSavePost
    },
    { 
      As: 'li' as const, 
      text: 'Report', 
      nameIcon: EIcons.complain,
      onClick: handleReportPost
    }
  ].map(generateId) as IItem[];

  useEffect(() => {
    if(postData)
    dispatch(getComments(postData.id, token));
  }, [ dispatch, postData, token ])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClose = () => {
    navigate('/best')
    dispatch(clearComments())
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if(event.target === postRef.current){
        handleClose()
      }
    }

    const handleClickEscape = (event: KeyboardEvent) => {
      if(event.key === 'Escape'){
        handleClose()
      }
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClickEscape);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClickEscape);
    }
  }, [handleClose]);

  if(!node) return null;

  return ReactDOM.createPortal((
    <PostOverlay postRef={postRef}>
      { postData && (
        <div className={styles.modal}>
          <CarmaCounter 
            counter={postData.score} 
            id={postData.id} 
            likes={postData.likes}/>

          <TextContent 
            author={postData.author}
            title={postData.title}
            created={postData.created}
            avatar={postData.avatar} />

          <Icon 
            className={styles.cross} 
            name={EIcons.cross} 
            height={21} 
            width={21} 
            onClick={handleClose}
            />
        
          <div className={styles.main}>
            <PostContent value={postData.content}/>
            <div className={styles.controls}>
              <Controls 
                list={POST_CONTROLS} 
                listType={'controls'}/>
              <Upvote upvote={postData.upvoteRatio} />
            </div>
            <CommentForm />
            <CommentList data={comments}/>
          </div>
        </div>
        ) 
      }
    </PostOverlay>
    ), node)
}