import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOutUser } from '../../redux/actionCreators/authActionCreator'

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard')

    console.log(user)
  }, [isAuthenticated])

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand ms-5'>
          File Manager
        </Link>
        <ul className='navbar-nav ms-auto me-5'>
          {isAuthenticated ? (
            <>
              <li className='nav-item mx-2 '>
                <p className='my-0 mt-2'>
                  <span className='text-light'>Welcome, </span>
                  <span className=' text-warning '> {user.displayName}</span>

                  <button
                    className='btn btn-outline-primary ms-3 '
                    onClick={() => {
                      dispatch(signOutUser())
                      navigate('/')
                    }}>
                    logout
                  </button>
                </p>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item mx-2 '>
                <Link to={'/login'} className='btn text-light'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/register'} className='btn btn-success '>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
