import React, { FC } from "react";
import { getCorrectForm } from "../../../../../utils/js/getCorrectForm";
import styles from './createAt.module.css';

interface ICreateAt {
  created: number
}

export const CreateAt: FC<ICreateAt> = ({ created }) => {
  const createdHoursAgo = Math.floor((Math.floor(Date.now() / 1000) - created) / 60 / 60);
  const stringHoursAgo = getCorrectForm(['hour', 'hour', 'hours'], createdHoursAgo);

  return (
    <span className={styles.createAt}>
      <span className={styles.publishedLabel}>published </span> 
      {`${createdHoursAgo} ${stringHoursAgo} ago`}
    </span>
  )
}