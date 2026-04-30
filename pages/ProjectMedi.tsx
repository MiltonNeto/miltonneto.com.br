import styles from '../styles/scss/pages/ProjectsPage.module.scss'
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'
import Head from "next/head";
export default function ProjectMedi(){
    return(
        <>
        
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        </Head>

        <div>
        <div className={`${styles.header} ${styles.medi}`}>
            <div className={styles.headerOverlay}></div>

            <Container className={styles.headerContent}>
                
                <span className={styles.caseLabel}>Projeto</span>

                <h1 className={styles.projectTitle}>
                Medi
                </h1>

                <p className={styles.caseSubline}>
                Nem todo problema de design é visual. Este projeto foca em estruturar informação e comportamento em um sistema onde o usuário depende de clareza para tomar decisões.
                </p>

                <div className={styles.caseMeta}>
                <span>UX</span>
                <span>Produto</span>
                <span>IoT</span>
                <span>Sistema</span>
                </div>

                <p className={styles.caseContext}>
                O desafio não estava na interface, mas na estrutura: transformar dados, eventos e interações em uma experiência compreensível e confiável para o usuário.
                </p>

            </Container>
            </div>

        <Container  className={styles.projectsBody}>
            

            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/medi/01.png" width="620" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/02.png" width="620" height="945" alt="Medi Energy controller"/>
                    <img src="/images/projetos/medi/03.png" width="620" height="945" alt="Medi Energy controller"/>                 
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