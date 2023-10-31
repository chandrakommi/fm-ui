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

const signInUser = (email, password, setIsLoggedIn) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(profile => {
      const { uid, displayName, email } = profile.user
      dispatch(loginUser({ uid: uid, displayName: displayName, email: email }))
      setIsLoggedIn(true)
    })
    .catch(err => console.log(err))
}

const error_codes_messages = {
  'auth/email-already-in-use':
    'The email address is already in use by another account',
  'auth/weak-password': 'Password should be at least 6 characters',
  'auth/invalid-email': 'The email address is badly formatted.',
}

const signUpUser = (email, name, password, setRegistered) => async dispatch => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        auth.currentUser.updateProfile({ displayName: name })
      })
      .then(() => {
        const { uid, displayName, email } = auth.currentUser
        dispatch(
          loginUser({
            uid: uid,
            displayName: displayName,
            email: email,
          }),
        )
        setRegistered(true)
      })
      .catch(error => {
        alert(error_codes_messages[error.code] || error)
      })
  } catch (error) {
    console.error('Sign-up error:', error)
  }
}

const signOutUser = () => dispatch => {
  dispatch(logoutUser())
}

const checkUserSignedIn = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch(
        loginUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }),
      )
    }
  })
}

export { checkUserSignedIn, signUpUser, signInUser, signOutUser }
