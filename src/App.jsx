import { Route, Routes } from 'react-router-dom'
import { Home, LoginPage, Main, RegisterPage } from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Main />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
        <Route path='/dashboard' element={< Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
