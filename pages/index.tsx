import Script from 'next/script'
import Head from 'next/head'
import { Container } from 'reactstrap'
import Header from '../components/layouts/Header'
import SectionHomeHero from '../components/sections/SectionHomeHero'
import SectionPortfolio from '../components/sections/SectionPortfolio'


export default function Home() {
 
  return (
    <>
    <Head>
      <title>Milton Neto - Designer e mentoria de User Experience e Interface | UX e UI</title>
      <meta name="description" content="Portfolio Digital de Milton Neto, Designer de interfaces digitais e especialista em experiência de usuário. Chega aí, vamos bater um papo sobre seu projeto!"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <link rel="icon" href="/favicon.ico" />
      
    </Head>
      <>
        <div className='main'>

        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-D4FGK6BR9K"
        strategy="afterInteractive"
        />
         <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-D4FGK6BR9K');
        `}
        </Script>



          <Header />
          
          <section id="HomeHero" className="mainHomeBanner">
              <SectionHomeHero/>
            </section>

          <Container>
            <section id="WhatIDo">
              <SectionPortfolio />
            </section>
          </Container>
          
        </div>
      </>
    </>
  )
}
