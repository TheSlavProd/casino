import { get } from 'api/requests'

export const getGames = () => {
  get('/games')
}