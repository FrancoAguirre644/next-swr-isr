import '../styles/globals.css'
import Header from '../components/Header'
import Head from 'next/head'
import axios from 'axios'
import { SWRConfig } from 'swr'

axios.defaults.baseURL = "http://localhost:5000"

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{
      fetcher: (url) => axios(url).then(res => res.data),
      dedupingInterval: 10000
    }}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
