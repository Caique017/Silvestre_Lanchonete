import MobileNav from './mobile-nav'
// eslint-disable-next-line import/no-absolute-path
import Logo from '/assets/Logo.png'

export function Header() {
  return (
    <div className="flex h-24 w-full items-center justify-between border border-white/10 bg-zinc-900 px-10 py-4">
      <div className="w-50 flex items-end justify-end">
        <img className="h-16 lg:h-20" src={Logo} alt="Logo" />
      </div>

      <div>
        <MobileNav />
      </div>
    </div>
  )
}
