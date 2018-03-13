import axios from 'axios'

import { 
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types'

export const login = () => {
  console.log('login processing')
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: null
    })

    axios.post('https://express-auth.herokuapp.com/auth/login', { email: 'kus.underdos@gmail.com', password: '12345678' })
      .then((response) => {
        dispatch({
          type: LOGIN_SUCCESS, 
          payload: response.data.data
        })
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILURE, 
          payload: error 
        })
      })
  }
}
