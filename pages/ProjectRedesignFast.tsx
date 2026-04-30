import styles from '../styles/scss/pages/ProjectsPage.module.scss'
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'
import Head from "next/head";
export default function ProjectRedesignFast(){
    return(
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        </Head>

        <div>
        <div className={`${styles.header} ${styles.fastcompras}`}>
            <div className={styles.headerOverlay}></div>

            <Container className={styles.headerContent}>
                
                <span className={styles.caseLabel}>Projeto</span>

                <h1 className={styles.projectTitle}>
                Redesign Fast
                </h1>

                <p className={styles.caseSubline}>
                Redesign de interface orientado à melhoria de usabilidade, com foco em reduzir fricção e tornar fluxos mais claros e eficientes.
                </p>

                <div className={styles.caseMeta}>
                <span>UX</span>
                <span>UI</span>
                <span>Redesign</span>
                <span>Usabilidade</span>
                </div>

                <p className={styles.caseContext}>
                O ponto de partida foi uma experiência com inconsistências visuais e operacionais, onde usuários enfrentavam dificuldade para concluir tarefas de forma simples e previsível.
                </p>

            </Container>
        </div>

        <Container  className={styles.projectsBody}>
            
            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/fastcompras/01.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/02.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/03.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/04.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/05.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/06.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/07.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/08.jpg" width="620" height="945" alt="Institutional redesign"/>
                    <img src="/images/projetos/fastcompras/09.jpg" width="620" height="945" alt="Institutional redesign"/>
                    
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