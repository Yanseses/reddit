import React, { FC, SyntheticEvent, useState } from "react"
import { Icon, EIcons } from "../../Icon/Icon";
import styles from './carmaCounter.module.css';

interface ICarmaProps {
  counter?: number,
  id: string,
  likes?: null | boolean
}

export const CarmaCounter: FC<ICarmaProps> = ({ counter, id, likes = null }) => {
  const [ carma, setCarma ] = useState(likes);
  const handleUpCarma = (e: SyntheticEvent) => {
    e.stopPropagation()

    // Add post request to change carma and change state comments/posts
    carma === true ? setCarma(null) : setCarma(true)
  }

  const handleDownCarma = (e: SyntheticEvent) => {
    e.stopPropagation()

    // Add post request to change carma and change state comments/posts
    carma === false ? setCarma(null) : setCarma(false)
  }
  
  return (
    <div className={styles.karmaCounter}>
      <button 
        className={`${styles.up} ${carma === true ? styles.up__active : ''}`} 
        onClick={handleUpCarma}>
        <Icon name={EIcons.carma} width={19} height={10}/>
      </button>
      { counter &&
        <span className={styles.karmaValue}>
          { counter > 1000 
            ? counter > 1000000 
              ? (counter / 1000000).toFixed(1) + 'M'
              : (counter / 1000).toFixed(1) + 'K'
            : counter }
        </span>
      }
      <button 
        className={`${styles.down} ${carma === false ? styles.down__active : ''}`} 
        onClick={handleDownCarma}>
        <Icon name={EIcons.carma} width={19} height={10} className={styles.down}/>
      </button>
    </div>
  )
}