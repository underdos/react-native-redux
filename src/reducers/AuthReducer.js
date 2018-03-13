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
      return { ...state, loading: true }
    break;
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    break;
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload }
    break;
    default:
      return state
  }
}