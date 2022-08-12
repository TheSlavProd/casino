import React, { useState } from 'react'
import cx from 'classnames'

import LimboIcon from './assets/limbo.svg'
import ETHIcon from './assets/eth.svg'

import styles from './LatestBetsAndContest.module.css'

interface ITableInfo {
  game: string;
  player: string;
  betId: string;
  payout: string;
  profit: string;
}

interface IProps {
  className?: string;
}

const tableInfo: ITableInfo[] = [
  { game: 'Limbo', player: 'Archabald', betId: '27011400588333184', payout: '0.00x', profit: '0.04320000' },
  { game: 'Limbo', player: 'Archabald', betId: '27011400588333184', payout: '0.00x', profit: '0.04320000' },
  { game: 'Limbo', player: 'Archabald', betId: '27011400588333184', payout: '0.00x', profit: '0.04320000' },
  { game: 'Limbo', player: 'Archabald', betId: '27011400588333184', payout: '0.00x', profit: '0.04320000' },
  { game: 'Limbo', player: 'Archabald', betId: '27011400588333184', payout: '0.00x', profit: '0.04320000' },
]

export const LatestBetsAndContest: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cx([styles.latestBetsAndContest, className])}>
      <LatestBetsAndContestWindow>
        <LatestBetsAndContestTable data={tableInfo} />
        <LatestBetsAndContestTable data={tableInfo} />
      </LatestBetsAndContestWindow>
    </div>
  )
}

const tabs = ['Latest Winners', 'Tournaments Winners']

interface IWindowProps {
  children: React.ReactNode | React.ReactNode[]
}

const LatestBetsAndContestWindow: React.FC<IWindowProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const activeChildren = React.Children.toArray(children)[activeTab]

  return (
    <div className={styles.window}>

      <div className={styles.tabs}>
        {tabs.map((tab: string, index: number) => (
          <div 
            key={`${tab}-${index}`}
            onClick={() => setActiveTab(index)} 
            className={cx({
              [styles.tab]: true,
              [styles.activeTab]: activeTab === index
            })}
          >
            <p>{tab}</p>
          </div>
        ))}
      </div>

      {activeChildren}

    </div>
  )
}

interface ITableProps {
  data: ITableInfo[];
}

const LatestBetsAndContestTable: React.FC<ITableProps> = ({ data }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Game</th>
              <th>Player</th>
              <th>Bet ID</th>
              <th>Payout</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody>
            {data.map((dataRow: ITableInfo, index: number) => (
              <tr className={styles.tableRow} key={`${dataRow.betId}-${index}`}>
                
                <td className={cx([styles.tableCell, styles.startCell])}>
                  <img src={LimboIcon} alt="Game" />
                  <span>{dataRow.game}</span>
                </td>

                <td className={styles.tableCell}>{dataRow.player}</td>
                
                <td className={styles.tableCell}>{dataRow.betId}</td>
                
                <td className={styles.tableCell}>{dataRow.payout}</td>

                <td className={cx([styles.tableCell, styles.endCell])}>
                  <img src={ETHIcon} alt="Currency" />
                  <span className={styles.profit}>{dataRow.profit}</span>
                </td>

              </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}