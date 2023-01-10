import style from '../../styles/scss/components/layouts/Header.module.scss'

import Image from 'next/image'
import Link from 'next/link'

export default function Header(){
    return(
        <header>
            <nav className={style.mainNavigation}>
                <Link href='/' className={style.homeLink}>
                <Image src='/images/logo-milton.svg' width="30" height="67" alt="Milton Neto | UX UI Designer" />
                </Link>
                
                <ul className={style.linkList}>
                    <li className={style.linkListItem}><a href="#ItsMe">Quem sou eu</a></li>
                    <li className={style.linkListItem}><a href="#WhatIDo">O que eu faço</a></li>
                    <li className={style.linkListItem}><a href="#HowTo">Como eu faço</a></li>
                    <li className={style.linkListItem}><a href="#Resume">Por onde eu passei</a></li>
                    <li className={style.linkListItem}><a href="#TalkToMe">Fale comigo</a></li>
                </ul>
            </nav>


        </header>
    )
}