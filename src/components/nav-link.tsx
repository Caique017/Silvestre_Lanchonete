import { ComponentProps } from "react"

interface PropsNavLink extends ComponentProps<'a'> {
  children: string
}

export function NavLink (props: PropsNavLink) {
  return (
    <a {...props} className='font-medium text-[9.5px] md:text-sm 2xl:text-lg transition duration-500 hover:text-orange-500 selection:text-orange-500'>
      {props.children}
    </a>
  )
}