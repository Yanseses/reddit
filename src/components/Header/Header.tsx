import React, { FC } from "react";
import styles from './header.module.css';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';
import { SearchBlock } from './SearchBlock/SearchBlock'
import { SortBlock } from "./SortBlock/SortBlock";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  )
}