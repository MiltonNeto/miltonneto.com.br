import Script from 'next/script'
import Head from 'next/head'
import { Container } from 'reactstrap'
import Image from 'next/image'
import Header from '../components/layouts/Header'
import SectionItsMe from '../components/sections/SectionItsMe'
import SectionPortfolio from '../components/sections/SectionPortfolio'
import SectionHowTo from '../components/sections/SectionHowTo'
import SectionResume from '../components/sections/SectionResume'


export default function Home() {
 
  return (
    <>
    <Head>
      <title>Milton Neto - Designer e mentoria de User Experience e Interface | UX e UI</title>
      <meta name="description" content="Portfolio Digital de Milton Neto, Designer de interfaces digitais e especialista em experiência de usuário. Chega aí, vamos bater um papo sobre seu projeto!"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
    </Head>
      <>
        <div className='main'>

        <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
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
          
          <Container>
            <section id="ItsMe" className="itsme">
                <h3 className="sectionTitle">
                    <Image src="/images/icones/alien-color.png" width='48' height='48' alt="Quem sou eu na fila do pão?" className='sectionTitleIcon' />
                    <span>Quem sou eu</span>
                </h3>
                <SectionItsMe />
            </section>
          
            <section id="WhatIDo">
              <h3 className="sectionTitle">
                  <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                  <span>O que eu faço</span>
              </h3>
              <SectionPortfolio />
            </section>

            <section id="HowTo">
            <h3 className="sectionTitle">
                <Image src="/images/icones/writing-color.png" width='48' height= '48' alt="Como eu faço" className='sectionTitleIcon' />
                <span>Como eu faço</span>
            </h3>
              <SectionHowTo />
            </section>

            <section id="resume">
                <h3 className="sectionTitle">
                    <Image src="/images/icones/location-color.png" width= '48' height= '48' alt="sectionIcon" className="sectionTitleIcon"/>
                    <span>Por onde eu já passei</span>
                </h3>
              <SectionResume />
            </section>
          </Container>
          
        </div>
      </>
    </>
  )
}
