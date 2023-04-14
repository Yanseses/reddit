import React, { FC } from "react";
import styles from './postContent.module.css'
import { Text } from "../../Text/Text";
import { generateId } from "../../../utils/react/generateRandomIndex";

interface IPostContent {
  value: string
}

export const PostContent: FC<IPostContent> = ({ value }) => {
  const postData = value
    .split('\n')
    .filter((el: string) => el.length > 1);
  const description = postData
    .map((text: string) => ({text: text}))
    .map((obj) => generateId(obj));

  return (
    <div className={styles.body}>
      { value.includes('http') && value.startsWith('http')
        ? value.includes('jpg') || value.includes('gif') || value.includes('png') || value.includes('gifv')
          ? <img src={value} alt="" className={styles.preview} />
          : <a href={value} target="_blank" className={styles.link}>Click to see</a>
        : <article className={styles.article}>
          { description.map((el: any) => 
            <Text key={el.id} size={14} mobileSize={10} As={'p'}>
              {el.text}
            </Text>
            ) 
          }
        </article>
      }
    </div>
  )
}