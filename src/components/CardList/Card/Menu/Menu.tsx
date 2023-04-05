import React, { FC } from "react";
import styles from './menu.module.css';
import { Dropdown } from "../../../Dropdown/Dropdown";
import { Controls } from "../../../Controls/Controls";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Text, EColors } from "../../../Text/Text";
import { Icon, EIcons } from "../../../Icon/Icon";
import { IItem } from "../../../../utils/types";

export const Menu: FC = () => {
  const handleItemClick = (event: MouseEvent) => {
    event.stopPropagation();
    
    console.log(event)
  }

  const MENU_LIST = [
    { As: 'li' as const, text: 'Comments', nameIcon: EIcons.comments, onClick: handleItemClick },
    { As: 'li' as const, text: 'Share', nameIcon: EIcons.share, onClick: handleItemClick },
    { As: 'li' as const, text: 'Hide', nameIcon: EIcons.hide, onClick: handleItemClick },
    { As: 'li' as const, text: 'Save', nameIcon: EIcons.save, onClick: handleItemClick },
    { As: 'li' as const, text: 'Report', nameIcon: EIcons.complain, onClick: handleItemClick },
  ].map(generateId) as IItem[];

  return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuBtn}>
          <Icon name={EIcons.menu} width={5} height={20} />
        </button>
      }>
        <Controls list={MENU_LIST} listType={'menu'}/>
        <button className={styles.closeBtn}>
          <Text size={14} mobileSize={12} color={EColors.grey66}>
            Close
          </Text>
        </button>
      </Dropdown>
    </div>
  )
}