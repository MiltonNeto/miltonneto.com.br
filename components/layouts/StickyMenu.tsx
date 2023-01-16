import styles from '../../styles/scss/components/layouts/StickyMenu.module.scss'

import { Nav, Navbar, NavbarBrand, Button} from "reactstrap"
import { BsThreeDots } from "react-icons/bs";




export default function StickyMenu(){
    
    return(
        
        <Nav className={styles.StickyMenu}> {/*<aside className={styles.mainMenu +".d-sm-none"}> usar este formato para adicionar classe simples com classe importada*/}
            <Navbar className={styles.StickyBody}>
            <NavbarBrand className={styles.StickyBrand} href="./">
                <img alt="Milton Neto - UX UI Designer" src="/images/logo-milton.svg" className={styles.StickyLogo} />
            </NavbarBrand>
            <button><BsThreeDots className={styles.OffcanvasTrigger}/></button>            
            </Navbar>
        </Nav>
    )       
}
