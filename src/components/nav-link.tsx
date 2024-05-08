import { ComponentProps } from "react";

interface PropsNavLink extends ComponentProps<'a'> {
  children: string;
  href: string; // Add href to the props interface
}

export function NavLink (props: PropsNavLink) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = props.href.substring(1); // Use props.href
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <a {...props} onClick={handleClick} className='font-medium text-[9.5px] md:text-sm 2xl:text-lg transition duration-500 hover:text-orange-500 selection:text-orange-500'>
      {props.children}
    </a>
  );
}
