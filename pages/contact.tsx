import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';




export default function Home() {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <h1 className="title" >
        Ir A <Link href="/pricing"> Pricing</Link>
      </h1>
    </MainLayout>
  )
}
