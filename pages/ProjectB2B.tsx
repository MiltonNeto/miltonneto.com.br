import styles from '../styles/scss/pages/ProjectsPage.module.scss'
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'
import Head from "next/head";
export default function ProjectB2B(){
    return(
        
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        </Head>

        <div>
        <div className={styles.header+" "+ styles.b2b} >
            <div className={styles.headerOverlay}></div>

                <Container className={styles.headerContent}>
                    
                    <span className={styles.caseLabel}>Projeto</span>

                    <h1 className={styles.projectTitle}>
                    Plataforma B2B
                    </h1>

                    <p className={styles.caseSubline}>
                    Interface para gestão e conexão entre empresas, projetada para simplificar fluxos complexos e tornar processos comerciais mais claros e eficientes.
                    </p>

                    <div className={styles.caseMeta}>
                    <span>UI Design</span>
                    <span>UX</span>
                    <span>B2B</span>
                    <span>Plataforma Web</span>
                    </div>

                    <p className={styles.caseContext}>
                    O desafio não era apenas criar uma interface, mas organizar um sistema com múltiplos fluxos, decisões e dependências, reduzindo fricção em um ambiente naturalmente complexo.
                    </p>

                </Container>
        </div>

        <Container  className={styles.projectsBody}>
            
            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/b2b/s1.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s2.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s3.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s4.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s5.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s6.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s7.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s8.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s9.png" alt="App Atacado b2b"/>
                    <img src="/images/projetos/b2b/s10.png" alt="App Atacado b2b"/>
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