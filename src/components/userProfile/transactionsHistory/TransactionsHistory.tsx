import React, { useState } from 'react'

import cx from 'classnames'

import { TransparentSelect } from 'baseComponents'

import ETHIcon from './assets/eth.svg'
import ArrowIcon from './assets/arrow.svg'
import CaretIcon from './assets/caret.svg'

import styles from './TransactionsHistory.module.css'

interface ITransaction {
  time: string;
  type: 'Withdraw' | 'Deposit';
  amount: string;
  state: boolean;
}



interface ICurrency {
  label: string;
  value: string;
  img: string;
}

const currencies: ICurrency[] = [
  { label: 'ETH', value: 'eth1', img: ETHIcon },
  { label: 'ETH', value: 'eth2', img: ETHIcon },
  { label: 'ETH', value: 'eth4', img: ETHIcon },
  { label: 'ETH', value: 'eth3', img: ETHIcon },
]

const types: IOption[] = [
  { label: 'All Games', value: 'all' },
  { label: 'All Games', value: 'all1' },
  { label: 'All Games', value: 'all2' },
  { label: 'All Games', value: 'all3' },
  { label: 'All Games', value: 'all4' },
]

const data: ITransaction[] = [
  { time: '12:33', type: 'Withdraw', amount: '0.04320000', state: true },
  { time: '12:33', type: 'Deposit', amount: '0.04320000', state: false },
  { time: '12:33', type: 'Withdraw', amount: '0.04320000', state: true },
  { time: '12:33', type: 'Deposit', amount: '0.04320000', state: false },
]

export const TransactionsHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const totalWins = 45
  const totalBets = 12
  const totalWagered = 10
  
  const totalItems = 10

  const itemsToShow = 15

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const prevPageButtonDisabled = currentPage === 1

  return (
    <div className={styles.transactionsHistory}>
      <div className={styles.historyStats}>
        <div className={styles.historyStatsColumn}>
          <p>{totalWins}</p>
          <p>Total Wins</p>
        </div>

        <div className={styles.historyStatsDivider} />

        <div className={styles.historyStatsColumn}>
          <p>{totalBets}</p>
          <p>Total Bets</p>
        </div>

        <div className={styles.historyStatsDivider} />

        <div className={styles.historyStatsColumn}>
          <p>{totalWagered}</p>
          <p>Total Wagered</p>
        </div>
      </div>

      <TransparentSelect 
        wrapperClassName={styles.typesSelectWrapper}
        optionsClassName={styles.typesSelectOptions}
        className={styles.typesSelect} 
        options={types} 
      />

      <div className={styles.transactionsTable}>
        
        <div className={styles.transactionsTableWrapper}>
          
          <div className={styles.tableHeader}>
            <p>Time</p>
            <p>Transaction</p>
            <p>Amount</p>
            <p>State</p>
            <p>Transaction</p>
          </div>

          {data.map((transaction: ITransaction, index: number) => (
            <div key={index} className={styles.transaction}>
              <p className={styles.timeAndType}>{transaction.time}</p>
              <p className={styles.timeAndType}>{transaction.type}</p>
              <div className={styles.amount}>
                <img src={ETHIcon} alt="Currency" />
                <p>{transaction.amount}</p>
              </div>
              <p className={cx({
                [styles.state]: true,
                [styles.successState]: transaction.state,
              })}>{transaction.state ? "Success" : "Error"}</p>
              <button>Click For Details</button>
            </div>
          ))}

        </div>
      
      </div>

      <div className={styles.pagination}>
        <TransparentSelect 
          optionsClassName={styles.selectOptions} 
          selectedOptionsClassName={styles.selectedOption} 
          className={styles.currencySelect}
          options={currencies} 
        />

        <div className={styles.paginationControls}>

          <div className={styles.itemsToShow}>
            <p>{itemsToShow}</p>
            <img src={CaretIcon} alt="Caret" />
          </div>

          <p className={styles.totalItems}>Total {totalItems}</p>

          <div className={styles.currentPage}>
            <p>{currentPage}</p>
          </div>
          
          <div className={styles.navButtons}>
            <button disabled={prevPageButtonDisabled} onClick={prevPage}>
              <img src={ArrowIcon} alt="Previous" />
            </button>
            <button onClick={nextPage}>
              <img src={ArrowIcon} alt="Next" />
            </button>
          </div>
        </div>

      
      </div>

    </div>
  )
}