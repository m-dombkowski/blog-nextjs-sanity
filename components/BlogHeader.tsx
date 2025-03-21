import Link from 'next/link'
import { PortableText } from 'next-sanity'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:my-20 md:flex-row md:justify-between text-pretty">
          <h1 className="text-4xl font-bold leading-tight md:pr-8 md:text-7xl">
            {title}
          </h1>
          {/* <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4> */}
        </header>
      )

    case 2:
      return (
        <header className="w-full ">
          <h2 className=" w-full mb-12 mt-8 text-xl font-bold leading-tight tracking-tight md:text-2xl  text-end">
            <Link href="/" className="hover:underline ">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
