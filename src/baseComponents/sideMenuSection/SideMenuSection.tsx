import React, { useState } from 'react'
import cx from 'classnames'
import { SideMenuItem, SideMenuDivider } from 'baseComponents'

import CaretIcon from './assets/caret.svg'

import styles from './SideMenuSection.module.css'

export const SideMenuSection: React.FC<ISideMenuSection> = ({ children, label, img }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  
  const toggleMenuSection = () => setIsOpen(!isOpen)

  return (
    <div className={styles.sideMenuSection}>

      <div className={styles.sideMenuItem}
        onClick={toggleMenuSection}
      >
        <img className={styles.icon} src={img} alt={label} />
        <p className={styles.label}>{label}</p>
        <button className={styles.toggleButton}>
          <img className={cx({
            [styles.toggleButtonIcon]: true,
            [styles.toggleButtonIconClosed]: !isOpen,
          })} src={CaretIcon} alt="Toggle section" />
        </button>
      </div>

      <div className={cx({
        [styles.subItems]: true,
        [styles.subItemsClosed]: !isOpen,
      })}>
        {children.map((menuItem, index: number) => (
          <SideMenuItem
            key={`${menuItem.path}-${index}`}
            label={menuItem.label}
            img={menuItem.img}
            path={menuItem.path}
          />
        ))}
      </div>

      <SideMenuDivider />

    </div>
  )
}