import React, { useState } from 'react'

import { Input, TransparentSelect } from 'baseComponents'

import FoxIcon from 'components/userProfile/fiatTab/assets/fox.svg'
import WaveIcon from 'components/userProfile/fiatTab/assets/wave.svg'
import QRImage from './assets/qr.png'
import RocketImage from './assets/rocket.png'

import styles from './CryptoTab.module.css'


const options: IOption[] = [
  { label: 'Tron (TRC 20)', value: 'Tron (TRC 20)' },
  { label: 'Etherium (ERC 20)', value: 'Etherium (ERC 20)' },
  { label: 'Avax - C-Chain', value: 'Avax - C-Chain' },
  { label: 'Polygin', value: 'Polygin' },
  { label: 'BNB Smart Chain (BEP 20)', value: 'BNB Smart Chain (BEP 20)' },
  { label: 'BNB Beacon Chain (BEP2)', value: 'BNB Beacon Chain (BEP2)' },
  { label: 'Solana', value: 'Solana' },
]

const currencies = [
  { name: 'USDT Tether TRC20', total: '793.338436', price: '1$' },
  { name: 'USDT Tether ERC20', total: '45.4536786', price: '1$' },
  { name: 'USDT Tether BEP20', total: '75.6421145', price: '1$' },
  { name: 'USDT Tether OMNI', total: '7.4545236', price: '1$' },
  { name: 'BTC Bitcoin', total: '0.00244566', price: '1$' },
  { name: 'LTC Litecoin', total: '793.338436', price: '1$' },
  { name: 'ETH Ethereum', total: '793.338436', price: '1$' },
  { name: 'DAI', total: '793.338436', price: '1$' },
  { name: 'DASH', total: '793.338436', price: '1$' },
  { name: 'DOGE', total: '793.338436', price: '1$' },
  { name: 'HUSD', total: '793.338436', price: '1$' },
  { name: 'TUSD', total: '793.338436', price: '1$' },
  { name: 'USDC', total: '793.338436', price: '1$' },
  { name: 'XRP Ripple', total: '793.338436', price: '1$' },
  { name: 'TRX Tron', total: '793.338436', price: '1$' },
  { name: 'HT (TRC20)', total: '793.338436', price: '1$' },
  { name: 'HUSD (TRC20)', total: '793.338436', price: '1$' },
  { name: 'ETH (TRC20)', total: '793.338436', price: '1$' },
  { name: 'BNB', total: '793.338436', price: '1$' },
  { name: 'BUSD (BEP20)', total: '793.338436', price: '1$' },
  { name: 'ETH (BEP20)', total: '793.338436', price: '1$' },
  { name: 'DAI (BEP20)', total: '793.338436', price: '1$' },
  { name: 'USDT (BEP20)', total: '793.338436', price: '1$' },
  { name: 'ADA (BEP20)', total: '793.338436', price: '1$' },
  { name: 'USDC (BEP20)', total: '793.338436', price: '1$' },
  { name: 'BUSD', total: '793.338436', price: '1$' },
  { name: 'ASX Axie Infinity', total: '793.338436', price: '1$' },
  { name: 'ASX Axie Infinity TRC20', total: '793.338436', price: '1$' },
  { name: 'USDT Tether TRC20', total: '793.338436', price: '1$' },
  { name: 'USDT Tether TRC20', total: '793.338436', price: '1$' },
]

interface IProps {
  depositTab: boolean;
}

export const CryptoTab: React.FC<IProps> = ({ depositTab }) => {
  const [address, setAddress] = useState<string>('')

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)

  const currency = 'USDT TRC20'
  const BTCValue = 0.29989263
  const USDValue = '6,561.78'

  return (
    <div className={styles.cryptoTab}>

      <div className={styles.dataAndCurrencies}>
        
        <div className={styles.data}>
          
          <div className={styles.cashableBalance}>
            <p>{currency} Balance</p>
            <p>23322.314 $</p>
          </div>

          <div className={styles.data}>
            {depositTab ? (
              <>
                <TransparentSelect 
                  optionsClassName={styles.selectOptions}
                  selectedOptionsClassName={styles.selectedOption}
                  wrapperClassName={styles.selectWrapper}
                  className={styles.select} 
                  label="Deposit Currency" 
                  options={options} 
                />

                <Input 
                  copy 
                  disabled
                  type="text" 
                  onChange={() => {}}
                  className={styles.addressInput}
                  label="Deposit Adress" 
                  value='0x5B4fB32bb1D2f727Ed5a1a8d365606A7a3ac53F8' 
                />
              </>
            ) : (
              <>
                <TransparentSelect 
                  optionsClassName={styles.selectOptions}
                  selectedOptionsClassName={styles.selectedOption}
                  wrapperClassName={styles.selectWrapper}
                  className={styles.select} 
                  label="Deposit Currency" 
                  options={options} 
                />

                <Input 
                  paste
                  type="text"
                  label="Withdraw Adress"
                  value={address}
                  onChange={handleAddressChange} 
                  className={styles.addressInput}
                  placeholder='Fill address' 
                />
              </>
            )}
          </div>

          <button className={styles.createWalletButton}>{depositTab ? `Create Wallet ${currency}` : 'Withdraw'}</button>

          <div className={styles.noticeAndQR}>
            
            <div className={styles.notice}>
              <p>
                <span className={styles.red}>NOTICE:</span> Send only <span className={styles.blue}>{currency}</span> to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported.
              </p>
            </div>
            
            <div className={styles.QR}>
              <img src={QRImage} alt="QR Code" />
            </div>

          </div>

          <div className={styles.bonus}>
            <div className={styles.deposit}>
              <p>DEPOSIT 100$ </p>
              <p>≈0.04320000 Eth</p>
            </div>
            <img src={RocketImage} alt="Rocket" />
            <div className={styles.depositBonus}>
              <p>First Deposit Bonus</p>
              <p>+100$</p>
            </div>
          </div>
          
          {depositTab && (
            <div className={styles.submitArea}>

              <button className={styles.withdrawButton}>{depositTab ? "I Sent A Transfer" : "Withdraw"}</button>
              
              <div className={styles.depositWith}>
                <p>Deposit With</p>
                <div className={styles.depositIcon}>
                  <img src={FoxIcon} alt="Metamask" />
                </div>
                <div className={styles.depositIcon}>
                  <img src={WaveIcon} alt="WalletConnect" />
                </div>
              </div>
          
            </div>
          )}
        </div>

        <div className={styles.currencies}>
          
          <div className={styles.estimatedBalance}>
            <p>Estimated Balance: <br /> {BTCValue} BTC = ${USDValue}</p>
          </div>
          
          <div className={styles.tableData}>
            <h3>Coins In Your Wallet</h3>

            <div className={styles.table}>
              
              <div className={styles.tableHead}>
                <p>Name</p>
                <p>Total</p>
                <p>Price</p>
              </div>

              <div>
                {currencies.map((currency: any, index: number) => (
                  <div className={styles.cryptoData} key={index}>
                    <p>{currency.name}</p>
                    <p>{currency.total}</p>
                    <p>{currency.price}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}