import clsx from 'clsx'
import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import useWindowDimensions from 'hooks/UseWindowDimensions'
import { Device, ScreenSizeContext } from 'lib/context/screenSize'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'

import Portrait from '../../public/blog-portrait-trimmed-no-bg.png'

export default function Page() {
  const { width } = useWindowDimensions()
  // const [deviceType, setDeviceType] = useState<Device>(Device.NONE)
  const { deviceType } = useContext(ScreenSizeContext)

  return (
    <PageTransition>
      <PageWrapper>
        <div className="flex relative justify-end">
          <div
            className={clsx(
              'text-left flex flex-col gap-5 my-20',
              deviceType === Device.DESKTOP ? 'w-1/2' : 'w-full',
            )}
          >
            <h1 className="md:text-6xl text-4xl font-bold text-center ">
              O mnie
            </h1>
            {deviceType === Device.MOBILE && (
              <div className="flex justify-center items-center ">
                <Image
                  src={Portrait}
                  alt="My portrait image"
                  width={250}
                  height={250}
                  className=" rounded-full"
                />
              </div>
            )}
            <p className="mt-20">
              Dzień dobry, miło mi że odwiedziłeś mojego bloga!
            </p>
            <p>Nazywam się Jacek Dombkowski i jestem radcą prawnym.</p>
            <p>
              Całe moje zawodowe życie związany jestem z obsługą prawną
              podmiotów z branży medycznej oraz pomocą zamawiającym i wykonawcą
              w postępowaniach przetargowych.
            </p>
            <p>
              Jestem absolwentem Wydziału Prawa i Administracji Uniwersytetu
              Śląskiego w Katowicach, oraz studiów podyplomowych Prawo zamówień
              publicznych na Wydziale Prawa i Administracji Uniwersytetu
              Jagiellońskiego. Ukończyłem również aplikację radcowską przy
              Okręgowej Izbie Radców Prawnych w Krakowie.
            </p>
            <p>
              Od zawsze fascynował mnie świat lekarskich fartuchów i prawniczych
              tóg, a moja praktyka pozwala mi realizować się w obu tych
              dziedzinach.
            </p>
            <p>
              Drogi czytelniku! Życzę Ci, żeby lektura tego bloga pomogła
              zrozumieć uniwersum służby zdrowia oraz przetargów publicznych.
            </p>
            <p>Miłego czytania!</p>
          </div>
          {deviceType === Device.DESKTOP && (
            <div>
              <Image
                src={Portrait}
                alt="My portrait image"
                width={250}
                height={250}
                className=" rounded-full sticky top-10"
              />
            </div>
          )}
        </div>
      </PageWrapper>
    </PageTransition>
  )
}
// absolute top-[10%] -right-1/2
