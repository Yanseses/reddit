import React, { FC } from "react";
import styles from './author.module.css';

interface IAuthorProps {
  avatar: string,
  author: string
}

export const Author: FC<IAuthorProps> = ({ avatar, author }) => {
  return (
    <div className={styles.userLink}>
      {avatar
        ? <img src={avatar} className={styles.avatar} />
        : <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png" className={styles.avatar} />
      }
      <a href={`https://www.reddit.com/user/${author}/`} className={styles.userName}>{author}</a>
    </div>
  )
}