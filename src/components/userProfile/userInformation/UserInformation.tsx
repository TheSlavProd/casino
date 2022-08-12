import React from 'react'

import cx from 'classnames'

import UserInfoIcon from './assets/user-info.svg'
import AchievedLevelIcon from './assets/active-medal.png'
import UnachievedLevelIcon from './assets/inactive-medal.png'
import BalanceInfoIcon from './assets/balance-info.svg'
import CaretIcon from './assets/caret.svg'
import StatisticsIcon from './assets/statistics.svg'
import BonusesIcon from './assets/bonuses.svg'
import GamesIcon from './assets/games.svg'
import GameImage from './assets/game.png'

import styles from './UserInformation.module.css'

interface IFavouriteGame {
  img: string;
  type: string;
  title: string;
}

const games: IFavouriteGame[] = [
  { title: 'Sticky bandits', type: 'Quickspin', img: GameImage },
  { title: 'Sticky bandits', type: 'Quickspin', img: GameImage },
  { title: 'Sticky bandits', type: 'Quickspin', img: GameImage },
  { title: 'Sticky bandits', type: 'Quickspin', img: GameImage },
]

export const UserInformation: React.FC = () => {
  const level = 1
  
  const totalBalance = '10 256.00'
  const wagerBalance = '313.90'
  const cashbackBalance = '150.00'
  const chargableBalance = '865.34'

  const totalWins = 45
  const totalBets = 12
  const totalWagered = 10

  const accumulative = '999 999 999.99'
  const accumulativeOf = '999 999 999.99'
  const forRegistration = 12
  const cashback = 150

  const renderLevels = () => {
    const levels = []

    const achievedLevel = (level: number) => (
      <div key={level} className={cx({
        [styles.level]: true,
        [styles.achievedLevel]: true,
      })}>
        <img src={AchievedLevelIcon} alt="Achieved Level" />
        <p>{level}</p>
      </div>
    )

    const unachievedLevel = (level: number) => (
      <div key={level} className={styles.level}>
        <img src={UnachievedLevelIcon} alt="Achieved Level" />
        <p>{level}</p>
      </div>
    )

    for (let i = 1; i <= 10; i++) {
      if (i <= level) {
        levels.push(achievedLevel(i))
      } else {
        levels.push(unachievedLevel(i))
      }
    }

    return levels
  }

  return (
    <div className={styles.userInformation}>
      
      <div className={styles.title}>
        <img src={UserInfoIcon} alt="User info" />
        <p>User information</p>
      </div>
      <h5 className={styles.mobileLevelsHeader}>Levels</h5>
      <div className={styles.levels}>
        <h5>Levels</h5>
        {renderLevels()}
      </div>

      <div className={styles.balanceInfo}>
        <div className={styles.title}>
          <div className={styles.balance}>
            <img src={BalanceInfoIcon} alt="Balance Info" />
            <p>Balance Information</p>
          </div>
          <div className={styles.moreInfo}>
            <p>More Information</p>
            <img src={CaretIcon} alt="More Info" />
          </div>
        </div>

        <div className={styles.balanceStats}>
          <p>Total Balance: <span>{totalBalance}</span> USD</p>
          <div className={styles.balanceStatsDivider} />
          <p>Wager Balance: <span>{wagerBalance}</span> USD</p>
          <div className={styles.balanceStatsDivider} />
          <p>Cashback Balance: <span>{cashbackBalance}</span></p>
          <div className={styles.balanceStatsDivider} />
          <p>Chargable Balance <span>{chargableBalance}</span></p>
        </div>

        <div className={styles.mobileMoreInfo}>
          <p>More Information</p>
          <img src={CaretIcon} alt="More Info" />
        </div>
        
      </div>

      <div className={styles.statistics}>
        <div className={styles.title}>
          <div className={styles.statsTitle}>
            <img src={StatisticsIcon} alt="Statistics" />
            <p>Statistics</p>
          </div>
          <p className={styles.statsDetails}>Details</p>
        </div>

        <div className={styles.statisticsInfo}>
          
          <div className={styles.statisticsInfoColumn}>
            <p>{totalWins}</p>
            <p>Total Wins</p>
          </div>
          
          <div className={styles.statsInfoDivider} />
          
          <div className={styles.statisticsInfoColumn}>
            <p>{totalBets}</p>
            <p>Total Bets</p>
          </div>

          <div className={styles.statsInfoDivider} />

          <div className={styles.statisticsInfoColumn}>
            <p>{totalWagered}</p>
            <p>Total Wagered</p>
          </div>
        
        </div>
      </div>

      <div className={styles.bonuses}>
        <div className={styles.bonusesTitle}>
          <img src={BonusesIcon} alt="Bonuses" />
          <p>Bonuses</p>
        </div>

        <div className={styles.bonusesInfo}>
          
          <div className={styles.bonusesInfoColumn}>
            <p className={styles.accumulative}>{accumulative} <span>/ {accumulativeOf}</span></p>
            <p>Accumulative</p>
          </div>
          
          <div className={styles.bonusesInfoDivider} />
          
          <div className={styles.bonusesInfoColumn}>
            <p>{forRegistration}</p>
            <p>For registration</p>
          </div>

          <div className={styles.bonusesInfoDivider} />

          <div className={styles.bonusesInfoColumn}>
            <p>{cashback}</p>
            <p>Cashback</p>
          </div>
        
        </div>
      </div>

      <div className={styles.favouriteGames}>
        <div className={styles.title}>
          <div className={styles.favouriteGamesTitle}>
            <img src={GamesIcon} alt="Favourite Games" />
            <p>Favourite Games</p>
          </div>
          <p className={styles.showAll}>Show All</p>
        </div>

        <div className={styles.games}>
          {games.map((game: IFavouriteGame, index: number) => (
            <div key={index} className={styles.game}>
              <img src={game.img} alt={game.title} />
              <div className={styles.titleAndType}>
                <p>{game.title}</p>
                <p>{game.type}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}