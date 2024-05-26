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
  const iconClass = 'h-6 w-6 md:h-12 md:w-12'

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
      <div className="w-full h-16 md:h-24 border-b-2 border-black hover:bg-sky-400 transition duration-300 ">
        <Link
          className=" w-full h-full flex justify-center items-center "
          href={link.href}
        >
          {link.icon}
        </Link>
      </div>
    )
  }

  const NavItemHighlited = ({ link }: { link: Link }) => {
    return (
      <div className="w-full h-16 md:h-24 border-b-2 border-black bg-sky-600">
        <Link
          className="  w-full h-full flex justify-center items-center "
          href={link.href}
        >
          {link.icon}
        </Link>
      </div>
    )
  }

  return (
    <aside className="flex flex-col justify-start items-center fixed left-0 top-0 w-12 md:w-24 border-r-2 shadow-xl h-full bg-[#fffeec] border-black">
      <ul className="w-full">
        {navLinks.map((link, i) => {
          return page.includes(link.href) ? (
            <li key={i}>
              <NavItemHighlited link={link} />
            </li>
          ) : (
            <li key={i}>
              <NavItem link={link} />
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
