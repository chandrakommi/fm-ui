import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../redux/actionCreators/authActionCreator'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLoggedIn) return
    navigate('/dashboard')
  }, [isLoggedIn])

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
    dispatch(signInUser(email, password, setIsLoggedIn))
  }
  return (
    <>
      <div className='row d-flex justify-content-center mt-5'>
        <div className='card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 shadow-sm '>
          <div className='m-0 m-sm-4 '>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
