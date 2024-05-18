import { Hash, Home, MailPlus, Search, UserRound } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const navLinks = [
    {
      href: '/',
      icon: <Home className=" h-12 w-12" />,
    },
    {
      href: '/about',
      icon: <UserRound className=" h-12 w-12" />,
    },
    {
      href: '/search',
      icon: <Search className=" h-12 w-12" />,
    },
    {
      href: '/newsletter',
      icon: <MailPlus className=" h-12 w-12" />,
    },
    {
      href: '/group',
      icon: <Hash className=" h-12 w-12" />,
    },
  ]

  return (
    <aside className="flex flex-col justify-start items-center fixed left-0 top-0 w-24 border-r-2 shadow-xl h-full">
      <ul className="w-full">
        {navLinks.map((link, i) => (
          <li key={i} className="w-full h-24 border-b-2">
            <Link
              className=" transition duration-300 w-full h-full flex justify-center items-center hover:bg-slate-200"
              href={link.href}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
