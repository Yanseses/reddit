import React, { FC } from "react";
import styles from './card.module.css';
import { TextContent } from "./TextContent/TextContent";
import { CarmaCounter, CommentsBtn, SaveBtn, ShareBtn } from "../../Buttons";
import { Menu } from "./Menu/Menu";
import { Preview } from "./Preview/Preview";
import { IPostData } from "../../../utils/types";
import { useDispatch } from "../../../services/hooks";
import { addPostModal } from "../../../services/actions/main";
import { useNavigate } from "react-router-dom";

export const Card: FC<IPostData> = ({ 
  id,
  banner, 
  score, 
  commentsCount, 
  author, 
  title, 
  avatar, 
  created 
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClick = () => {
    dispatch(addPostModal(id))
    navigate(`/best/${id}`)
  }
  
  return (
    <li className={styles.card} onClick={handleCartClick}>    
      <TextContent 
        author={author}
        title={title}
        created={created}
        avatar={avatar} />

      <Preview banner={banner}/>
      <Menu />
      <div className={styles.controls}>
        <CarmaCounter counter={score} id={id}/>
        <CommentsBtn counter={commentsCount}/>
        <div className={styles.actions}>
          <ShareBtn />
          <SaveBtn />
        </div>
      </div>
    </li>
  )
}