import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'

export default function Page() {
  return (
    <PageTransition>
      <PageWrapper>
        <div className="">about</div>
      </PageWrapper>
    </PageTransition>
  )
}
