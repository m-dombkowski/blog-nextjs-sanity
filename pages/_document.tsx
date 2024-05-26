import Navigation from 'components/Navigation'
import { cn } from 'lib/utils'
import { Head, Html, Main, NextScript } from 'next/document'

import { montserrat } from './_app'
import { bg } from './_app'

export default function Document(ctx: { __NEXT_DATA__: { page: string } }) {
  const page = ctx.__NEXT_DATA__.page

  return (
    <Html lang="en">
      <Head />
      <body className={cn(montserrat.className, 'bg-[#fffeec], relative ')}>
        <div className="bg-topography fixed inset-0 opacity-[0.02] -z-10"></div>
        <Navigation page={page} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
