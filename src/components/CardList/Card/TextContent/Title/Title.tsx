import React, { FC } from "react";
import styles from './title.module.css';

interface ITitleProps {
  title: string
}

export const Title: FC<ITitleProps> = ({ title }) => {
  return (
    <h2 className={styles.title} >
      <a href="#">{title}</a>
    </h2>
  )
}