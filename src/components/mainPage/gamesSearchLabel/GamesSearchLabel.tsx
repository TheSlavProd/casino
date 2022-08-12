import React from 'react'

import CloseIcon from './assets/close.svg'

import styles from  './GamesSearchLabel.module.css'

interface IProps {
  text: string;
  onClose: () => void;
  withIcon?: boolean;
}

export const GamesSearchLabel: React.FC<IProps> = ({ text, onClose, withIcon = true }) => {
  
  const handleClick = () => {
    if (!withIcon) {
      onClose()
    }
  }

  return (
    <div onClick={handleClick} className={styles.gamesSearchLabel}>
      {withIcon && <img onClick={onClose} src={CloseIcon} alt="Close" />}
      <p>{text}</p>
    </div>
  )
}