import styles from '../../styles/scss/components/layouts/Footer.module.scss'

import { Container, Row, Col} from "reactstrap";
import Image from 'next/image';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <Container>
                <section id="TalkToMe">
                <h3 className="sectionTitle">
                    <Image src="/images/icones/conversation-color.png" width="48" height="48" alt="sectionIcon" className="sectionTitleIcon"/>
                    <span>Fale comigo!</span>
                </h3>
                
                <Row className={styles.footerBoxes}>
                    <Col xxl="6">
                    <div className={styles.box}>
                        <Image src='/images/logos/sass.jpg' width='30' height='30' alt="Universidade Unisul" />
                        <div className={styles.boxRight}>
                            <h5 className={styles.lineTitle}>Linkedin</h5>
                            <span className="Description">Lead UX Designer na Dentsu World Services | Estudante de Neurociência e Psicologia Aplicada</span>    
                        </div>
                    </div>
                    </Col>
                    <Col xxl="6">
                    <div className={styles.box}>
                        <Image src='/images/logos/sass.jpg' width='30' height='30' alt="Universidade Unisul" />
                        <div className={styles.boxRight}>
                            <span className="Description">leonardi.milton@gmail.com</span>    
                        </div>
                    </div>
                  
                    <div className={styles.box}>
                    <Image src='/images/logos/sass.jpg' width='30' height='30' alt="Universidade Unisul" />
                        <div className={styles.boxRight}>
                            <span className="Description">+55 51 98528.5102</span>
                        </div>
                    </div>
                    </Col>
                </Row>
                </section>

                <section className={styles.footerSignature}>
                    All Rights Reserved. 2023
                    <Image src="/images/logo-milton.svg" width="25" height="25" alt="Milton Neto UX Designer" />
                </section>
                
            </Container>
        </div>
    )
}