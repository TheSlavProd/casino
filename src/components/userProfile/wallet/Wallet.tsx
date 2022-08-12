import React, { useState } from 'react'
import cx from 'classnames'

import { DepositAndWithdrawTab } from 'components/userProfile'

import styles from './Wallet.module.css'

const tabs = ['Deposit', 'Withdraw']

export const Wallet: React.FC = () => {
  return (
    <div className={styles.wallet}>
      <WalletWindow>
        <DepositAndWithdrawTab depositTab />
        <DepositAndWithdrawTab depositTab={false} />
      </WalletWindow>
    </div>
  )
}

interface IWalletWindowProps {
  children: React.ReactNode | React.ReactNode[]
}

const WalletWindow: React.FC<IWalletWindowProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const activeChildren = React.Children.toArray(children)[activeTab]

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab: string, index: number) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(index)} 
            className={cx({
              [styles.tab]: true,
              [styles.activeTab]: activeTab === index
            })}>
            {tab}
          </button>
        ))}
      </div>
      {activeChildren}
    </div>
  )
}