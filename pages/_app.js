import '../styles/globals.css'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
