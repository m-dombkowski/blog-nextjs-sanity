import 'tailwindcss/tailwind.css'

import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/router'
import topography from 'public/bg-topography.svg'
import { useEffect, useState } from 'react'
import useWindowDimensions from 'hooks/UseWindowDimensions'
import { Device, ScreenSizeContext } from 'lib/context/screenSize'
import { PostsProvider } from 'lib/context/posts'
import Navigation from 'components/Navigation'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-monster',
  display: 'swap',
})

export const bg = topography

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
  const { width } = useWindowDimensions()
  const [deviceType, setDeviceType] = useState<Device>(Device.NONE)
  console.log(draftMode)
  useEffect(() => {
    width < 1025 ? setDeviceType(Device.MOBILE) : setDeviceType(Device.DESKTOP)
  }, [width])

  return (
    <>
      <PostsProvider>
        <AnimatePresence mode="wait">
          <ScreenSizeContext.Provider value={{ deviceType }}>
            <Navigation />
            <Component key={pageKey} {...pageProps} />
          </ScreenSizeContext.Provider>
        </AnimatePresence>
      </PostsProvider>
    </>
  )
}
