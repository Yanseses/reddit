import { RefObject } from "react";

export function getPostition(ref: RefObject<HTMLElement>){
  const windowWidhth = window.screen.width;
  const positionTop = ref.current?.getBoundingClientRect().top || 0;
  const menuHeight = ref.current?.getBoundingClientRect().height || 0;

  if(windowWidhth >= 1024){
    const positionLeft = ref.current?.getBoundingClientRect().left || 0;
    const menuWidth = ref.current?.getBoundingClientRect().width || 0;
    const x = positionLeft - (menuWidth * 2);
    const y = Math.floor(positionTop) >= 815 
      ? positionTop - (menuHeight * 7.5)
      : positionTop + (menuHeight * 1.5);
    return { left: x, top: y }
  }
  const x = 19
  const y = positionTop + (menuHeight * 1.5);
  return { right: x, top: y }
}