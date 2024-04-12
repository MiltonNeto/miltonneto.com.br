import styles from "../styles/scss/pages/ProjectPageUI.module.scss"

import { Container, Row, Col } from "reactstrap";

import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectMedi(){
    return(
        <div>
        <div className={styles.header+" "+ styles.medi} >
            <Container>
                <Row>
                    <Col xxl={{ offset: 2, size: 8}}  className={styles.toolsList}>
                    <p className={styles.subject}><strong>PORTFOLIO</strong> - User Interface</p>
                    <h1 className={styles.projectTitle}>Medi</h1>
                    <p>Energy control tool, focused on fixed and mobile devices, where it will be possible to control all automation in the house, such as lights, energy consumption and production of solar plants. In addition to being integrated with Alexa and Google Home</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <Container  className={styles.projectsBody}>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                    <label>Tools:</label>
                    <li>Photoshop</li>
                    <li>Miro</li>
                    <li>Illustrator</li>
                    <li>Figma</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Energy Efficiency</li>
                    <li>Smarthouse Control</li>
                    <li>Energy Consuption Control</li>
                    <li>Voice assistents integration</li>
                    <li>Artificial intelligence</li>
                    <li>Acessibility</li>
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/medi/01.png" width="470" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/02.png" width="470" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/03.png" width="470" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/logo.png" width="470" height="945" alt="Medi Energy controller"/>                    
                </div>
                </Col>
            </Row>




                <Row className={styles.breakline}></Row>
                
                <h3 className="sectionTitle">
                    <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                    <span>Veja outros trabalhos</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    )
}