import React, { useState } from 'react'
import cx from 'classnames'

import { FiatTab, CryptoTab } from 'components/userProfile'

import styles from './DepositAndWithdrawTab.module.css'

const tabs = ['Fiat', 'Crypto']

interface IProps {
  depositTab: boolean;
}

export const DepositAndWithdrawTab: React.FC<IProps> = ({ depositTab }) => {
  return (
    <div className={styles.widthdrawTab}>
      <DepositAndWithdrawWindow>
        <FiatTab depositTab={depositTab} />
        <CryptoTab depositTab={depositTab} />
      </DepositAndWithdrawWindow>
    </div>
  )
}

interface IDepositAndWindowProps {
  children: React.ReactNode | React.ReactNode[]
}

const DepositAndWithdrawWindow: React.FC<IDepositAndWindowProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const onTabClick = (tab: number) => setActiveTab(tab)
  const activeChildren = React.Children.toArray(children)[activeTab]

  return (
    <div>
      
      <div className={styles.tabs}>
        {tabs.map((tab: string, index: number) => (
          <button 
            className={cx({
              [styles.tab]: true,
              [styles.activeTab]: activeTab === index,
            })} 
            onClick={() => onTabClick(index)} 
            key={tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeChildren}
    
    </div>
  )
}