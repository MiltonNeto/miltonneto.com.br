import styles from '../../styles/scss/components/sections/ItsMe.module.scss'

import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

export default function SectionItsMe(){
    return(
            <>
                <Row>
                    
                    <Col xs="12" xxl="3">
                        <h3 className="sectionTitle">
                            <Image src='/images/eu-mobile.png' width="100" height="100" alt='Oi, esse sou eu ' className={styles.contentImage}/>
                        <span>Quem sou eu</span>
                    </h3>
                    </Col>
                    <Col xs="12" xxl={{ offset: 2, size: 7}} className={styles.contentText}>
                        <p>
                            Sou designer e mentor de experiências e interfaces, ou se preferir UX e UI. Moro em Canoas no Rio Grande do Sul, mas trabalho remoto também para diversas partes do mundo, como Espanha, Argentina, Estados Unidos, e Portugal. Sente-se, fique a vontade e aproveite esse nosso bate-papo.
                        </p>                      
                        
                        <Col xs="12" xxl="12" className="quote">
                            "Evoluir a cada entrega é meu objetivo, por isso digo que meu melhor trabalho é sempre o próximo."
                        </Col>
                    </Col>
                    
                    
                </Row>
            </>
    )
}