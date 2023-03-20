import styles from "../styles/scss/pages/ProjectPageUI.module.scss"

import { Container, Row, Col } from "reactstrap";

import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectMedi(){
    return(
        <div>
        <div className={styles.header+" "+ styles.alexa} >
            <Container>
                <Row>
                    <Col xxl={{ offset: 2, size: 8}}  className={styles.toolsList}>
                    <p className={styles.subject}><strong>PORTFOLIO</strong> - User Interface</p>
                    <h1 className={styles.projectTitle}>Medi</h1>
                    <p>Proposta de redesign de site institucional, atualizando com os primeiros estudos de UX. Uso de técnicas de métodos ágeis, e pesquisa com usuários, não foram utilizados wireframes para organização do storytelling e arquitetura da informação</p>
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
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Interface de voz</li>
                    <li>Assistente Virtual</li>
                    <li>Alexa</li>
                    <li>Chatbot</li>
                    <li>Inteligência Artificial</li>
                    <li>Acessibilidade</li>
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

            <Row className={styles.sectionDivision}>
                <Col xxl="12">
                <div className={styles.imageList}>
                    <img src="/images/projetos/ada/screen-2.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-3.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-4.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-5.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-6.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-7.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-8.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-9.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-10.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-11.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-12.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
                    <img src="/images/projetos/ada/screen-13.webp" width="470" height="945" alt="Projeto finalista do Prêmio Seleção Mobile Time"/>
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