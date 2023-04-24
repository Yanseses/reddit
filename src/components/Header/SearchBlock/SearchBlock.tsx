import React, { FC } from "react";
import styles from './searchBlock.module.css';
import { UserBlock } from "./UserBlock/UserBlock";
import { EIcons, Icon } from "../../Icon/Icon";
import { Text } from "../../Text/Text";
import { useSelector } from "../../../services/hooks";

export const SearchBlock: FC = () => {  
  const user = useSelector(store => store.auth.user.data);

  return (
    <div className={styles.searchBlock}>
      <div className={styles.searchBlock__messages}>
        <Text As='p' size={14} className={styles.searchBlock__messageCount}>{(user && user.message) || 0}</Text>
        <Icon name={EIcons.message} width={20} height={16} />
      </div>
      <div className={styles.searchBlock__inputWrapper}>
        <Icon name={EIcons.search} width={19} height={19} className={styles.searchBlock__searchIcon}/>
        <input type="text" placeholder="Search" className={styles.searchBlock__input}/>
      </div>
      <UserBlock />
    </div>
  );
}