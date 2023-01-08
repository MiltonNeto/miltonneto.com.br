import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/scss/globals.scss';
import type { AppProps } from 'next/app'

import { Montserrat } from '@next/font/google'

import MainContainer from '../components/layouts/MainContainer'


export default function App({ Component, pageProps }: AppProps) {
  
  return (      
        <div id="appBody">
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </div>
    )
}
