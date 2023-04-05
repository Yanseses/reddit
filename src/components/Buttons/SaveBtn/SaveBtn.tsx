import React, { FC } from "react";
import styles from './saveBtn.module.css';
import { Icon, EIcons } from "../../Icon/Icon";

interface ISaveBtn {
  onClick?: () => void
}

export const SaveBtn: FC<ISaveBtn> = ({ onClick }) => {
  return (
    <button className={styles.saveBtn} onClick={onClick}>
      <Icon name={EIcons.save} width={14} height={14}/>
    </button>
  )
}