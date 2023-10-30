import { Route, Routes } from 'react-router-dom'

import { HomeHeader } from './Components/Home'
import { Register } from './Components/Auth'
import { Homepage } from './Pages/Home'
import { LoginPage } from './Pages/Auth'

const App = () => {
  return (
    <>
      <HomeHeader />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
