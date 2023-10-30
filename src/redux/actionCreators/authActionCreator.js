import { auth } from '../../API/firebase'
import { actionTypes } from '../actionTypes/authActionTypes'
const loginUser = payload => {
  return {
    type: actionTypes.SIGN_IN,
    payload,
  }
}

const logoutUser = () => {
  return {
    type: actionTypes.SIGN_OUT,
  }
}

/** Action Creator*/

const signInUser = (email, password) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(profile => {
      const { uid, displayName, email } = profile.user
      dispatch(loginUser({ uid: uid, name: displayName || '', email: email }))
    })
    .catch(err => console.log(err))
}

const error_codes_messages = {
  'auth/email-already-in-use':
    'The email address is already in use by another account',
  'auth/weak-password': 'Password should be at least 6 characters',
  'auth/invalid-email': 'The email address is badly formatted.',
}

const signUpUser = (email, name, password) => async dispatch => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const currentUser = auth.currentUser
        currentUser.updateProfile({ displayName: name })
        dispatch(
          loginUser({
            uid: currentUser.uid,
            name: currentUser.displayName,
            email: currentUser.email,
          }),
        )
      })
      .catch(error =>
        alert(error_codes_messages[error.code] || 'Error occured'),
      )
  } catch (error) {
    console.error('Sign-up error:', error)
  }
}

const signOutUser = () => dispatch => {
  dispatch(logoutUser())
}

export { signUpUser, signInUser, signOutUser }
