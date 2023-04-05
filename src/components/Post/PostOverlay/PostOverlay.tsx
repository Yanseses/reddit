import React, { FC, LegacyRef, PropsWithChildren } from "react";
import styles from './postOverlay.module.css';

interface IPostOverlay {
  postRef?: LegacyRef<HTMLElement>
}

export const PostOverlay: FC<PropsWithChildren<IPostOverlay>> = ({ children, postRef }) => {
  return (
    <section className={styles.postOverlay} ref={postRef}>
      { children }
    </section>
  )
}