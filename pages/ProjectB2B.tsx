import styles from "../styles/scss/pages/ProjectPageUI.module.scss"
import Lightbox from "react-awesome-lightbox";

import { Container, Row, Col } from "reactstrap";

import Image from 'next/legacy/image';
import SectionPortfolio from '../components/sections/SectionPortfolio'

export default function ProjectB2B(){
    return(
        <div>
        <div className={styles.header+" "+ styles.b2b} >
            <Container>
                <Row>
                    <Col xxl={{ offset: 2, size: 8}}  className={styles.toolsList}>
                    <p className={styles.subject}><strong>PORTFOLIO</strong> - User Interface</p>
                    <h1 className={styles.projectTitle}>App Atacado B2B</h1>
                    <p>Projeto de loja virtual por atacado. Com regras mínimas de compras, exposição de produtos, acompanhamento de número de itens sempre visível e timer de encerramento de período para aquisição de coleção</p>
                    </Col>
                </Row>
            </Container>
        </div>

        <Container  className={styles.projectsBody}>
            <Row>
                <Col xxl='12' className={styles.toolsList}>
                <ul className={styles.bluePills}>
                    <label>Ferramentas:</label>
                    <li>Figma</li>
                    <li>Figjam</li>
                </ul>
                <ul className={styles.redPills}>
                    <label>Tags:</label>
                    <li>Virtual Store</li>
                    <li>Wholesale store</li>
                    <li>Conditional Sales</li>
                    <li>Product Design</li>
                    </ul>
                </Col>
            </Row>

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
                    <span>See other of my works</span>
                </h3>
                <SectionPortfolio />
                
            </Container>
                <div className={styles.breakline}></div>
        </div>
    )
}