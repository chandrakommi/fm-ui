import { Route, Routes } from 'react-router-dom'
import { Home, LoginPage, Main, RegisterPage } from './Pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<Main />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
