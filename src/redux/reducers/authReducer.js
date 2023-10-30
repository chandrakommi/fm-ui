import { actionTypes } from '../actionTypes/authActionTypes'

const initialState = {
  isAuthenticated: false,
  user: {},
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
    case actionTypes.SIGN_OUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      }
    default:
      return state
  }
}

export default authReducer
