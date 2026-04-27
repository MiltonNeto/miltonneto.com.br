import styles from "../styles/scss/pages/ProjectPageUI.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'
export default function ProjectEuroland(){
    return(
        <div>
        <div className={styles.header+" "+ styles.euroland} >
            <Container>
                <Row>
                    <Col xxl={{  span: 8 ,offset: 2}}  className={styles.toolsList}>
                    <p className={styles.subject}><strong>PORTFOLIO</strong> - User Interface</p>
                    <h1 className={styles.projectTitle}>Euroland</h1>
                    <p>Conceito e design de website institucional para uma oficina mecânica de alto padrão, especializada em carros importados e de luxo. O projeto também incluiu, futuramente, o desenvolvimento de um aplicativo que permitirá o agendamento de serviços, bem como a comunicação sobre todas as etapas da manutenção do veículo.</p>
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
                    <li>Illustrator</li>
                    <li>Adobe XD</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Serviços personalizados</li>
                    <li>Marketing Institucional</li>
                    <li>Serviços Especializados</li>                    
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/euroland/wf.png" width="1300" height="1200" alt="Euroland"/>
                    <img src="/images/projetos/euroland/01.png" width="600" height="945" alt="Euroland"/>
                    <img src="/images/projetos/euroland/02.png" width="600" height="945" alt="Euroland"/>
                    <img src="/images/projetos/euroland/03.png" width="600" height="945" alt="Euroland"/>
                    
                                        
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