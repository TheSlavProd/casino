import React from 'react'

import { Page } from 'baseComponents'
import { Game } from 'components/game'
import { Contacts } from 'components/mainPage'

export const GamePage: React.FC = () => {
  return (
    <Page>
      <Game title="Great Rhino Megaways" />
      <Contacts />
    </Page>
  )
}