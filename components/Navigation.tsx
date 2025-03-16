import {
  Hash,
  Home,
  LucideIcon,
  MailPlus,
  Search,
  UserRound,
} from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

type Link = {
  href: string
  icon: ReactNode
}

export default function Navigation({ page }: { page: string }) {
  const iconClass = 'h-8 w-8 md:h-10 md:w-10'

  const navLinks = [
    {
      href: '/home',
      icon: <Home className={iconClass} />,
    },
    {
      href: '/about',
      icon: <UserRound className={iconClass} />,
    },
    {
      href: '/search',
      icon: <Search className={iconClass} />,
    },
    {
      href: '/newsletter',
      icon: <MailPlus className={iconClass} />,
    },
    {
      href: '/group',
      icon: <Hash className={iconClass} />,
    },
  ]

  const NavItem = ({ link }: { link: Link }) => {
    return (
      <div className="flex-1 hover:bg-sky-400 transition duration-300 ">
        <Link
          className="p-4 flex justify-center items-center "
          href={link.href}
        >
          {link.icon}
        </Link>
      </div>
    )
  }

  const NavItemHighlited = ({ link }: { link: Link }) => {
    return (
      <div className="flex-1 bg-sky-600">
        <Link
          className="p-4 flex justify-center items-center "
          href={link.href}
        >
          {link.icon}
        </Link>
      </div>
    )
  }

  return (
    <aside className="fixed top-5 left-1/2 -translate-x-1/2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] z-30">
      <ul className="w-full flex justify-start items-center  min-w-80 border border-black">
        {navLinks.map((link, i) => {
          return page.includes(link.href) ? (
            <li
              key={i}
              className="flex-1 bg-[#fffeec] border-r first-of-type:border-l-0 last-of-type:border-r-0  border-black flex justify-center items-center"
            >
              <NavItemHighlited link={link} />
            </li>
          ) : (
            <li
              key={i}
              className="flex-1 bg-[#fffeec] border-r first-of-type:border-l-0 last-of-type:border-r-0  border-black flex justify-center items-center"
            >
              <NavItem link={link} />
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
