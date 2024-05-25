import Newsletter from 'components/NewsletterSignup'
import PageTransition from 'components/PageTransition'

export default function Page() {
  return (
    <PageTransition>
      <main className="flex justify-center">
        <Newsletter />
      </main>
    </PageTransition>
  )
}
