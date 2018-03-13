import axios from 'axios'

import { 
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types'

export const login = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: null
    })

    axios.post('https://express-auth.herokuapp.com/auth/login', { email: 'kus.underdos@gmail.com', password: '12345678' })
      .then((response) => dispatch({ type: LOGIN_SUCCESS, payload: response.data}))
      .catch((error) => dispatch({ actions: LOGIN_FAILURE, payload: error }))
  }
}
