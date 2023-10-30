import { auth } from './firebase'
export const loginUser = async (email, password) => {
  return await auth
    .signInWithEmailAndPassword(email, password)
    .then(user => console.log(user))
    .catch(err => console.log(err))
}

export const signUpUser = async user => {
  const { email, password, name } = user
  return await auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => console.log('success', user))
    .catch(error => console.log(error))
}
