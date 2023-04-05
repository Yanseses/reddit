import React, { FC } from "react";
import styles from './upvote.module.css';

interface IUpvote {
  upvote: number
}

export const Upvote: FC<IUpvote> = ({ upvote }) => {
  return (
    <p className={styles.upvote}>
      {`${upvote ? upvote * 100 : 0}% Upvoteds`}
    </p>
  )
}