import { useSelector } from 'react-redux'
import { Navbar } from '../../Components/Home'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/')
  }, [isAuthenticated])
  return (
    <>
      <Navbar />
      <h1 className='display-3 text-center mt-5 '> Welcome to the Dashboard</h1>
    </>
  )
}

export default Dashboard
