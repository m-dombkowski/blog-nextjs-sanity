import Navigation from 'components/Navigation'
import { cn } from 'lib/utils'
import { Head, Html, Main, NextScript } from 'next/document'

import { montserrat } from './_app'

export default function Document(ctx: { __NEXT_DATA__: { page: string } }) {
  const page = ctx.__NEXT_DATA__.page

  return (
    <Html lang="en">
      <Head />
      <body className={cn(montserrat.className, 'bg-[#fffeec]')}>
        <Navigation page={page} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
