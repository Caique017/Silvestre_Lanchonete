import { Search } from "lucide-react";
import { NavLink } from "./nav-link";
import { ShoppingBag } from "lucide-react";

export function Header () {

  return (
    <div className='fixed border border-white/10 bg-zinc-900 pl-16 w-full flex flex-col gap-3'>
      <div className="flex mt-6 gap-20 items-center">
        <h1 className="font-bold text-2xl">Silvestre Lanchonete</h1>
        <div className="px-3 w-72 py-1.5 ml-48 border mt-2 border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className='size-4 text-orange-600' />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" 
            placeholder="O que você deseja?"
          />
        </div>
        <ShoppingBag />
      </div>
      <div className='flex items-center gap-5 py-2'>
        <nav className='flex items-center gap-5'>
          <NavLink href="/Pratos_do_dia">Pratos do dia</NavLink>
          <NavLink href="/Pratos_executivos">Pratos executivos</NavLink>
          <NavLink href="/Pratos_especiais">Pratos especiais</NavLink>
          <NavLink href="/Hamburgueres_&_beirutes">Hamburgueres & beirutes</NavLink>
        </nav>
      </div>
    </div>
  )
}

