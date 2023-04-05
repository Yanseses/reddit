import React, { FC } from "react"
import styles from './uploadBtn.module.css';

interface IUploadBtn {
  onClick?: () => void;
}

export const UploadBtn: FC<IUploadBtn> = ({ onClick }) => {
  return (
    <button className={styles.uploadBtn} onClick={onClick}>
      Upload more
    </button>
    )
}