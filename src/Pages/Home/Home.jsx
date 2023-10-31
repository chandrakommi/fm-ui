import { Link, Outlet } from 'react-router-dom'
import { Navbar } from '../../Components/Home'

const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Home
