import React from 'react'

import { GamesSearchItem } from 'components/mainPage'

import styles from './GamesSearchItems.module.css'

interface IProps {
  items: IGamesSearchItem[];
}

export const GamesSearchItems: React.FC<IProps> = ({ items }) => {
  return (
    <div className={styles.gamesSearchItems}>
      {items.map((item: IGamesSearchItem, index: number) => (
        <GamesSearchItem key={index} {...item} />
      ))}
    </div>
  )
}