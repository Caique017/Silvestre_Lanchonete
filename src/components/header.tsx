import { Search } from "lucide-react";
import { NavLink } from "./nav-link";
import { ShoppingBag } from "lucide-react";

export function Header () {

  return (
    <div className='fixed z-10 border border-white/10 bg-zinc-900 pl-4 md:pl-16 w-full flex flex-col gap-3'>
      <div className="flex mt-6 gap-10 md:gap-20 items-center">
        <h1 className="font-bold text-sm md:text-2xl">Silvestre Lanchonete</h1>
        <div className="px-3 md:w-72 py-1.5 md:ml-48 border md:mt-2 border-white/10 rounded-lg flex items-center gap-3">
          <Search className='size-3 md:size-4 text-orange-600' />
          <input
            className="bg-transparent flex-1 w-20 outline-none border-0 p-0 text-sm focus:ring-0" 
            placeholder="Busca..."
          />
        </div>
        <ShoppingBag className="size-6" />
      </div>
      <div className='flex items-center gap-5 py-3'>
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

