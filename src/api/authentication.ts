import axios from 'axios'

export const loginRequest = (data: any) => {
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/login/access-token`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data,
  })
}