import React, { FC } from "react";
import styles from './sortBlock.module.css';
import { EIcons, Icon } from "../../Icon/Icon";
import { EColors, Text } from "../../Text/Text";

interface ISortBlock {
  auth?: boolean
}

export const SortBlock: FC<ISortBlock> = ({ auth }) => {
  return (
    <div className={styles.sortBlock}>
      <Icon name={EIcons.best} width={14} height={16} />
      <Text As="p" size={20} color={EColors.orange} mobileSize={12}>
        The Best
      </Text>
      <Icon name={EIcons.arrow} width={14} height={8} />
    </div>
  )
}