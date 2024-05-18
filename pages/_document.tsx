import Navigation from 'components/Navigation'
import { Head, Html, Main, NextScript } from 'next/document'

import { montserrat } from './_app'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={montserrat.className}>
        <Navigation />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
