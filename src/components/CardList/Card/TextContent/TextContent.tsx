import React, { FC } from "react";
import styles from './textContent.module.css';
import { Author } from "./Author/Author";
import { CreateAt } from "./CreateAt/CreateAt";
import { Title } from "./Title/Title";

interface ITextContentProps {
  author: string;
  avatar: string;
  created: number;
  title: string
}

export const TextContent: FC<ITextContentProps> = ({ author, avatar, created, title }) => {  
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <Author author={author} avatar={avatar}/>
        <CreateAt created={created}/>
      </div>
      <Title title={title}/>
    </div> 
  )
}