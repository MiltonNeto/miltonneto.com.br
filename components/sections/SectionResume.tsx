import styles from '../../styles/scss/components/sections/Resume.module.scss'

import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

export default function SectionResume(){
    return(
        <Container>
            <section id="resume">
                <h3 className="sectionTitle">
                    <Image src="/images/icones/location-color.png" width="48" height="48" alt="sectionIcon" className="sectionTitleIcon"/>
                    <span>Por onde eu já passei</span>
                </h3>
            
            
            <Row>
                <ul className={styles.resumeList}>
                    <Col xxl="6">
                        <li className={styles.resumeListItem}>
                            <div className={styles.box}>
                                <Image src='/images/logos/sass.jpg' width='30' height='30' alt="Universidade Unisul" />
                                <div className={styles.boxRight}>
                                    <h5>Nome da empresa</h5>
                                    <span className="date">Mês XXXX - Atual </span>
                                </div>
                            </div>
                            <ul className={styles.tasks}>
                                <li>Condução de entrevistas e testes com usuários de plataformas</li>
                                <li>Desenvolvimento protótipos navegáveis de alta e baixa fidelidade (Figma, XD e Sketch)</li>
                                <li>Análise de jornadas de usuários, melhoria contínua de produtos legados, planejamento e desenvolvimento de novas funcionalidades e produtos</li>
                                <li>Desenvolvimento de estratégia de atuação em atendimento de produtos de clientes internacionais</li>
                                <li>Atuação no laboratório de inovação dedicado</li>
                            </ul>
                        </li>
                    </Col>
                    
                </ul>
            </Row>

            </section>
        </Container>
    )
}