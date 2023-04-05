import React, { FC } from "react";
import styles from './shareBtn.module.css';
import { Icon, EIcons } from "../../Icon/Icon";

interface IShareBtn {
  onClick?: () => void;
}

export const ShareBtn: FC<IShareBtn> = ({ onClick }) => {
  return (
    <button className={styles.shareBtn} onClick={onClick}>
      <Icon name={EIcons.share} width={14} height={14}/>
    </button>
  )
}