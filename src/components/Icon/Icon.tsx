import React, { FC } from "react";
import styles from './icon.module.css'
import { 
  MenuIcon, 
  SaveIcon, 
  ShareIcon, 
  CommentsIcon, 
  ComplainIcon, 
  HideIcon, 
  CarmaIcon, 
  AnonIcon, 
  CrossIcon,
  SearchIcon,
  MessageIcon,
  BestIcon,
  ArrowIcon
} from "../icons";

export enum EIcons {
  menu = 'MenuIcon',
  comments = 'CommentsIcon',
  share = 'ShareIcon',
  hide = 'HideIcon',
  save = 'SaveIcon',
  complain = 'ComplainIcon',
  carma = 'CarmaIcon',
  anon = 'AnonIcon',
  cross = 'CrossIcon',
  search = 'SearchIcon',
  message = 'MessageIcon',
  best = 'BestIcon',
  arrow = 'ArrowIcon'
}

interface IIconsProps {
  name: EIcons
  color?: string;
  className?: string,
  width: number,
  height: number,
  onClick?: () => void
}

export const Icon: FC<IIconsProps> = ({ 
  name, 
  color = 'none', 
  className, 
  width, 
  height, 
  onClick }) => { 
  
  return (
    <span className={styles.icon} onClick={onClick}>
      <svg 
        width={width} 
        height={height}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        {getIconComponent(name)}
      </svg>
    </span>
  )
}

function getIconComponent(name: EIcons){
  switch(name){
    case EIcons.cross: return <CrossIcon />
    case EIcons.carma: return <CarmaIcon />
    case EIcons.menu: return <MenuIcon />
    case EIcons.comments: return <CommentsIcon />
    case EIcons.share: return <ShareIcon />
    case EIcons.hide: return <HideIcon />
    case EIcons.save: return <SaveIcon />
    case EIcons.complain: return <ComplainIcon />
    case EIcons.anon: return <AnonIcon />
    case EIcons.search: return <SearchIcon />
    case EIcons.message: return <MessageIcon />
    case EIcons.best: return <BestIcon />
    case EIcons.arrow: return <ArrowIcon />
  }
}