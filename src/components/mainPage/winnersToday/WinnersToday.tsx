import React from 'react'

import ETHIcon from './assets/eth.svg'
import AvatarImage from './assets/avatar.svg'

import styles from './WinnersToday.module.css'

interface IWinner {
  name: string;
  amount: string;
}

const winners: IWinner[] = [
  { name: 'Artwx_777', amount: '+0.3400009' },
  { name: 'Artwx_777', amount: '+0.3400009' },
  { name: 'Artwx_777', amount: '+0.3400009' },
  { name: 'Artwx_777', amount: '+0.3400009' },
  { name: 'Artwx_777', amount: '+0.3400009' },
]

export const WinnersToday: React.FC = () => {
  return (
    <div className={styles.winnersToday}>
      <h3 className={styles.title}>
        top winners <br />today
      </h3>

      <div className={styles.winnersWrapper}>
        <div className={styles.winners}>
          {winners.map((winner: IWinner, index: number) => (
            <div key={index} className={styles.winner}>
              <img className={styles.avatar} src={AvatarImage} alt={`${winner.name} avatar`} />
              <p className={styles.name}>{winner.name}</p>

              <div className={styles.amountAndCurrency}>
                <img src={ETHIcon} alt="Currency" />
                <p className={styles.amount}>{winner.amount}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}