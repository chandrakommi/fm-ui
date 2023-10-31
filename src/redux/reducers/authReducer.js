import { actionTypes } from '../actionTypes/authActionTypes'

const initialState = {
  isAuthenticated: false,
  user: null,
  userId: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_IN:
      return {
        isAuthenticated: true,
        user: payload,
        userId: payload.uid,
      }
    case actionTypes.SIGN_OUT:
      return {
        isAuthenticated: false,
        user: null,
        userId: null,
      }
    default:
      return state
  }
}

export default authReducer
