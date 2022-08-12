import React from 'react'
import cx from 'classnames'
import { NavLink } from 'react-router-dom'

import styles from './SideMenuItem.module.css'
import { useAppDispatch } from 'utils'
import { closeMenu } from 'store/uiSlice'

export const SideMenuItem: React.FC<ISideMenuItem> = ({ img, label, path }) => {
  const dispatch = useAppDispatch()

  const handleClick = () => dispatch(closeMenu())
  
  return (
    <NavLink
      onClick={handleClick}
      className={
        ({ isActive }) => cx({
          [styles.itemLink]: true,
          [styles.activeItemLink]: isActive,
        })} 
      to={path}
    >
      <div 
        className={styles.sideMenuItem}>
        <img className={styles.icon} src={img} alt={label} />
        <p className={styles.label}>{label}</p>
      </div>
    </NavLink>
  )
}