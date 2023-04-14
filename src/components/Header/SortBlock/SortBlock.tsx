import React, { useState } from "react";
import styles from './sortBlock.module.css';
import { EIcons, Icon } from "../../Icon/Icon";
import { EColors, Text } from "../../Text/Text";

export function SortBlock(){
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  return (
    <div className={styles.sortBlock}>
      <Icon name={EIcons.best} width={14} height={16} />
      <Text As="p" size={20} color={EColors.orange}>The Best</Text>
      <Icon name={EIcons.arrow} width={14} height={8} />
    </div>
  )
}