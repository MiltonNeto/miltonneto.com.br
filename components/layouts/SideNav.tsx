import styles from '../../styles/scss/components/layouts/SideNav.module.scss'

import { Nav, NavItem, NavLink} from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/perspective-extreme.css';

export default function SideNav(){
    
    return(
        
        <aside className={styles.mainMenu}> {/*<aside className={styles.mainMenu +".d-sm-none"}> usar este formato para adicionar classe simples com classe importada*/}
            {/*<Link href="./" className={styles.mainLogo}>
                <Image src="/images/logo-milton.svg" width="24" height="33" alt="Milton Neto - Product, UI UX Designer" />
            </Link>*/}

            <Nav className={`flex-column ${styles.menuBox}`}>
            
            <NavItem className={styles.menuItem} >
                <NavLink href="./#">
                    <Tippy content="Início" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/circle-dot.svg" alt="Ícone de início"  width="24" height="24" />
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#WhatIDo">
                    <Tippy content="Projetos" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/folder-open-dot.svg" alt="Ícone de projetos"  width="24" height="24"/>
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#resume">
                    <Tippy content="Experiências" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/waypoints.svg" alt="Ícone de experiências"  width="24" height="24" />
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem} >
                <NavLink href="./#ItsMe">
                    <Tippy content="Sobre mim" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/fingerprint-pattern.svg" alt="Ícone sobre mim"  width="24" height="24" />
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#HowTo">
                    <Tippy content="Minha atuação" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/blocks.svg" alt="Link de minha atuação"  width="24" height="24" className={styles.menuItemImage}/>
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#TalkToMe">
                    <Tippy content="Fale comigo" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/message-square-text.svg" alt="Fale comigo, vamos conversar"  width="24" height="24"/>
                    </Tippy>
                </NavLink>
            </NavItem>
            </Nav>

            
 
            
        </aside>
    )       
}
