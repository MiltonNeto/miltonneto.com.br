import Head from 'next/head'
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
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    </Head>

    <main>
      <SectionItsMe />
      <SectionPortfolio />
      <SectionHowTo />
      <SectionResume />
    </main>

    </>
  )
}
