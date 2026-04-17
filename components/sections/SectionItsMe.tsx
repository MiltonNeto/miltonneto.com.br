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
                        <span>Quem sou eu?</span>
                    </h3>
                    </Col>
                    <Col xs="12" xxl="9" className={styles.contentText}>
                        <p>
                        Senior product designer com mais de 10 anos de experiência em concepção e evolução de produtos digitais. Atuação sólida em plataformas de alta complexidade, fintech, streaming, edtech e e-commerce. Experiência em criação  e implementação  de Design Systems escaláveis, integração entre design e desenvolvimento  (Sass, Next.js), definição de arquitetura de interface e melhoria contínua da experiência do usuário com base em dados comportamentais.
                        <br/>
                        <br/>
                        Vivência em liderança técnica, estruturação de Design Ops e colaboração com times multidisciplinares em ambientes ágeis.
                        </p>                      
                        
                        {/*<Col xs="12" xxl="12" className="quote">
                        "My goal is to evolve with each new delivery, that's why I say that my best work is always the next one."
                        </Col>*/}
                    </Col>
                    
                    
                </Row>
            </>
    )
}