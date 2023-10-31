import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand ms-5'>
          File Manager
        </Link>
        <ul className='navbar-nav ms-auto me-5'>
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
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Home

