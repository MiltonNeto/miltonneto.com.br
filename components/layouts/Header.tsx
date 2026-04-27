import styles from '../../styles/scss/components/layouts/Header.module.scss'
import { Container } from 'react-bootstrap'
import Link from "next/link"
import Image from "next/image"

export default function Header(){
    return(
        <>

        <header className={styles.TopHeader}>
            <Container>
                
                    <div className={styles.siteTitle}>
                        <Link href="./" className={styles.mainLogo}>
                            <Image src="/images/logo-milton-blk.svg" width="26" height="30" alt="Milton Neto - Product, UI UX Designer" />
                        </Link>
                        <h1>Milton Neto</h1>
                    </div>                    
            </Container>
        </header>
    </>
    )
}