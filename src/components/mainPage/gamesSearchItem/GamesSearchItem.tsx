import React from 'react'

import styles from './GamesSearchItem.module.css'

export const GamesSearchItem: React.FC<IGamesSearchItem> = ({ img, category, rtp, style, provider }) => {
  return (
    <div className={styles.gamesSearchItem}>
      <img src={img} alt={category} />
      
      <div>
        <p className={styles.text}>{category}</p>
        {/* <p className={styles.text}>RTP: <span>{rtp}</span></p> */}
        
        <div className={styles.label}>
          <p>{style}</p>
        </div>

        <div className={styles.label}>
          <p>{provider}</p>
        </div>
      </div>

    </div>
  )
}