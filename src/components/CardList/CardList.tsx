import React, { FC, PropsWithChildren } from "react";
import styles from './cardList.module.css';

export const CardList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className={styles.cardList}>
      { children }
    </ul>
  )
}