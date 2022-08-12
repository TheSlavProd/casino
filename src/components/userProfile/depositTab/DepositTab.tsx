import React from 'react'

import { Input, TransparentSelect } from 'baseComponents'

import RocketImage from './assets/rocket.png'
import QRImage from './assets/qr.png'
import WalletConnectIcon from './assets/walletconnect.svg'
import MetamaskIcon from './assets/metamask.svg'

import styles from './DepositTab.module.css'

interface IProps {

}

const options: IOption[] = [
  { label: 'Tron (TRC 20)', value: 'Tron (TRC 20)' },
  { label: 'Etherium (ERC 20)', value: 'Etherium (ERC 20)' },
  { label: 'Avax - C-Chain', value: 'Avax - C-Chain' },
  { label: 'Polygin', value: 'Polygin' },
  { label: 'BNB Smart Chain (BEP 20)', value: 'BNB Smart Chain (BEP 20)' },
  { label: 'BNB Beacon Chain (BEP2)', value: 'BNB Beacon Chain (BEP2)' },
  { label: 'Solana', value: 'Solana' },
]

export const DepositTab: React.FC<IProps> = () => {
  return (
    <div className={styles.depositTab}>

      <Input type="text" value="" onChange={() => {}} />

      <div className={styles.betBanner}>
        <div className={styles.bet}>
          <p>Bet 100$ </p>
          <p>≈0.04320000 eth</p>
        </div>
        <img src={RocketImage} alt="Rocket" />
        <div className={styles.firstDeposit}>
          <p>First deposit bonus</p>
          <p>+100$</p>
        </div>
      </div>

      <TransparentSelect className={styles.chooseNetwork} options={options} label="Choose Network" />

      <Input 
        copy 
        disabled 
        type="text" 
        onChange={() => {}}
        value='0x5B4fB32bb1D2f727Ed5a1a8d365606A7a3ac53F8' 
      />
      
      <img className={styles.qrImage} src={QRImage} alt="QR" />
      
      <div className={styles.notice}>
        <p>NOTICE: Send only ETH to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported (Contact us).</p>
      </div>
      <button className={styles.depositButton}>Deposit</button>
      
      <div className={styles.depositWith}>
        <p>Deposit With</p>
        <div className={styles.depositIcon}>
          <img src={MetamaskIcon} alt="Metamask" />
        </div>
        <div className={styles.depositIcon}>
          <img src={WalletConnectIcon} alt="Walletconnect" />
        </div>
      </div>

    </div>
  )
}