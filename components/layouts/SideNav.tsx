import styles from '../../styles/scss/components/layouts/SideNav.module.scss'

import { Nav, NavItem, NavLink} from "reactstrap"
import Link from "next/link"
import Image from "next/image"
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/perspective-extreme.css';

export default function SideNav(){
    
    return(
        
        <aside className={styles.mainMenu}> {/*<aside className={styles.mainMenu +".d-sm-none"}> usar este formato para adicionar classe simples com classe importada*/}
            <Link href="./" className={styles.mainLogo}>
                <Image src="/images/logo-milton.svg" width="24" height="33" alt="Milton Neto Designer UI UX" />
            </Link>

            <Nav vertical className={styles.menuBox}>
            
            <NavItem className={styles.menuItem} >
                <NavLink href="./#ItsMe">
                    <Tippy content="Quem sou eu" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/alien-outline.png" alt="Quem sou eu"  width="35" height="35" />
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#WhatIDo">
                    <Tippy content="Meu Portfolio" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/plan-outline.png" alt="No que eu atuo"  width="35" height="35"/>
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#HowTo">
                    <Tippy content="Minhas Skills" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/writing-outline.png" alt="Minhas Skills e formação acadêmica"  width="35" height="35" className={styles.menuItemImage}/>
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#resume">
                    <Tippy content="Por onde eu passei" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/location-outline.png" alt="Um pouco da minha trajetória profissional"  width="35" height="35" />
                    </Tippy>
                </NavLink>
            </NavItem>
            <NavItem className={styles.menuItem}>
                <NavLink href="./#TalkToMe">
                    <Tippy content="Fale comigo" placement="right" animation="perspective-extreme" className={styles.tippyBox} >
                        <Image src="/images/icones/conversation-outline.png" alt="Quer falar comigo? Chama aí, vamos bater um papo."  width="35" height="35"/>
                    </Tippy>
                </NavLink>
            </NavItem>
            </Nav>

            
 
            
        </aside>
    )       
}
