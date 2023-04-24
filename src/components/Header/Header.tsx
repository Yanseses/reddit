import React, { FC } from "react";
import styles from './header.module.css';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';
import { SearchBlock } from './SearchBlock/SearchBlock'
import { SortBlock } from "./SortBlock/SortBlock";
import { useSelector } from "../../services/hooks";

export const Header: FC = () => {
  const userAuth = useSelector(store => store.auth.user.authorized);

  return (
    <header className={styles.header}>
      <SearchBlock />
      <div className={styles.header__title}>
        <ThreadTitle />
        { !userAuth && (
          <SortBlock />
          ) 
        }
      </div>
    </header>
  )
}