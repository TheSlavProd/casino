import React, { useState } from 'react'
import cx from 'classnames'

import { TransparentSelect, CryptoInput } from 'baseComponents'

import VerificationIcon from './assets/verification.svg'
import VerificationDisabledIcon from './assets/verification-disabled.svg'
import FoxIcon from './assets/fox.svg'
import WaveIcon from './assets/wave.svg'

import styles from './FiatTab.module.css'

const options: IOption[] = [
  { label: 'Bank Card (VISA)', value: 'Bank Card (VISA)' },
  { label: 'P2P Trading', value: 'P2P Trading' },
  { label: 'QIWI', value: 'qiwi' },
  { label: 'Verified', value: 'Verified' },
]

interface IProps {
  depositTab: boolean;
}

export const FiatTab: React.FC<IProps> = ({ depositTab }) => {
  const [withdrawAmount, setWithdrawAmount] = useState<number>(15)

  const handleWithdrawAmountChange = (amount: number) => setWithdrawAmount(amount)
  const verified = true

  return (
    <div className={styles.fiatTab}>
      
      <div className={styles.balanceAndVerification}>
        <div className={styles.cashableBalance}>
          <p>Cashable Balance</p>
          <p>23322.314 $</p>
        </div>

        <div 
          className={cx({
            [styles.verification]: true,
            [styles.noVerification]: !verified
          })}
        >
          <img src={verified ? VerificationIcon : VerificationDisabledIcon} alt="Verification" />
          <p 
            className={cx({
              [styles.verifiedText]: verified,
              [styles.unverifiedText]: !verified,
            })}
          >
            {verified ? "Your Account Is Verified" : "Your Account Not verified"}
          </p>
        </div>
      </div>

      <div className={styles.withdrawAndNotice}>
        
        <div className={styles.data}>
          {!depositTab && (
            <TransparentSelect className={styles.cardSelect} optionsClassName={styles.selectOptions} options={options} label="Withdraw With" />
          )} 
          <CryptoInput 
            value={withdrawAmount}
            className={styles.cryptoInput}
            onChange={handleWithdrawAmountChange} 
            label="Withdraw Amount" 
            minValue={15} 
            currency="USDT TRC20" 
          />
        </div>

        <div className={styles.notice}>
          <p>NOTICE: Send only ETH to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).</p>
        </div>

      </div>

      <div className={cx({
        [styles.submitArea]: true,
        [styles.depositArea]: depositTab,
      })}>
        <button>
          {depositTab ? "Deposit" : "Withdraw"}
        </button>

        {depositTab && (
          <div className={styles.depositWith}>
            <p>Deposit With</p>
            <div className={styles.depositIcon}>
              <img src={FoxIcon} alt="Metamask" />
            </div>
            <div className={styles.depositIcon}>
              <img src={WaveIcon} alt="WalletConnect" />
            </div>
          </div>
        )}

      </div>

    </div>
  )
}