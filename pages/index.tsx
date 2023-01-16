import Head from 'next/head'
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
          <Header />
          <SectionItsMe />
          <SectionPortfolio />
          <SectionHowTo />
          <SectionResume />
        </div>
      </>
    </>
  )
}
