import type { NextPage } from 'next'
import Head from 'next/head'
import Postbox from '../components/Postbox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2.0 Clone</title>
      </Head>

      {/* Postbox */}
      <Postbox />

      <div>{/* Feed */}</div>
    </div>
  )
}

export default Home
