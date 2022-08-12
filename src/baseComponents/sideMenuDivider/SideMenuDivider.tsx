import React from 'react'
import cx from 'classnames'

import styles from './SideMenuDivider.module.css'

interface IProps {
  classNames?: string;
}

export const SideMenuDivider: React.FC<IProps> = ({ classNames = '' }) => {
  return (
    <div className={cx(classNames, styles.divider)} />
  )
}