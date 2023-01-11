import styles from '../../styles/scss/components/sections/Portfolio.module.scss'

import { Container, Row } from "reactstrap";
import Image from "next/image";

import Link from 'next/link';

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
                        <Link href="/ProjectAlexa" className={styles.card}>
                            <Image src='/images/alexa.jpg' width='410' height='270' alt="Imagem de projeto" className={styles.cardImage} />
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Alexa</li>
                                <li>Miro</li>
                            </ul>
                            <div className={styles.cardAction}>
                                Conheça o Projeto
                            </div>
                        </Link>
                        <Link href="/ProjectAda" className={styles.card}>
                            <Image src='/images/projetos/ada/thumb-ada.png' width='410' height='270' alt="Imagem de projeto" className={styles.cardImage} />
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>XD</li>
                            </ul>
                            <div className={styles.cardAction}>
                                Conheça o Projeto
                            </div>
                        </Link>
                        <Link href="/ProjectChapterUX" className={styles.card}>
                            <Image src='/images/projetos/chapter/thumb-chapter.png' width='410' height='270' alt="Imagem de projeto" className={styles.cardImage} />
                            <ul className={styles.cardSkills}>
                                <li>Figma</li>
                            </ul>
                            <div className={styles.cardAction}>
                                Conheça o Projeto
                            </div>
                        </Link>
                    </div>
            </Row>

            <Row className="subcontent">
                <h4 className="subtitle">
                    <Image src="/images/icones/article-color.png" width="35" height="35" alt="Conheça meus trabalhos" />
                    <span>Artigos</span>
                </h4>
                <div className={styles.cards}>
                    <Link href="https://www.linkedin.com/pulse/o-boom-do-ux-mas-quem-%C3%A9-esse-profissional-milton-neto/" target='_blank' className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>O boom do UX, mas quem é esse profissional?</h6>
                            <p>A busca de mercado pela posição de User Experience é crescente e notória, e de acordo com essa procura, aumenta junto, o número de profissionais...</p>
                        </div>
                        <div className={styles.cardAction}>
                            Ler o artigo completo
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/montando-portf%C3%B3lio-de-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>Montando Portfólio de UX</h6>
                            <p>Cada dia mais vemos oportunidades surgindo para a nossa profissão, mesmo em tempos de pandemia temos diariamente vagas e mais vagas sendo anunciadas...</p>
                        </div>
                        <div className={styles.cardAction}>
                            Ler o artigo completo
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/pulse/o-encaixotamento-do-ux-milton-neto/" target="_blank" className={styles.card}>
                        <div className={styles.cardText}>
                            <h6 className={styles.cardTextTitle}>O encaixotamento do UX</h6>
                            <p>Há algum tempo atuo como UX Lead, estando a frente de equipes e desenvolvendo profissionais que me surpreendem diariamente e muitas vezes me fazem questionar...</p>
                        </div>
                        <div className={styles.cardAction}>
                            Ler o artigo completo
                        </div>
                    </Link>
                    
                </div>
                
            </Row>
            </section>
        </Container>
    )
}