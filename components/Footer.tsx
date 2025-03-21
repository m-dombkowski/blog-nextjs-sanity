import { Linkedin } from 'lucide-react'
import Link from 'next/link'

import PageWrapper from './PageWrapper'

export default function Footer() {
  return (
    <footer className=" mt-48 border-t-2 border-black py-20 from-[#fffeec] via-[#fffffb] to-white bg-gradient-to-t">
      <div className="flex max-w-7xl mx-auto sm:pl-24 sm:pr-12 md:px-20 flex-col items-center px-6">
        <div className="flex w-full md:justify-between flex-wrap flex-col md:flex-row">
          <div className=" flex flex-col gap-5">
            <h1 className="text-2xl font-bold md:mb-10 mb-2">Kontakt</h1>
            <p>
              Email:{' '}
              <Link
                href="mailto: dombkowskimateusz@gmail.com"
                className=" underline transition duration-300 hover:text-sky-600"
              >
                dombkowskimateusz@gmail.com
              </Link>
            </p>
            <p>
              Telefon:{' '}
              <Link
                href="tel:+48123456789"
                className=" underline transition duration-300 hover:text-sky-600"
              >
                +48 123 456 789
              </Link>
            </p>
            <p className="flex gap-2">
              <Link
                href="tel:+48123456789"
                className=" underline transition duration-300 hover:text-sky-600"
              >
                <Linkedin />
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold md:mb-10 md:mt-0 mt-12 mb-2">
              Dodatkowe informacje
            </h1>
            <Link
              className="transition duration-300 hover:text-sky-600"
              href="#"
            >
              Polityka Prywatności
            </Link>
            <Link
              className="transition duration-300 hover:text-sky-600"
              href="#"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
