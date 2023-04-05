import React, { FC } from "react";
import styles from './loader.module.css';

interface ILoader {
  text: string,
  position?: 'center',
  height: 'inherit' | string
}

export const Loader: FC<ILoader> = ({ text, position, height }) => {
  return (
    <div className={styles.loader} style={{ height: height }}>
      { position === 'center'
        ? (
          <div className={styles.loader__text}>
            { text }
          </div>
        ) : (
          text
        )
      }
    </div>  
  )
}