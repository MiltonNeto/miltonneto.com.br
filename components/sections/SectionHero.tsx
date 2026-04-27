import styles from '../../styles/scss/components/sections/ItsMe.module.scss'

import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";

export default function SectionHero(){
    return(
            <>
                <Row>
                    
                    <Col xs="12" xxl="12" className={styles.contentText}>
                        <Container>
                            <h2>
                                Atuo na interseção entre UX, produto e estratégia,<br/>
                                estruturando soluções que reduzem complexidade<br/>
                                e tornam decisões mais claras.
                            </h2>
                        </Container>
                            <p>
                                Experiência de ponta a ponta em produtos digitais, da definição do problema à evolução do produto em colaboração com times de produto e tecnologia.
                            </p>       

                            <h3>+10 anos de experiência em produtos digitais</h3><br/><h4>E-commerce • Fintech • IA • Edtech • Streaming</h4>
                            
                            <button className={styles.buttonAction}>
                                <span>VER PROJETOS</span>
                                <Image src="/images/icones/arrow-down.svg" width="20" height="20" alt="Ícone de Bússola"/>
                            </button>                        
                    </Col>
                    
                    
                </Row>
            </>
    )
}