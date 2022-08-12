import React from 'react'

import FullscreenIcon from './assets/fullscreen.svg'
import CloseIcon from './assets/close.svg'
import GameImage from './assets/game.png'

import styles from './Game.module.css'

interface IProps {
  title: string;
}

export const Game: React.FC<IProps> = ({ title }) => {
  return (
    <div className={styles.game}>
      
      <div className={styles.gameHeader}>
        
        <p>{title}</p>
        
        <div className={styles.controls}>
          
          <button>
            <img src={FullscreenIcon} alt="Fullscreen" />
          </button>

          <button>
            <img src={CloseIcon} alt="Close" />
          </button>
        
        </div>

      </div>

      <img className={styles.gameFrame} src={GameImage} alt="Game" />
      {/* <iframe src="" frameborder="0"></iframe> */}
    </div>
  )
}