import React, { FC } from "react";
import styles from './searchBlock.module.css';
import { UserBlock } from "./UserBlock/UserBlock";

export const SearchBlock: FC = () => {  
  return (
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
  );
}