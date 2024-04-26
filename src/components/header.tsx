import { Search } from "lucide-react";
import { NavLink } from "./nav-link";
import { ShoppingBag } from "lucide-react";

export function Header () {

  return (
    <div className='fixed z-10 border border-white/10 bg-zinc-900 pl-4 md:pl-12 xl:pl-16 w-full flex flex-col gap-3'>
      <div className="flex mt-6 gap-7 md:gap-36 xl:gap-40 2xl:gap-80 items-center">
        <h1 className="font-bold text-sm md:text-xl xl:text-2xl 2xl:text-4xl">Silvestre Lanchonete</h1>
        <div className="px-3 md:w-60 xl:w-64 2xl:w-96 py-1.5 2xl:py-2 md:ml-40 xl:ml-72 border xl:mt-2 border-white/10 rounded-lg flex items-center gap-3 2xl:gap-6">
          <Search className='size-3 xl:size-4 2xl:size-5 text-orange-600' />
          <input
            className="bg-transparent 2xl:text-lg w-20 outline-none border-0 p-0 text-sm focus:ring-0"
            placeholder="busca..."
          />
        </div>
        <ShoppingBag className="size-6 2xl:size-9" />
      </div>
      <div className='flex items-center py-3'>
        <nav className='flex items-center gap-3 md:gap-5 xl:gap-7 2xl:gap-10'>
          <NavLink href="/Pratos_do_dia">Pratos do dia</NavLink>
          <NavLink href="/Pratos_executivos">Pratos executivos</NavLink>
          <NavLink href="/Pratos_especiais">Pratos especiais</NavLink>
          <NavLink href="/Hamburgueres_&_beirutes">Hamburgueres & beirutes</NavLink>
        </nav>
      </div>
    </div>
  )
}

