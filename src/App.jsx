import { Route, Routes } from 'react-router-dom'

import { HomeHeader } from './Components/Home'
import { Homepage, LoginPage, RegisterPage } from './Pages'

const App = () => {
  return (
    <>
      <HomeHeader />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
