import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage(  ) {
  return (
    <>
        <h1>About Us</h1>
        <h1 className="title">
          Ir A <Link href="/contact"> Contact</Link>
        </h1>
    </>

  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>


  )
}
