import styles from '../../styles/scss/components/layouts/Footer.module.scss'

import { Container, Row, Col} from "reactstrap";
import Image from 'next/image';
import { BsMailbox, BsPhoneVibrate, BsWhatsapp  } from "react-icons/bs";
import build from 'next/dist/build';

export default function Footer(){
    return(
        
        <>
        
        <div className={styles.footer}>
            <Container>
                <section id="TalkToMe">
                <h3 className="sectionTitle">
                    <Image src="/images/icones/conversation-color.png" width="48" height="48" alt="sectionIcon" className="sectionTitleIcon"/>
                    <span>Let's chat!</span>
                </h3>
                
                <Row className={styles.footerBoxes}>
                    <Col xxl="6" xs="12">
                    <div className={styles.box}>
                        <Image src='/images/logos/linkedin.jpg' width='30' height='30' alt="Universidade Unisul" />
                        <div className={styles.boxRight}>
                            <h5 className={styles.lineTitle}>Linkedin</h5>
                            <span className="Description">Lead UX Product Designer | Neuroscience and Applied Psychology Student</span>    
                        </div>
                    </div>
                    <a href='/downloads/MiltonNeto.pdf' target='_blank' className={styles.downloadCV}>Download CV</a>
                    </Col>
                    <Col xxl="6" xs="12">
                    <a href="mailto:leonardi.milton@gmail.com?subject=Contato via site" className={styles.textLink}>
                        <div className={styles.box}>
                            <BsMailbox className={styles.iconBox}/>
                            <div className={styles.boxRight}>
                                <span className="Description">leonardi.milton@gmail.com</span>    
                            </div>
                        </div>
                    </a>
                  
                    <a href="https://wa.me/5551985285102?text=Oi%20vi%20seu%20portfolio,%20podemos%20conversar?" className={styles.textLink}>
                        <div className={styles.box}>
                        <BsPhoneVibrate className={styles.iconBox}/><BsWhatsapp className={styles.iconBox}/>
                            <div className={styles.boxRight}>
                                <span className="Description">+55 51 98528.5102</span>
                            </div>
                        </div>
                    </a>
                    </Col>
                </Row>
                </section>

                <section className={styles.footerSignature}>
                    All Rights Reserved. 2023
                    <Image src="/images/logo-milton.svg" width="25" height="25" alt="Milton Neto UX Designer" />
                </section>
                
            </Container>
        </div>

        <div className={styles.MobileFooter}>
        <Container>
            <section id="TalkToMe">
            <h3 className="sectionTitle">
                <Image src="/images/icones/conversation-color.png" width="48" height="48" alt="sectionIcon" className="sectionTitleIcon"/>
                <span>Fale comigo!</span>
            </h3>
            
            <Row className={styles.footerBoxes}>
                <Col xs="12">
                <div className={styles.box}>
                    <Image src='/images/logos/linkedin.jpg' width='30' height='30' alt="Universidade Unisul" />    
                    <h5 className={styles.lineTitle}>Milton Neto - UX</h5>
                </div>
                
                <a href="mailto:leonardi.milton@gmail.com?subject=Contato via site" className={styles.textLink}>
                    <div className={styles.box}>
                        <BsMailbox className={styles.iconBox}/>
                        <div className={styles.boxRight}>
                            <span className="Description">leonardi.milton@gmail.com</span>    
                        </div>
                    </div>
                </a>
            
                <a href="https://wa.me/5551985285102?text=Oi%20vi%20seu%20portfolio,%20podemos%20conversar?" className={styles.textLink}>
                    <div className={styles.box}>
                    <BsPhoneVibrate className={styles.iconBox}/><BsWhatsapp className={styles.iconBox}/>
                        <div className={styles.boxRight}>
                            <span className="Description">+55 51 98528.5102</span>
                        </div>
                    </div>
                </a>
                <a href='/downloads/MiltonNeto.pdf' target='_blank' className={styles.downloadCV}>Download CV</a>
                </Col>
            </Row>
            </section>

            <section className={styles.footerSignature}>
                All Rights Reserved. 2023
                <Image src="/images/logo-milton.svg" width="25" height="25" alt="Milton Neto UX Designer" />
            </section>
            
        </Container>
        </div>
        
        </>
    
    )
}