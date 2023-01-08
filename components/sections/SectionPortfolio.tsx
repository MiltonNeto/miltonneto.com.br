import styles from '../../styles/scss/components/sections/Portfolio.module.scss'

import { Container, Row } from "reactstrap";
import Image from "next/image";

export default function SectionWhatIDo(){
    return(
        <Container>
            <section id="WhatIDo">
            <h3 className="sectionTitle">
                <Image src="/images/icones/plan-color.png" width="48" height="48" alt="O que eu faço" className="sectionTitleIcon" />
                <span>O que eu faço</span>
            </h3>
            
            <Row className="subcontent">
                <h4 className="subtitle">
                    <Image src="/images/icones/portfolio-color.png" width="35" height="35" alt="Conheça meus trabalhos" />
                    <span>Meu portfolio</span>
                </h4>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <Image src='/images/alexa.jpg' width='410' height='270' alt="Imagem de projeto" className={styles.cardImage} />
                            <ul className={styles.cardSkills}>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>
                            <div className={styles.cardAction}>
                                Conheça o Projeto
                            </div>
                        </div>
                    </div>
            </Row>

            <Row className="subcontent">
                <h4 className="subtitle">
                    <Image src="/images/icones/article-color.png" width="35" height="35" alt="Conheça meus trabalhos" />
                    <span>Artigos</span>
                </h4>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>Título do cartão</h6>
                            <p>Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                        </div>
                            <div className={styles.cardAction}>
                                Leia o artigo completo
                            </div>
                        </div>
                    </div>
                    
            </Row>
            </section>
        </Container>
    )
}