import React from 'react'
import cx from 'classnames'

import { setTheme, useAppDispatch, useAppSelector } from 'utils'
import { openMenu, closeMenu, selectActiveTheme } from 'store/uiSlice'

import { UserInfo } from 'baseComponents'

import LogoIcon from './assets/logo.svg'
import LogoIcon2 from './assets/logo.png'
import SlotsActiveIcon from './assets/slots-active.svg'
import LiveDisableIcon from './assets/live-disable.svg'
import CaretIcon from './assets/carret-up.svg'
import MenuButtonIcon from './assets/menu-button.svg'

import styles from './Header.module.css'

export const Header: React.FC = () => {
  const sideMenuIsOpen = useAppSelector(state => state.ui.sideMenuIsOpen)
  const dispatch = useAppDispatch()
  const activeTheme = useAppSelector((state) => state.ui.activeTheme)

  const onCategoryButtonClick = (theme: 'PURPLE' | 'GREEN') => {
    setTheme(theme)
    dispatch(selectActiveTheme(theme))
  } 

  const toggleMenu = () => {
    if (sideMenuIsOpen) {
      dispatch(closeMenu())
    } else {
      dispatch(openMenu())
    }
  } 

  return (
    <header className={styles.header}>

      <div className={styles.headerInfo}>

        <div className={styles.mobileLogo}>
          <img src={LogoIcon2} alt="Logo" />
          <h1>Casino <br /> online</h1>
        </div>

        <div className={styles.currencyInfo}>
          
          <div className={styles.currency}>
            <p>BTC/BUSD</p>
            <div className={styles.percents}>
              <p>+0.81%</p>
              <img src={CaretIcon} alt="Growing" />
            </div>
          </div>
          
          <p className={styles.cost}>40,059.83 $</p>
        
        </div>

      </div>

      <div className={styles.headerControls}>

        <div className={styles.categoriesAndMenuButton}>

          <button onClick={toggleMenu} className={styles.menuButton}>
            <img 
              className={cx({
                [styles.menuButtonIcon]: true,
                [styles.menuButtonIconActive]: sideMenuIsOpen,
              })} 
              src={MenuButtonIcon} 
              alt="Menu Button" 
            />
          </button>

          <div className={styles.categories}>

            <button 
              className={cx({
                [styles.categoriesButton]: true,
                [styles.slotsButtonActive]: activeTheme === 'PURPLE',
              })}
              onClick={() => onCategoryButtonClick('PURPLE')}
            >
              <img src={SlotsActiveIcon} alt="Slots" />
              <span>Slots</span>
            </button>
            
            <button 
              className={cx({
                [styles.categoriesButton]: true,
                [styles.liveButtonActive]: activeTheme === 'GREEN',
              })}
              onClick={() => onCategoryButtonClick('GREEN')}
            >
              <img src={LiveDisableIcon} alt="Live" />
              <span>Live</span>
            </button>
            
          </div>
        
        </div>
        
        <img className={styles.logo} src={LogoIcon} alt="Logo" />
        
        <UserInfo />

      </div>

    </header>
  )
}