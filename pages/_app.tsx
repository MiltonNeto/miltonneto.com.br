import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import Head from 'next/head';

import MainContainer from '../components/layouts/MainContainer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="appBody">
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </div>
    </>
  )
}