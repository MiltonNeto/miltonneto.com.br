import styles from '../../styles/scss/components/layouts/StickyMenu.module.scss'

import { Nav, Navbar, NavbarBrand, Button} from "reactstrap"
import Link from 'next/link';
import Image from 'next/image';
import { BsThreeDots } from "react-icons/bs";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsMailbox, BsPhoneVibrate, BsWhatsapp, BsLinkedin } from "react-icons/bs";




export default function StickyMenu(){
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Nav className={styles.StickyMenu}> {/*<aside className={styles.mainMenu +".d-sm-none"}> usar este formato para adicionar classe simples com classe importada*/}
            <Navbar className={styles.StickyBody}>
            <NavbarBrand className={styles.StickyBrand} href="./">
                <img alt="Milton Neto - UX UI Designer" src="/images/logo-milton.svg" className={styles.StickyLogo} />
            </NavbarBrand>
                <Button onClick={handleShow}>
                    <BsThreeDots className={styles.OffcanvasTrigger}/>
                </Button>            
            </Navbar>
            <div className={styles.navcolorborder}></div>
        </Nav>
       

        <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='end'>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Image src='/images/miltonneto.webp' width="85" height="85" alt='Oi, esse sou eu ' className="MobileMenuImage" />
        <ul className='MobileMenuLinks'>
            <li><Link href="./#ItsMe">Quem sou eu</Link></li>
            <li><Link href="./#WhatIDo">Meu Portfolio</Link></li>
            <li><Link href="./#HowTo">Como eu trabalho</Link></li>
            <li><Link href="./#resume">Por onde eu passei</Link></li>            
        </ul>
        <div className='MobileMenuSeparator'></div>
        <div className='contactMobile'>
            <a href="#"><BsLinkedin className='contactMobileIcon'/></a>
            <a href="#"><BsMailbox className='contactMobileIcon'/></a>
            <a href="#"><BsPhoneVibrate className='contactMobileIcon'/></a>
            <a href="#"><BsWhatsapp className='contactMobileIcon'/></a>            
        </div>
        <a href='/downloads/MiltonNeto.pdf' target='_blank' className='MobileDownload'>CV Download</a>
        <div className='MobileMenuSeparator'></div>
        <div className='MobileSignature'>Milton Neto | UX UI Designer - 2023 All Rights Reserved</div>

        
        </Offcanvas.Body>
      </Offcanvas>

        </>
    )       
}
