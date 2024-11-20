import { CircleUserRound } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/Caique/ui/dropdown-menu'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../ui/button'
import MobileNavLinks from './mobile-nav-links'

const UsernameMenu = () => {
  const { user, logout, isAuthenticated, loginWithRedirect } = useAuth0()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-orange-500">
        <CircleUserRound className="text-orange-500" />
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 bg-orange-500 font-bold"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
        {isAuthenticated ? (
          <>
            <DropdownMenuItem>
              <MobileNavLinks showMenuButton={true} isLogout={false} />
            </DropdownMenuItem>
          </>
        ) : (
          <div className="space-y-5">
            <Button
              onClick={() => loginWithRedirect()}
              className="w-full bg-orange-500 font-bold"
            >
              Log In
            </Button>
            <MobileNavLinks showMenuButton={true} isLogout={false} />
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu
