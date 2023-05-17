import Head from 'next/head'
import { AppProps } from 'next/app'
import RootLayout from '@/components/layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <title>FLL Scoring System</title>
        <meta name="description" content="FLL Scoring System - Cargo Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  )
}
