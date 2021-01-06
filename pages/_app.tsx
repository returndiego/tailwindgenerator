import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { GlobalProvider } from '../context/GlobalState'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Practice landing page create to improve Core Web Vitals."
        />
        <meta name="keywords" content="Core Web Vitals, Lighthouse" />
        {/* <link href="/favicon.ico" rel="icon" /> */}
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  )
}
