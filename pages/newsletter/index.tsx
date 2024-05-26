import Newsletter from 'components/NewsletterSignup'
import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'

export default function Page() {
  return (
    <PageTransition>
      <PageWrapper>
        <Newsletter />
      </PageWrapper>
    </PageTransition>
  )
}
