import Image from 'next/image'
import { AppProps } from 'next/app'
import styles from '../styles/page.module.css'
import '../styles/globals.css'
import RootLayout from '@/components/layout'
import Head from 'next/head'

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
