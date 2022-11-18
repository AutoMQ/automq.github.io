import Head from 'next/head'

import { Footer } from '@/components/index/Footer'
import { Header } from '@/components/index/Header'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main className='overflow-x-hidden'>
          {props.children}
      </main>
      <Footer />
    </>
  )
}
