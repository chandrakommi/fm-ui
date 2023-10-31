import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../redux/actionCreators/authActionCreator'
const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const handleInputChange = event => {
    const { name, value } = event.target
    setUser(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const { email, password } = user
    if (!email || !password) return alert('Please fill in the fields')
    dispatch(signInUser(email, password))
  }
  return (
    <>
      <form className='w-100' onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className=' form-label '>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='email'
            placeholder='Someone@email.com'
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label '>
            Passoword
          </label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='password'
            placeholder='Enter password'
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-2'>
          <button type='submit' className='btn btn-primary w-100'>
            Login
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
