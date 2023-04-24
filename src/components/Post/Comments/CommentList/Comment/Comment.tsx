import React, { FC, useState } from "react";
import { generateId } from "../../../../../utils/react/generateRandomIndex";
import { CarmaCounter } from "../../../../Buttons";
import { CreateAt } from "../../../../CardList/Card/TextContent/CreateAt/CreateAt";
import { Author } from "../../../../CardList/Card/TextContent/Author/Author";
import { Controls } from "../../../../Controls/Controls";
import { EIcons } from "../../../../Icon/Icon";
import { Text } from "../../../../Text/Text";
import { CommentList } from "../CommentList";
import styles from './comment.module.css';
import { ICommentData, IItem } from "../../../../../utils/types";
import { CommentForm } from "../../../CommentForm/CommentForm";

export const Comment: FC<ICommentData> = ({ author, created, id, title, replies, likes }) => {
  const [isFormView, setIsFormView] = useState(false);

  const handleAnswer = () => {
    setIsFormView(!isFormView)
  }
 
  const COMMENT_CONTROLS = [
    { As: 'li' as const, text: 'Reply', nameIcon: EIcons.comments, onClick: handleAnswer },
    { As: 'li' as const, text: 'Share', nameIcon: EIcons.share },
    { As: 'li' as const, text: 'Save', nameIcon: EIcons.save }
  ].map(generateId) as IItem[];

  return (
    <li id={id} className={styles.comment}>
      <div className={styles.comment__head}>
        <div className={styles.comment__counter}>
          <CarmaCounter id={id} likes={likes}/>
        </div>
        <Author author={author} avatar={''}/>
        <CreateAt created={created}/>
      </div>
      <Text As={'p'} size={14} className={styles.comment__text}>{title}</Text>
      <Controls list={COMMENT_CONTROLS} listType={'controls'}/>

      { isFormView && ( <CommentForm author={author}/> ) }

      { replies?.[0] && ( <CommentList data={replies} /> ) }
    </li>
  )
}