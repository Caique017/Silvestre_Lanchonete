import { useAuth0 } from '@auth0/auth0-react'
import UsernameMenu from './UsernameMenu'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const MainNav = () => {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/menu')
  }
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <div className=" w-full">
          <button
            onClick={handleNavigateHome}
            className="h-10 rounded-md border border-white/10 bg-orange-500 font-bold text-white duration-500 ease-in-out hover:bg-orange-50 hover:transition 2xl:h-14 2xl:w-52 2xl:text-lg"
          >
            Cardápio
          </button>
          <Button
            onClick={() => loginWithRedirect()}
            className="w-full font-bold"
          >
            Log In
          </Button>
        </div>
      )}
    </span>
  )
}

export default MainNav
