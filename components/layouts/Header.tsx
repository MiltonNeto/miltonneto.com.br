import style from '../../styles/scss/components/layouts/Header.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'reactstrap'

export default function Header(){
    return(
        <header>
            <div className={style.greetings}>
                <Container>
                    <h1>Oi, muito prazer. Eu sou Milton Neto!</h1>
                    <h2 className={style.subline}>Sou designer e mentor de experiências e interfaces, ou se preferir UX e UI<br/>
                        fique a vontade, aproveite esse nosso bate-papo.
                    </h2>
                </Container>
            </div>


            
            <nav className={style.mainNavigation}>
                <Container>
                    <Link href='/' className={style.homeLink}>
                    <Image src='/images/logo-milton.svg' width="50" height="97" alt="Milton Neto | UX UI Designer" />
                    </Link>
                    
                    <ul className={style.linkList}>
                        <li className={style.linkListItem}><a href="#ItsMe">Quem sou eu</a></li>
                        <li className={style.linkListItem}><a href="#WhatIDo">O que eu faço</a></li>
                        <li className={style.linkListItem}><a href="#HowTo">Como eu faço</a></li>
                        <li className={style.linkListItem}><a href="#Resume">Por onde eu passei</a></li>
                        <li className={style.linkListItem}><a href="#TalkToMe">Fale comigo</a></li>
                    </ul>
                </Container>
            </nav>


        </header>
    )
}