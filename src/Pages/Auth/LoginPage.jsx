import { Login } from '../../Components/Auth'

const LoginPage = () => {
  return (
    <>
      <div className='row d-flex justify-content-center mt-5'>
        <div className='card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 shadow-sm '>
          <div className='m-0 m-sm-4 '>
            <Login />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
