import styles from '../styles/scss/pages/ProjectsPage.module.scss'

import { Container, Row, Col } from "reactstrap";

import Image from 'next/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'



export default function ProjectAda(){
    return(
        <>
        <div className={styles.header +" "+ styles.ada}>
            <Container>
                <h2 className={styles.projectTitle}>A.D.A.</h2>
            </Container>
        </div>
        
        <Container>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                    <ul className={styles.bluePills}>
                        <label>Tools:</label>
                        <li>Figma</li>
                        <li>Photoshop</li> 
                        <li>XD</li>
                    </ul>
                    <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Virtual Assistent</li>
                    <li>Accessibility</li> 
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

        <Row className={styles.sectionDivision}>

        <h4 className={styles.sectionTitle}>Description</h4>
        <Col xxl='12'>
        <p>Automated diabetes control, quickly, easily and reliably. It works as an information and support center for blood glucose control, food, medication and ensuring your well-being.</p>
        </Col>
        </Row>

        <Row className={styles.sectionDivision}>
            <Col xxl="6">
                <h4 className={styles.sectionTitle}>Challenge</h4>
                <p>In general, blood glucose control is performed manually. Being subject to what the patient will consider should or should not be given as a point of attention, and may even make wrong notes to be able to 'cheat' your diet and eat THAT sweetie too much.
                </p>
            </Col>
            <Col XXl="6">
                <h4 className={styles.sectionTitle}>Objectives</h4>
                <p>The ADA serves as a companion for the person with diabetes, a virtual assistant that helps make the blood glucose control routine faster, lighter and without fraud, <strong>in addition to keeping your main contacts informed of your readings and sending notifications if necessary.</strong>
                </p>
            </Col>
        </Row>
            
        
        <Row className={styles.sectionDivision}>
            <h4 className={styles.sectionTitle}>Features</h4>
            <Col xxl="12" className={styles.SideBySide}>
            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon1.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Automatic cross-platform support for diabetes meters
            </div>
            
            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon2.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Smartwatch-paired functions such as reminders and alarms
            </div>

            <div className={styles.contentBox}>
                <Image src="/images/projetos/ada/icon3.png" width="200" height="200" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                Emergency function, notifies your main contacts if necessary
            </div>
            </Col>

        </Row>

        <Row className={styles.sectionDivision}>
            <Col xxl="8">
                <div className={styles.techBox}>
                    <p>The A.D.A. consumes the API of leading automated blood glucose monitoring devices on the market to generate blood sugar change reports.
                    </p>
                </div>
                <div className="quote">
                    "This App brings more reliability and safety in diabetes control. Taking readings with the main devices automatically and notifying you in cases of emergency. I see a lot of potential benefit to the user, in addition to a very high potential for adherence"<br />
                    <span className='quoteSignature'>
                    Application reviewer's opinion
                    </span>
                </div>
            </Col>
            <Col xxl="4" xs="12">
            <Image src="/images/projetos/ada/screen-1.webp" width="380" height="450" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            </Col>

            <div className={styles.imageList}>
                <Image src="/images/projetos/ada/screen-2.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-3.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-4.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-5.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-6.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-7.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-8.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-9.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-10.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-11.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-12.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                <Image src="/images/projetos/ada/screen-13.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
            
            </div>

            <Row className={styles.sectionDivision}></Row>
            
            <h3 className="sectionTitle">
                  <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                  <span>See other of my works</span>
              </h3>
            <SectionPortfolio />

        </Row>
        </Container>

        </>
    )
}