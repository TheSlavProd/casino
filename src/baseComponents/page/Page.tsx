import React from 'react'

import { Header, SideMenu } from 'baseComponents'

import styles from './Page.module.css'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
}

export const Page: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <SideMenu />
      <div className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  )
}