import 'tailwindcss/tailwind.css'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/router'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-monster',
  display: 'swap',
})

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = dynamic(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  const route = useRouter()
  const pageKey = route.asPath

  return (
    <>
      {draftMode ? (
        <AnimatePresence mode="wait" initial={false}>
          <PreviewProvider token={token}>
            <Component key={pageKey} {...pageProps} />
          </PreviewProvider>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      )}
      {draftMode && <VisualEditing />}
    </>
  )
}
