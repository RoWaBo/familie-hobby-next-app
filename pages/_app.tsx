import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Head from '../components/Head'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Head />
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
