import { 
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/types'

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN: 
      console.log(action)
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      console.log(action)
      return { ...state, loading: false, user: action.payload }
    case LOGIN_FAILURE:
      console.log(action)
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}