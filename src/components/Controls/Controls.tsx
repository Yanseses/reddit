import React, { FC } from "react";
import styles from './controls.module.css';
import { Icon } from "../Icon/Icon";
import { EColors, Text } from "../Text/Text";
import { IItem } from "../../utils/types";

interface IMenuItemListProps {
  list: IItem[],
  listType: 'controls' | 'menu'
}

export const Controls: FC<IMenuItemListProps> = ({ list, listType }) => {
  return (
    <ul className={listType === 'menu' 
      ? styles.menuList 
      : styles.controlsList}>
      { list.map((
        {
          As = 'div',
          text, 
          onClick,
          id, 
          href, 
          nameIcon,
          heightIcon = 16,
          widthIcon = 16,
          textColor = EColors.grey99
        }) => (
        <As 
          className={listType === 'menu' 
            ? styles.menuItem 
            : styles.controlsItem} 
          key={id} 
          href={href} 
          onClick={onClick}>
          <Icon name={nameIcon} height={heightIcon} width={widthIcon}/>
          <Text size={14} color={textColor}>{text}</Text>
        </As>
      )) }
    </ul>
  )
}