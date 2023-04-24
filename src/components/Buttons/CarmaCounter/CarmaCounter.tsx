import React, { FC, SyntheticEvent, useState } from "react"
import { Icon, EIcons } from "../../Icon/Icon";
import styles from './carmaCounter.module.css';
import { useDispatch } from "../../../services/hooks";
import { changeCarma } from "../../../services/actions/main";

interface ICarmaProps {
  counter?: number,
  id: string,
  likes?: null | boolean
}

export const CarmaCounter: FC<ICarmaProps> = ({ counter, id, likes = null }) => {
  const dispatch = useDispatch();
  const [ carma, setCarma ] = useState<boolean | null>(likes);

  const handleUpCarma = (e: SyntheticEvent) => {
    e.stopPropagation()

    const like = carma === true ? null : carma === false ? null : true;
    setCarma(like)
    dispatch(changeCarma(id, like))
  }

  const handleDownCarma = (e: SyntheticEvent) => {
    e.stopPropagation()

    const like = carma === false ? null : carma === true ? null : false;
    setCarma(like)
    dispatch(changeCarma(id, like))
  }
  
  return (
    <div className={styles.carmaCounter}>
      <button 
        className={`${styles.carmaCounter__upBtn} ${carma === true ? styles.up__active : ''}`} 
        onClick={handleUpCarma}>
        <Icon name={EIcons.carma} width={19} height={10}/>
      </button>
      { counter &&
        <span className={styles.carmaCounter__value}>
          { counter > 1000 
            ? counter > 1000000 
              ? (counter / 1000000).toFixed(1) + 'M'
              : (counter / 1000).toFixed(1) + 'K'
            : counter }
        </span>
      }
      <button 
        className={`${styles.carmaCounter__downBtn} ${carma === false ? styles.down__active : ''}`} 
        onClick={handleDownCarma}>
        <Icon name={EIcons.carma} width={19} height={10} className={styles.down}/>
      </button>
    </div>
  )
}