import React, { FC, PropsWithChildren, SyntheticEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { getPostition } from "../../utils/js/getPosition";
import styles from './dropdown.module.css';

interface IDropdownProps {
  button: React.ReactNode,
  isOpen?: boolean,
  onOpen?: () => void,
  onClose?: () => void
}

export const Dropdown: FC<PropsWithChildren<IDropdownProps>> = ({ 
  button, 
  children, 
  isOpen = false, 
  onClose = () => {}, 
  onOpen = () => {}
}) => {
  const [ position, setPosition ] = useState({});
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);
  const node = document.querySelector('#menu');

  useEffect(() => {
    setIsDropdownOpen(isOpen)
  }, [ isOpen ]);

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose()
  }, [ isDropdownOpen, onClose, onOpen ]);

  useEffect(() => {
    const getPos = getPostition(ref);
    setPosition(getPos);
  }, [ isDropdownOpen ]);

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();

    setIsDropdownOpen(!isDropdownOpen);
  }

  if(!node) return null;

  return (
    <div className={styles.container} ref={ref}>
      <div onClick={handleClick}>
        { button }
      </div>
      {isDropdownOpen && ReactDOM.createPortal((
        <div 
          className={styles.dropdownList} 
          onClick={() => setIsDropdownOpen(false)}
          style={position}
          >
          { children }
        </div>
      ), node)}
    </div>
  )
}