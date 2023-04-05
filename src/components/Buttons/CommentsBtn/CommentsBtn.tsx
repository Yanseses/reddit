import React, { FC } from "react";
import styles from './commentsBtn.module.css';
import { Icon, EIcons } from "../../Icon/Icon";

interface ICommentsBtnProps {
  counter: number
}

export const CommentsBtn: FC<ICommentsBtnProps> = ({ counter }) => {
  return (
    <button className={styles.commentsBtn}>
      <Icon name={EIcons.comments} width={14} height={14}/>
      <span className={styles.commentsNumber}>{counter}</span>
    </button>
  )
}