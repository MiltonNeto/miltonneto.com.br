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
                    <p>Ferramenta de controle de energia, focada em dispositivos fixos e móveis, que permite controlar toda a automação da casa, como luzes, consumo de energia e produção de energia solar. Além disso, integra-se com Alexa e Google Home.</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <Container  className={styles.projectsBody}>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                    <label>Ferramentas:</label>
                    <li>Photoshop</li>
                    <li>Miro</li>
                    <li>Illustrator</li>
                    <li>Figma</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Eficiência Energética</li>
                    <li>Controle de Smarthouse</li>
                    <li>Controle de consumo de energia</li>
                    <li>Integração de assistentes de voz</li>
                    <li>Inteligência Artificial</li>
                    <li>Acessibilidade</li>
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/medi/01.png" width="620" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/02.png" width="620" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/03.png" width="620" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/logo.png" width="620" height="945" alt="Medi Energy controller"/>                    
                </div>
                </Col>
            </Row>




                <Row className={styles.breakline}></Row>
                
                <h3 className="sectionTitle">
                    <Image src="/images/icones/plan-color.png" width='48' height='48' alt="O que eu faço" className="sectionTitleIcon" />
                    <span>Veja outros dos meus trabalhos</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    )
}