import styles from "../styles/scss/pages/ProjectPageUI.module.scss"

import { Container, Row, Col } from "reactstrap";

import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectEuroland(){
    return(
        <div>
        <div className={styles.header+" "+ styles.euroland} >
            <Container>
                <Row>
                    <Col xxl={{ offset: 2, size: 8}}  className={styles.toolsList}>
                    <p className={styles.subject}><strong>PORTFOLIO</strong> - User Interface</p>
                    <h1 className={styles.projectTitle}>Euroland</h1>
                    <p>Concept and design of institutional website, for a high-end mechanical workshop, focused on imported and luxury cars. The project also included, in the future, the development of an application that would allow scheduling appointments for service, as well as communication about all steps of the vehicle during maintenance.</p>
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
                    <li>Illustrator</li>
                    <li>Adobe XD</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Personalized Service</li>
                    <li>Institutional Marketing</li>
                    <li>Specialized Services</li>                    
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/euroland/wf.png" width="470" height="945" alt="Euroland"/>
                    <img src="/images/projetos/euroland/01.png" width="470" height="945" alt="Euroland"/>
                    <img src="/images/projetos/euroland/02.png" width="470" height="945" alt="Euroland"/>
                    <img src="/images/projetos/euroland/03.png" width="470" height="945" alt="Euroland"/>                    
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