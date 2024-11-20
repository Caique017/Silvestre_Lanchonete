import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useAuth0 } from '@auth0/auth0-react'

interface MobileNavLinksProps {
  showMenuButton: boolean
  isLogout: boolean
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({
  showMenuButton,
  isLogout,
}) => {
  const { logout } = useAuth0()

  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/menu')
  }
  return (
    <>
      {showMenuButton && (
        <button
          onClick={handleNavigateHome}
          className="h-10 w-full rounded-md border border-white/10 bg-orange-500 font-bold text-white duration-500 ease-in-out hover:bg-orange-50 hover:transition"
        >
          Cardápio
        </button>
      )}

      {isLogout && (
        <>
          <Button
            onClick={() => logout()}
            className="flex w-full items-center px-3 font-bold hover:bg-gray-500"
          >
            Log Out
          </Button>
        </>
      )}
    </>
  )
}

export default MobileNavLinks
