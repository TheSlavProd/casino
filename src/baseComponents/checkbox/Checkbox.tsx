import React from 'react'
import cx from 'classnames'

import CheckedIcon from './assets/checked.svg'

import styles from './Checkbox.module.css'

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  checked: boolean;
  onClick: () => void;
  className?: string;
}

export const Checkbox: React.FC<IProps> = ({ children, checked, onClick, className }) => {
  return (
    <div onClick={onClick} className={cx([styles.checkboxWrapper, className])}>
      <div className={styles.checkbox}>
        {checked && <img src={CheckedIcon} alt="Checked" />}
      </div>
      <p>{children}</p>
    </div>
  )
}