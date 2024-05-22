import Navigation from 'components/Navigation'
import { Head, Html, Main, NextScript } from 'next/document'
import { cn } from 'lib/utils'
import { montserrat } from './_app'

export default function Document(ctx: { __NEXT_DATA__: { page: string } }) {
  const page = ctx.__NEXT_DATA__.page

  return (
    <Html lang="en">
      <Head />
      <body
        className={cn(
          montserrat.className,
          // ' bg-gradient-to-br from-[#fffdd9] via-[#fffdd5] to-[#FFFDD0]',
          'bg-[#fffeec]',
        )}
      >
        <Navigation page={page} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
