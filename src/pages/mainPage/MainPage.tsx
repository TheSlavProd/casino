import React, { useEffect } from 'react'

import { getGames } from 'api/games'

import { Page } from 'baseComponents'
import { MainPageComponents } from 'components'

import { games } from './mockData'

export const MainPage: React.FC = () => {
  useEffect(() => {
    getGames()
  }, [])
  
  return (
    <Page>
      <MainPageComponents.EntryCarousel />
      <MainPageComponents.GamesSearch />
      <MainPageComponents.GamesTypesCarousel />

      <MainPageComponents.GamesCarousel {...games[0]} />

      <MainPageComponents.GamesCarousel {...games[1]} />

      <MainPageComponents.GamesCarousel {...games[2]} />
      
      <MainPageComponents.NeedCrypto />

      <MainPageComponents.GamesCarousel {...games[3]} />

      <MainPageComponents.GamesCarousel {...games[4]} />

      <MainPageComponents.GamesCarousel {...games[5]} />

      <MainPageComponents.GamesCarousel {...games[6]} />

      <MainPageComponents.GamesCarousel {...games[7]} />

      <MainPageComponents.GamesCarousel {...games[8]} />

      <MainPageComponents.WinnersToday />
      <MainPageComponents.LatestBetsAndContest />
      <MainPageComponents.Contacts />
    </Page>
  )
}