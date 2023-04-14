import React from "react";
import styles from './threadTitle.module.css';
import { Text } from "../../Text/Text";

export function ThreadTitle(){
  return (
    <Text As='h1' size={28} className={styles.heading}>
      Discussions
    </Text>
  )
}