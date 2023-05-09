import Image from 'next/image'
import { AppProps } from 'next/app'
import styles from '../styles/page.module.css'
import '../styles/globals.css'
import RootLayout from '@/components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
