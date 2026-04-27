import styles from '../../styles/scss/components/sections/ItsMe.module.scss'

import Image from "next/image";
import { Row, Col } from "react-bootstrap";

export default function SectionItsMe(){
    return(
            <>
                <Row>
                    
                    <Col xs="12" xxl="7">
                        <h3 className="sectionTitle">
                            <span>Sobre mim</span>
                        </h3>
                        <p className={styles.contentTextResume}>
                            Sou Product Designer com mais de 10 anos de experiência em produtos digitais. Meu trabalho não começa na interface, começa na compreensão do problema.
                            <br/>
                            <br/>
                            Prefiro organizar cenários complexos antes de desenhar soluções, garantindo que cada decisão tenha contexto e direção.
                            <br/>
                            <br/>
                            Ao longo da minha trajetória, atuei em diferentes produtos digitais, sempre buscando equilibrar experiência, negócio e viabilidade técnica.
                        </p>                      
                    </Col>
                    <Col xs="12" xxl="5" className={styles.contentImage}>
                            <Image src='/images/milton-neto.jpg' width="320" height="420" alt='Milton Neto - Designer de produto, UX / UI'/>
                    </Col>
                </Row>
            </>
        )
    }