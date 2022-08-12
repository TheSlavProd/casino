import React from 'react'
import cx from 'classnames'

import SearchIcon from './assets/search.svg'

import styles from './Search.module.css'

interface IProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classnames?: string;
}

export const Search: React.FC<IProps> = ({ classnames, value, onChange }) => {
  return (
    <div className={cx([styles.search, classnames])}>

      <div className={styles.searchBar}>
        <img className={styles.searchIcon} src={SearchIcon} alt="Search" />
        <input className={styles.searchInput} type="text" value={value} onChange={onChange} placeholder="Game Providers Collections" />
        <button className={styles.searchButton}>Search</button>
      </div>

    </div>
  )
}