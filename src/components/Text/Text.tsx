import React, { FC, PropsWithChildren } from "react";
import styles from './text.module.css';
import classNames from 'classnames'

export type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

interface ITextProps {
  As?: 'span' | 'h1'| 'h2' | 'h3' | 'h4' | 'p' | 'div';
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desctopSize?: TSizes;
  color?: EColors;
  className?: string
}

export const Text: FC<PropsWithChildren<ITextProps>> = ({ 
  As = 'span', 
  color = EColors.black, 
  children, 
  size, 
  mobileSize, 
  desctopSize, 
  tabletSize,
  className
}) => {

  const classes = classNames(
    className,
    styles.marg0,
    styles[`s${size}`],
    styles[color],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desctopSize}`]]: desctopSize },
  )

  return (
    <As className={classes}>
      {children}
    </As>
  )
}