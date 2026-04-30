import styles from "../styles/scss/pages/ProjectPageUI.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'
import Head from "next/head";
export default function ProjectEuroland(){
    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        </Head>

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
    </>
    )
}