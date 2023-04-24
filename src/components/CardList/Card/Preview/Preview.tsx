import React, { FC } from "react";
import styles from './preview.module.css'

interface IBannerProps {
  banner: string
}

export const Preview: FC<IBannerProps> = (props) => {
  return (
    <div className={styles.preview}>
      { props.banner.length < 15
        ? <img src="https://external-preview.redd.it/5kh5OreeLd85QsqYO1Xz_4XSLYwZntfjqou-8fyBFoE.png?auto=webp&s=dbdabd04c399ce9c761ff899f5d38656d1de87c2" alt="Post preview" className={styles.previewImg} />
        : <img src={props.banner} alt="Post Preview" className={styles.previewImg} />
      }
    </div>
  )
}