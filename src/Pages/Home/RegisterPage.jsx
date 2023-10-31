import { useEffect, useState } from 'react'
import { signUpUser } from '../../redux/actionCreators/authActionCreator'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const RegisterPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [registered, setRegistered] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!registered) return
    navigate('/dashboard')
  }, [registered])
  const handleInputChange = event => {
    const { name, value } = event.target
    setUser(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const { name, email, password, confirmPassword } = user
    if (!name || !email || !password || !confirmPassword)
      return alert('Please fill in all the fields')
    if (password !== confirmPassword)
      return alert('Confirm password does not match with password')
    dispatch(signUpUser(email, name, password, setRegistered))
  }
  return (
    <>
      <div className='row d-flex justify-content-center mt-5'>
        <div className='card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 shadow-sm '>
          <div className='m-0 m-sm-4 '>
            <form className='w-100' onSubmit={handleFormSubmit}>
              <div className='mb-3'>
                <label htmlFor='name' className=' form-label '>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  id='name'
                  placeholder='Enter name'
                  value={user.name}
                  onChange={handleInputChange}
                />
              </div>
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
              <div className='mb-3'>
                <label htmlFor='confirm-password' className='form-label '>
                  Confirm Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='confirmPassword'
                  id='confirm-password'
                  placeholder='Confirm password'
                  value={user.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className='mb-2'>
                <button type='submit' className='btn btn-primary w-100'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
