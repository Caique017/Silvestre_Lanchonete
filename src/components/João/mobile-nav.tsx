import { CircleUserRound, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobileNavLinks from './mobile-nav-links'

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3 border-white/10 bg-zinc-900">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center gap-2 font-bold text-zinc-50">
              <CircleUserRound className="text-orange-500" />
              {user?.name}
            </span>
          ) : (
            <span className="text-base font-bold text-zinc-50">
              {' '}
              Bem vindo a Silvestre Lanchonete!
            </span>
          )}
        </SheetTitle>
        <Separator className="bg-zinc-800" />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks showMenuButton={true} isLogout={true} />
          ) : (
            <div className="space-y-5">
              <Button
                onClick={() => loginWithRedirect()}
                className="w-full bg-slate-900 font-bold"
              >
                Log In
              </Button>
              <MobileNavLinks showMenuButton={true} isLogout={false} />
            </div>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
