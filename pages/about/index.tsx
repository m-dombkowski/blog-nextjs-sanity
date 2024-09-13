import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import Image from 'next/image'

import Portrait from '../../public/blog-portrait-trimmed-no-bg.png'

export default function Page() {
  return (
    <PageTransition>
      <PageWrapper>
        <div className="flex relative justify-end">
          <div className="text-left flex flex-col gap-5 my-20 w-1/2">
            <h1 className="md:text-6xl text-2xl font-bold text-center mb-20">
              O mnie
            </h1>
            <p>Dzień dobry, miło mi że odwiedziłeś mojego bloga!</p>
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
          <div>
            <Image
              src={Portrait}
              alt="My portrait image"
              width={250}
              height={250}
              className=" rounded-full sticky top-0"
            />
          </div>
        </div>
      </PageWrapper>
    </PageTransition>
  )
}
// absolute top-[10%] -right-1/2
